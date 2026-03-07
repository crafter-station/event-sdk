import { createAttendeeQueries } from "@event-sdk/db";
import type { ApiConfig, ApiResponse } from "../types";

export function createAttendeeHandlers(config: ApiConfig) {
	const attendeeQueries = createAttendeeQueries(config.db);

	return {
		async verify(email: string): Promise<ApiResponse> {
			if (!config.registrationProvider) {
				return { error: "No registration provider configured", status: 500 };
			}

			const check = await config.registrationProvider.checkRegistration(email);
			if (!check.registered) {
				return { data: { registered: false, error: check.error }, status: 200 };
			}

			const attendee = await attendeeQueries.getByEmail(config.eventId, email);
			return {
				data: {
					registered: true,
					name: check.name,
					hasAttendee: !!attendee,
					attendee,
				},
				status: 200,
			};
		},

		async getByEmail(email: string): Promise<ApiResponse> {
			const attendee = await attendeeQueries.getByEmail(config.eventId, email);
			if (!attendee) return { error: "Attendee not found", status: 404 };
			return { data: attendee, status: 200 };
		},

		async list(): Promise<ApiResponse> {
			const attendees = await attendeeQueries.listByEvent(config.eventId);
			return { data: attendees, status: 200 };
		},

		async count(): Promise<ApiResponse> {
			const total = await attendeeQueries.count(config.eventId);
			return { data: { total }, status: 200 };
		},
	};
}
