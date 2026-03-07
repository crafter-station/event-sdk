"use client";

import type { FilterSettings, PosterTemplateType } from "@event-sdk/core";
import { type ReactNode, useCallback, useState } from "react";

export interface PosterEditorProps {
	templates: PosterTemplateType[];
	defaultTemplate?: PosterTemplateType;
	onPhotoSelect: (file: File) => void | Promise<void>;
	onGenerate: (data: PosterFormData) => void | Promise<void>;
	renderPreview?: (data: PosterFormData) => ReactNode;
	renderControls?: (data: PosterFormData & { updateFilter: (partial: Partial<FilterSettings>) => void }) => ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export interface PosterFormData {
	template: PosterTemplateType;
	filterSettings: FilterSettings;
	photoFile: File | null;
}

const DEFAULT_FILTERS: FilterSettings = {
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

export function PosterEditor({
	templates,
	defaultTemplate,
	onPhotoSelect,
	onGenerate,
	renderPreview,
	renderControls,
	className,
	style,
}: PosterEditorProps) {
	const [template, setTemplate] = useState<PosterTemplateType>(defaultTemplate ?? templates[0] ?? "half-face");
	const [filterSettings, setFilterSettings] = useState<FilterSettings>(DEFAULT_FILTERS);
	const [photoFile, setPhotoFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);

	const updateFilter = useCallback((partial: Partial<FilterSettings>) => {
		setFilterSettings((prev) => ({ ...prev, ...partial }));
	}, []);

	const handleFileChange = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (!file) return;
			setPhotoFile(file);
			await onPhotoSelect(file);
		},
		[onPhotoSelect],
	);

	const handleGenerate = useCallback(async () => {
		if (!photoFile) return;
		setLoading(true);
		try {
			await onGenerate({ template, filterSettings, photoFile });
		} finally {
			setLoading(false);
		}
	}, [photoFile, template, filterSettings, onGenerate]);

	const formData: PosterFormData = { template, filterSettings, photoFile };

	return (
		<div className={className} style={{ display: "flex", flexDirection: "column", gap: 16, ...style }}>
			<div style={{ display: "flex", gap: 8 }}>
				{templates.map((t) => (
					<button
						key={t}
						type="button"
						onClick={() => setTemplate(t)}
						style={{
							padding: "8px 16px",
							fontSize: 12,
							fontWeight: template === t ? 700 : 400,
							background: template === t ? "rgba(255,255,255,0.12)" : "transparent",
							border: "1px solid rgba(255,255,255,0.12)",
							borderRadius: 6,
							color: "#fff",
							cursor: "pointer",
							textTransform: "capitalize",
						}}
					>
						{t.replace("-", " ")}
					</button>
				))}
			</div>

			<label
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "40px 20px",
					border: "2px dashed rgba(255,255,255,0.2)",
					borderRadius: 8,
					cursor: "pointer",
					color: "rgba(255,255,255,0.5)",
					fontSize: 14,
				}}
			>
				{photoFile ? photoFile.name : "Click to upload your photo"}
				<input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
			</label>

			{renderPreview?.(formData)}

			{renderControls?.({ ...formData, updateFilter })}

			<button
				type="button"
				onClick={handleGenerate}
				disabled={!photoFile || loading}
				style={{
					padding: "12px 24px",
					background: filterSettings.accentColor,
					border: "none",
					borderRadius: 8,
					color: "#000",
					fontSize: 14,
					fontWeight: 600,
					cursor: loading ? "wait" : "pointer",
					opacity: !photoFile || loading ? 0.5 : 1,
				}}
			>
				{loading ? "Generating..." : "Generate Poster"}
			</button>
		</div>
	);
}
