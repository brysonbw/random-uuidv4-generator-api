# Random UUIDv4 Generator API
Simple REST API using [Deno](https://docs.deno.com/runtime/manual) and [Hono](https://hono.dev/).

## Local Usage
#### Clone Repo
```
git clone git@github.com:brysonbw/random-uuidv4-generator-api.git

cd random-uuidv4-generator-api
```

#### Create .env
```
// place variable within file
PORT=<PORT_NUMBER>
```

#### Start Dev Server
```
deno task dev
```

## Enpoint
| Method             | Path |
|------------------|--------|
| GET | /api/v1/generate   |
