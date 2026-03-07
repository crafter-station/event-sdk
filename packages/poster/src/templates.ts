import type { PosterLayout, PosterTemplateType } from "./types";

const BASE_WIDTH = 1080;
const BASE_HEIGHT = 1920;

export function getTemplateLayout(
	template: PosterTemplateType,
	width = BASE_WIDTH,
	height = BASE_HEIGHT,
): PosterLayout {
	const scaleX = width / BASE_WIDTH;
	const scaleY = height / BASE_HEIGHT;

	const base: PosterLayout = {
		width,
		height,
		nameRegion: { x: Math.round(60 * scaleX), y: Math.round(1700 * scaleY) },
		numberRegion: { x: Math.round(60 * scaleX), y: Math.round(100 * scaleY) },
		logoRegion: {
			x: Math.round(width - 260 * scaleX),
			y: Math.round(60 * scaleY),
			width: Math.round(200 * scaleX),
			height: Math.round(60 * scaleY),
		},
		photoRegion: { x: 0, y: 0, width, height },
	};

	switch (template) {
		case "half-face":
			return {
				...base,
				photoRegion: {
					x: Math.round(width * 0.3),
					y: Math.round(height * 0.15),
					width: Math.round(width * 0.7),
					height: Math.round(height * 0.65),
				},
			};
		case "eyes":
			return {
				...base,
				photoRegion: {
					x: 0,
					y: Math.round(height * 0.25),
					width,
					height: Math.round(height * 0.3),
				},
			};
		case "smile":
			return {
				...base,
				photoRegion: {
					x: 0,
					y: Math.round(height * 0.35),
					width,
					height: Math.round(height * 0.35),
				},
			};
		case "full":
			return base;
	}
}
