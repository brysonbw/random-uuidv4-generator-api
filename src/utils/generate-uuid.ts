import * as uuid from 'std/uuid/mod.ts';

/**
 * Generate UUIDv4
 * @returns uuidv4 generated string
 */
function generateUUID() {
	const UUID = crypto.randomUUID();
	if (!uuid.validate(UUID)) {
		return { valid: false };
	}
	return { valid: true, data: UUID };
}

export default generateUUID;
