import { Context, Hono } from 'hono';
import { cors, logger, prettyJSON, secureHeaders } from 'hono/middleware';
import { load } from 'std/dotenv/mod.ts';

// app
const app = new Hono();

// routes
import generate from './routes/generate.ts';

// middleware
app.use('*', secureHeaders());
app.use('*', logger());
app.use('*', prettyJSON());
app.use(
	'*',
	cors({
		origin: '*',
		allowMethods: ['GET'],
	}),
);

// routes
// health check
app.get(
	'/',
	(c: Context) =>
		c.json({ message: 'Random UUIDv4 Generator API', status: true }, 200),
);

// generate
app.route('/api/v1/generate', generate);

// not found
app.notFound((c: Context) =>
	c.json(
		{ status: false, error: 'Not Found', messgae: 'Invalid Request' },
		404,
	)
);

const { PORT } = await load();
Deno.serve({ port: Number(PORT) }, app.fetch);
