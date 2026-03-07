"use client";

import type { PosterTemplateType } from "@event-sdk/core";
import { useEffect, useRef, useState } from "react";

export interface PosterPreviewProps {
	photoUrl: string | null;
	template: PosterTemplateType;
	accentColor?: string;
	backgroundColor?: string;
	name?: string;
	number?: number;
	width?: number;
	height?: number;
	className?: string;
	style?: React.CSSProperties;
}

const TEMPLATE_CLIP_PATHS: Record<PosterTemplateType, string> = {
	"half-face": "polygon(30% 15%, 100% 15%, 100% 80%, 30% 80%)",
	eyes: "polygon(0% 25%, 100% 25%, 100% 55%, 0% 55%)",
	smile: "polygon(0% 35%, 100% 35%, 100% 70%, 0% 70%)",
	full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
};

export function PosterPreview({
	photoUrl,
	template,
	accentColor = "#e9a1c9",
	backgroundColor = "#131414",
	name,
	number,
	width = 270,
	height = 480,
	className,
	style,
}: PosterPreviewProps) {
	const clipPath = TEMPLATE_CLIP_PATHS[template];

	return (
		<div
			className={className}
			style={{
				position: "relative",
				width,
				height,
				backgroundColor,
				overflow: "hidden",
				...style,
			}}
		>
			{photoUrl && (
				<img
					src={photoUrl}
					alt="Poster preview"
					style={{
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						clipPath,
					}}
				/>
			)}

			{photoUrl && (
				<div
					style={{
						position: "absolute",
						inset: 0,
						clipPath,
						background: accentColor,
						opacity: 0.15,
						pointerEvents: "none",
					}}
				/>
			)}

			{number !== undefined && (
				<div
					style={{
						position: "absolute",
						top: 12,
						left: 12,
						color: "rgba(255,255,255,0.6)",
						fontSize: 10,
						fontFamily: "monospace",
						letterSpacing: "0.2em",
					}}
				>
					#{String(number).padStart(3, "0")}
				</div>
			)}

			{name && (
				<div
					style={{
						position: "absolute",
						bottom: 16,
						left: 12,
						right: 12,
						color: "#fff",
						fontSize: 14,
						fontWeight: 700,
						textTransform: "uppercase",
						letterSpacing: "0.08em",
						lineHeight: 1.2,
					}}
				>
					{name}
				</div>
			)}
		</div>
	);
}
