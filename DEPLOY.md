# Deploy — digitalburj-website

## Option A — Vercel (recommended, free)

1. Go to vercel.com → Add New → Project → import `shamhar07-max/digitalburj-website`.
2. Framework preset: Next.js. No environment variables needed. Deploy.
3. Add domain `digitalburj.com` (+ `www`) in project Settings → Domains; point DNS to Vercel.

That's it — 514 static pages, global CDN.

## Option B — Any VPS with Docker

```bash
docker build -t digitalburj-website:prod .
docker run -d --restart unless-stopped -p 3000:3000 digitalburj-website:prod
```

Health check: `curl localhost:3000/` → 200. Put Caddy/Nginx in front for TLS.
