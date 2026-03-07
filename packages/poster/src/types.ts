import type {
	FilterSettings,
	FaceDetectionResult,
	PosterTemplateType,
	GeneratedAsset,
} from "@event-sdk/core";

export interface PosterGenerateOptions {
	photoBuffer: Buffer;
	template: PosterTemplateType;
	filterSettings?: Partial<FilterSettings>;
	faceDetection?: FaceDetectionResult;
	dimensions?: { width: number; height: number };
	brand: {
		colors: { primary: string; secondary?: string; background: string; text: string };
		name: string;
		logoBuffer?: Buffer;
	};
	attendee: {
		name: string;
		number?: number;
	};
	output?: {
		format?: "png" | "webp";
		quality?: number;
	};
}

export interface PosterLayout {
	width: number;
	height: number;
	photoRegion: { x: number; y: number; width: number; height: number };
	nameRegion: { x: number; y: number };
	numberRegion: { x: number; y: number };
	logoRegion: { x: number; y: number; width: number; height: number };
}

export type { FilterSettings, FaceDetectionResult, PosterTemplateType, GeneratedAsset };

export const DEFAULT_FILTER_SETTINGS: FilterSettings = {
	bgBlur: 8,
	bgGrain: 0.3,
	faceGrain: 0.15,
	faceTintHex: "#000000",
	faceTintOpacity: 0,
	accentColor: "#e9a1c9",
	overlay: true,
	autoPosition: true,
	panX: 0,
	panY: 0,
	zoom: 1,
};
