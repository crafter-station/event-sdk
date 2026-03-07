import type { Database } from "@event-sdk/db";
import type { EventIdentity, RegistrationProvider } from "@event-sdk/core";

export interface ApiConfig {
	db: Database;
	eventId: string;
	identity: EventIdentity;
	registrationProvider?: RegistrationProvider;
	uploadFile?: (buffer: Buffer, filename: string) => Promise<string>;
}

export interface ApiResponse<T = unknown> {
	data?: T;
	error?: string;
	status: number;
}
