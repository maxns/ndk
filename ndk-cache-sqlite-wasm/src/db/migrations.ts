import { SCHEMA } from "./schema";

/**
 * Runs all necessary database migrations.
 * Applies the schema for events, profiles, nutzap_monitor_state, decrypted_events, and unpublished_events tables.
 * @param db The SQLite WASM database instance
 */
import type { SQLDatabase } from "../types";
export async function runMigrations(db: SQLDatabase): Promise<void> {
    db.exec?.(SCHEMA.events);
    db.exec?.(SCHEMA.profiles);
    db.exec?.(SCHEMA.nutzap_monitor_state);
    db.exec?.(SCHEMA.decrypted_events);
    db.exec?.(SCHEMA.unpublished_events);
    db.exec?.(SCHEMA.event_tags);
}
