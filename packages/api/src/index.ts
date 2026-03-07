import type { ApiConfig } from "./types";
import { createBadgeHandlers } from "./handlers/badges";
import { createPosterHandlers } from "./handlers/posters";
import { createAttendeeHandlers } from "./handlers/attendees";

export function createEventApi(config: ApiConfig) {
	return {
		badges: createBadgeHandlers(config),
		posters: createPosterHandlers(config),
		attendees: createAttendeeHandlers(config),
	};
}

export type { ApiConfig, ApiResponse } from "./types";
export { createBadgeHandlers } from "./handlers/badges";
export { createPosterHandlers } from "./handlers/posters";
export { createAttendeeHandlers } from "./handlers/attendees";
