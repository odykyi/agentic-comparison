# Jekyll Docker Development Setup

This project supports Docker for local development - no Ruby installation required!

## Quick Start with Docker

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

### Start the development server

```bash
docker compose up
```

The site will be available at: **http://localhost:4000**

Changes to files will automatically reload the browser.

### Stop the server

```bash
# Press Ctrl+C to stop, or run:
docker compose down
```

### Build for production

```bash
docker compose exec jekyll jekyll build
```

### Run commands inside the container

```bash
# Get a shell inside the container
docker compose exec jekyll bash

# Run any Jekyll command
docker compose exec jekyll jekyll doctor
```

## Without Docker Compose

If you prefer not to use Docker Compose:

```bash
docker run --rm \
  -v $(pwd):/srv/jekyll \
  -p 4000:4000 \
  -e JEKYLL_ENV=development \
  jekyll/jekyll:4.2.2 \
  jekyll serve --watch --force_polling --livereload --host 0.0.0.0
```

## Troubleshooting

### Permission issues

If you see permission errors, the Docker Compose file already runs as root. If running manually, add:

```bash
--user root
```

### Live reload not working

Live reload requires polling on some systems. The `--force_polling` flag is already included in docker-compose.yml.

### Port already in use

If port 4000 is in use, change the port mapping in docker-compose.yml:

```yaml
ports:
  - "4001:4000" # Uses port 4001 on host
```

### Slow file watching on macOS

Docker on macOS can have slow file sync. This is a known issue with Docker Desktop. The site may take a few seconds to rebuild after changes.

## Production Deployment

This site is designed for GitHub Pages. When you push to GitHub:

1. GitHub Actions builds the site automatically
2. Deploys to GitHub Pages
3. No Docker needed for production

See `.github/workflows/deploy.yml` for the CI/CD configuration.
