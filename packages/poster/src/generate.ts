import { hexToRgb } from "@event-sdk/core";
import sharp from "sharp";
import { getTemplateLayout } from "./templates";
import type {
	PosterGenerateOptions,
	GeneratedAsset,
	FilterSettings,
} from "./types";
import { DEFAULT_FILTER_SETTINGS } from "./types";

function mergeFilterSettings(partial?: Partial<FilterSettings>): FilterSettings {
	return { ...DEFAULT_FILTER_SETTINGS, ...partial };
}

async function cropPhotoToRegion(
	photoBuffer: Buffer,
	region: { x: number; y: number; width: number; height: number },
	faceDetection?: PosterGenerateOptions["faceDetection"],
	filterSettings?: FilterSettings,
): Promise<Buffer> {
	let pipeline = sharp(photoBuffer);
	const metadata = await pipeline.metadata();
	const srcW = metadata.width ?? region.width;
	const srcH = metadata.height ?? region.height;

	if (faceDetection && filterSettings?.autoPosition) {
		const face = faceDetection.faceBox;
		const faceCenter = { x: face.x + face.width / 2, y: face.y + face.height / 2 };
		const scale = Math.max(region.width / face.width, region.height / face.height) * (filterSettings.zoom ?? 1);

		const newW = Math.round(srcW * scale);
		const newH = Math.round(srcH * scale);

		pipeline = pipeline.resize(newW, newH, { fit: "cover" });

		const offsetX = Math.max(0, Math.min(Math.round(faceCenter.x * scale - region.width / 2), newW - region.width));
		const offsetY = Math.max(0, Math.min(Math.round(faceCenter.y * scale - region.height / 2), newH - region.height));

		pipeline = pipeline.extract({
			left: offsetX,
			top: offsetY,
			width: Math.min(region.width, newW - offsetX),
			height: Math.min(region.height, newH - offsetY),
		});
	} else {
		pipeline = pipeline.resize(region.width, region.height, { fit: "cover" });
	}

	if (filterSettings?.faceGrain && filterSettings.faceGrain > 0) {
		pipeline = pipeline.modulate({ brightness: 1 - filterSettings.faceGrain * 0.1 });
	}

	return pipeline.png().toBuffer();
}

export async function generatePoster(options: PosterGenerateOptions): Promise<GeneratedAsset> {
	const {
		photoBuffer,
		template,
		brand,
		attendee,
	} = options;

	const width = options.dimensions?.width ?? 1080;
	const height = options.dimensions?.height ?? 1920;
	const format = options.output?.format ?? "png";
	const quality = options.output?.quality ?? 90;
	const filterSettings = mergeFilterSettings(options.filterSettings);
	const layout = getTemplateLayout(template, width, height);

	const [bgR, bgG, bgB] = hexToRgb(brand.colors.background);
	let canvas = sharp({
		create: {
			width: layout.width,
			height: layout.height,
			channels: 4,
			background: { r: bgR, g: bgG, b: bgB, alpha: 1 },
		},
	});

	const layers: sharp.OverlayOptions[] = [];

	const croppedPhoto = await cropPhotoToRegion(
		photoBuffer,
		layout.photoRegion,
		options.faceDetection,
		filterSettings,
	);
	layers.push({
		input: croppedPhoto,
		top: layout.photoRegion.y,
		left: layout.photoRegion.x,
	});

	if (filterSettings.overlay) {
		const [acR, acG, acB] = hexToRgb(filterSettings.accentColor);
		const overlayBuffer = await sharp({
			create: {
				width: layout.photoRegion.width,
				height: layout.photoRegion.height,
				channels: 4,
				background: { r: acR, g: acG, b: acB, alpha: 0.15 },
			},
		}).png().toBuffer();

		layers.push({
			input: overlayBuffer,
			top: layout.photoRegion.y,
			left: layout.photoRegion.x,
		});
	}

	if (brand.logoBuffer) {
		const resizedLogo = await sharp(brand.logoBuffer)
			.resize(layout.logoRegion.width, layout.logoRegion.height, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
			.png()
			.toBuffer();
		layers.push({
			input: resizedLogo,
			top: layout.logoRegion.y,
			left: layout.logoRegion.x,
		});
	}

	canvas = canvas.composite(layers);

	let buffer: Buffer;
	if (format === "webp") {
		buffer = await canvas.webp({ quality }).toBuffer();
	} else {
		buffer = await canvas.png({ quality }).toBuffer();
	}

	return {
		type: "poster",
		format,
		buffer,
		width: layout.width,
		height: layout.height,
	};
}

export async function generatePosterBatch(
	optionsList: PosterGenerateOptions[],
): Promise<GeneratedAsset[]> {
	return Promise.all(optionsList.map(generatePoster));
}
