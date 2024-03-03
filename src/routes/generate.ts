import { Context, Hono } from 'hono';
import generateUUID from '../utils/generate-uuid.ts';

const app = new Hono();

// get single default generated v4 UUID
app.get('/', (c: Context) => {
	const UUID = generateUUID();
	if (!UUID.valid) {
		return c.json({
			data: null,
			status: false,
			error: 'UUID generation failed!',
		});
	}
	return c.json({
		data: UUID.data,
		status: true,
		message: 'UUID generated successfully!',
	});
});

export default app;
