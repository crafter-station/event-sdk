import { createBadgeQueries, createAttendeeQueries } from "@event-sdk/db";
import { generateBadge } from "@event-sdk/badge";
import type { ApiConfig, ApiResponse } from "../types";

export function createBadgeHandlers(config: ApiConfig) {
	const badgeQueries = createBadgeQueries(config.db);
	const attendeeQueries = createAttendeeQueries(config.db);

	return {
		async create(body: {
			email: string;
			name: string;
			role?: string;
			organization?: string;
		}): Promise<ApiResponse> {
			if (config.registrationProvider) {
				const check = await config.registrationProvider.checkRegistration(body.email);
				if (!check.registered) {
					return { error: `Registration check failed: ${check.error}`, status: 403 };
				}
			}

			let attendee = await attendeeQueries.getByEmail(config.eventId, body.email);

			if (!attendee) {
				const badgeNumber = await attendeeQueries.getNextBadgeNumber(config.eventId);
				attendee = await attendeeQueries.create({
					eventId: config.eventId,
					email: body.email,
					fullName: body.name,
					role: body.role ?? "attendee",
					organization: body.organization,
					badgeNumber,
					registrationStatus: "approved",
				});
			}

			const existingBadge = await badgeQueries.getByAttendee(attendee.id);
			if (existingBadge) {
				return { data: { badge: existingBadge, attendee }, status: 200 };
			}

			const badge = await badgeQueries.create({
				attendeeId: attendee.id,
				eventId: config.eventId,
				number: attendee.badgeNumber,
				generatedAt: new Date(),
			});

			return { data: { badge, attendee }, status: 201 };
		},

		async getById(id: string): Promise<ApiResponse> {
			const result = await badgeQueries.getWithAttendee(id);
			if (!result) return { error: "Badge not found", status: 404 };
			return { data: result, status: 200 };
		},

		async list(): Promise<ApiResponse> {
			const badges = await badgeQueries.listByEvent(config.eventId);
			return { data: badges, status: 200 };
		},

		async verify(badgeNumber: number): Promise<ApiResponse> {
			const result = await badgeQueries.verifyByNumber(config.eventId, badgeNumber);
			if (!result) return { error: "Invalid badge number", status: 404 };
			return { data: { valid: true, ...result }, status: 200 };
		},

		async generateImage(id: string, photoBuffer?: Buffer | Uint8Array): Promise<ApiResponse> {
			const result = await badgeQueries.getWithAttendee(id);
			if (!result) return { error: "Badge not found", status: 404 };

			const { badges: badge, attendees: attendee } = result;

			const photo = photoBuffer ? Buffer.from(photoBuffer) : undefined;

			const asset = await generateBadge({
				attendee: {
					id: attendee.id,
					name: attendee.fullName ?? "Attendee",
					role: attendee.role ?? "attendee",
					organization: attendee.organization ?? undefined,
					badgeNumber: badge.number ?? 0,
				},
				identity: config.identity,
				photoBuffer: photo,
			});

			let imageUrl: string | undefined;
			const buf = asset.buffer ? Buffer.from(asset.buffer) : undefined;
			if (config.uploadFile && buf) {
				imageUrl = await config.uploadFile(buf, `badge-${badge.id}.${asset.format}`);
				await badgeQueries.update(id, { imageUrl });
			}

			return { data: { badge: { ...badge, imageUrl }, buffer: buf, format: asset.format }, status: 200 };
		},

		async update(id: string, data: { particleConfig?: unknown; imageUrl?: string }): Promise<ApiResponse> {
			const badge = await badgeQueries.update(id, data);
			if (!badge) return { error: "Badge not found", status: 404 };
			return { data: badge, status: 200 };
		},
	};
}
