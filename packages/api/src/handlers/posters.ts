import { createPosterQueries, createAttendeeQueries } from "@event-sdk/db";
import type { ApiConfig, ApiResponse } from "../types";

export function createPosterHandlers(config: ApiConfig) {
	const posterQueries = createPosterQueries(config.db);
	const attendeeQueries = createAttendeeQueries(config.db);

	return {
		async create(body: {
			email: string;
			template?: string;
		}): Promise<ApiResponse> {
			if (config.registrationProvider) {
				const check = await config.registrationProvider.checkRegistration(body.email);
				if (!check.registered) {
					return { error: `Registration check failed: ${check.error}`, status: 403 };
				}
			}

			const attendee = await attendeeQueries.getByEmail(config.eventId, body.email);
			if (!attendee) {
				return { error: "Attendee not found. Create a badge first.", status: 404 };
			}

			const existingPoster = await posterQueries.getByAttendee(attendee.id);
			if (existingPoster) {
				return { data: { poster: existingPoster, attendee }, status: 200 };
			}

			const poster = await posterQueries.create({
				attendeeId: attendee.id,
				eventId: config.eventId,
				number: attendee.badgeNumber,
				template: (body.template as "half-face" | "eyes" | "smile" | "full") ?? "half-face",
			});

			return { data: { poster, attendee }, status: 201 };
		},

		async getById(id: string): Promise<ApiResponse> {
			const result = await posterQueries.getWithAttendee(id);
			if (!result) return { error: "Poster not found", status: 404 };
			return { data: result, status: 200 };
		},

		async list(): Promise<ApiResponse> {
			const posters = await posterQueries.listByEvent(config.eventId);
			return { data: posters, status: 200 };
		},

		async verify(posterNumber: number): Promise<ApiResponse> {
			const result = await posterQueries.verifyByNumber(config.eventId, posterNumber);
			if (!result) return { error: "Invalid poster number", status: 404 };
			return { data: { valid: true, ...result }, status: 200 };
		},

		async uploadPhoto(id: string, photoBuffer: Buffer, filename: string): Promise<ApiResponse> {
			if (!config.uploadFile) {
				return { error: "File upload not configured", status: 500 };
			}

			const photoUrl = await config.uploadFile(photoBuffer, `poster-photo-${id}-${filename}`);
			const poster = await posterQueries.update(id, { photoUrl });
			if (!poster) return { error: "Poster not found", status: 404 };
			return { data: poster, status: 200 };
		},

		async update(id: string, data: {
			template?: "half-face" | "eyes" | "smile" | "full";
			filterSettings?: unknown;
			faceDetection?: unknown;
			renderedUrl?: string;
		}): Promise<ApiResponse> {
			const poster = await posterQueries.update(id, data);
			if (!poster) return { error: "Poster not found", status: 404 };
			return { data: poster, status: 200 };
		},
	};
}
