HollandKade Frontend (hk-front)

### Overview

This repository contains the HollandKade frontend built with Next.js 14 (App Router). It provides localized pages (
Persian/English), authentication‑gated dashboard routes, TailwindCSS styling, Storybook for UI development, and an
integration with a headless CMS/API.

Key capabilities:

- Next.js 14 App Router with middleware
- i18n routing via `next-i18n-router` (`fa` default, `en` supported)
- TailwindCSS with container queries and custom design tokens
- State management with `valtio`
- Google Maps (`@react-google-maps/api`) and calendar views (`react-big-calendar`)
- Image optimization with allow‑listed remote hosts
- Storybook 8 for components
- Jest + ts-jest for unit testing
- Dockerfile with standalone output and runtime env injection

### Tech Stack

- Runtime: Node.js 20, Next.js 14 (`output: standalone`)
- UI: React 18, TailwindCSS 3, `@tailwindcss/container-queries`, `react-icons`
- i18n: `next-i18n-router`, `i18next`, `react-i18next`
- State: `valtio`
- Maps/Calendar: `@react-google-maps/api`, `react-big-calendar`
- Tooling: TypeScript 5, ESLint, Prettier, Storybook 8, Jest 29, ts-jest

### Project Structure

```
src/
  app/
    [locale]/               # Locale-prefixed routes (fa, en)
      layout.tsx            # Global layout with RTL/LTR fonts
      page.tsx              # Landing page
      auth/page.tsx         # Auth page
      dashboard/page.tsx    # Dashboard (auth required via middleware)
      blogs/...             # Blog listing and detail
      events/...            # Events listing and detail
      services/...          # Services listing and detail
    globals.css             # Global styles and CSS variables
  components/               # UI components (template, organism, molecule, etc.)
  constants/                # API path constants
  helpers/                  # Utilities (i18n helpers, etc.)
  services/rest-api/        # API call layer (e.g., `core-call.ts`)
  stories/                  # Storybook assets/stories
  i18nConfig.ts             # i18n configuration (locales)
  middleware.ts             # i18n + auth middleware

next.config.mjs             # Next.js config (images, webpack, logging)
tailwind.config.ts          # Tailwind theme and content globs
postcss.config.mjs          # PostCSS plugins
Dockerfile                  # Multi-stage build and runtime image
```

### Prerequisites

- Node.js 20+
- pnpm 9 (recommended; repo declares `packageManager: pnpm@9.4.0`)

### Setup

```bash
# install dependencies
pnpm install

# run development server
pnpm dev

# open the app
open http://localhost:3000
```

### Environment Variables

The app expects CMS/API endpoints and some public runtime values. You can provide these via a `.env.local` during
development or via Docker build args and runtime environment variables.

Common variables:

- `CMS_SERVER` or `NEXT_PUBLIC_CMS_SERVER` (required by `services/rest-api/core-call.ts`)
    - One of these MUST be set, otherwise a runtime error is thrown:
      `CMS_SERVER or NEXT_PUBLIC_CMS_SERVER is not defined...`.
- `API_SERVER` / `NEXT_PUBLIC_API_SERVER` (general API base; optional depending on features)
- `NEXT_PUBLIC_IMAGE_KIT_ID` (for ImageKit usage when applicable)
- `SHOW_CONSTRUCTION` (feature flag; optional)
- `E2E_TEST` (CI/Testing flag; optional)

Example `.env.local`:

```
CMS_SERVER=https://dev.hollandkade.nl
NEXT_PUBLIC_CMS_SERVER=https://dev.hollandkade.nl
NEXT_PUBLIC_API_SERVER=https://dev.hollandkade.nl
NEXT_PUBLIC_IMAGE_KIT_ID=your_imagekit_id
SHOW_CONSTRUCTION=false
```

Notes:

- In production, prefer server‑only variables (e.g., `CMS_SERVER`) when possible. `NEXT_PUBLIC_*` exposes values to the
  client.
- The middleware reads the auth token from `Authorization` header or `hkAuthToken` cookie for `/dashboard` routes.

### Scripts

```bash
pnpm dev              # Start Next.js in development mode
pnpm build            # Build for production (standalone output)
pnpm start            # Start production server (requires pnpm build)
pnpm lint             # Run ESLint
pnpm storybook        # Start Storybook on :6006
pnpm build-storybook  # Build static Storybook
pnpm test             # Run Jest tests
```

### Internationalization (i18n)

- Locales: `fa` (default), `en`.
- Config: `src/i18nConfig.ts`.
- Middleware: `src/middleware.ts` uses `next-i18n-router` to enforce locale prefixes.
- Layout adapts fonts and `dir` based on the locale. Persian (`fa`) uses IRANSansXFaNum and sets `dir="rtl"`; English
  uses Geist fonts and `dir="ltr"`.

### Styling

- TailwindCSS 3 with `@tailwindcss/container-queries`.
- Custom CSS variables set the design tokens (see `globals.css`), mapped in `tailwind.config.ts` via the `colors`
  extension.
- Screen breakpoint `xs: 380px` and custom animation `spinOnce` are configured.

### Images

Remote images are allowed from a curated list in `next.config.mjs` (e.g., `hollandkade.nl`, `dev.hollandkade.nl`,
`ik.imagekit.io`, Vimeo CDN, and local dev servers). If an image fails to load due to domain restrictions, add a
corresponding `remotePatterns` entry.

### API Layer

`src/services/rest-api/core-call.ts` composes requests from `IAPIInfo` by replacing path params and appending query
parameters. It builds the base URL from `CMS_SERVER` or `NEXT_PUBLIC_CMS_SERVER` and sets appropriate headers. For
`FormData` requests, it intentionally does not set `Content-Type` so the boundary is correct.

### Auth and Middleware

- `src/middleware.ts` protects `/dashboard` routes. A valid token is taken from `Authorization` header or `hkAuthToken`
  cookie.
- It calls the `getUserInfo` endpoint defined in `constants/api-path/members` via `mainCall` to validate the token and
  attach basic user info to response headers.
- i18n routing is applied for all non‑asset paths via `matcher`.

### Storybook

- Framework: `@storybook/nextjs` v8.
- Start locally: `pnpm storybook` then open http://localhost:6006
- Build static: `pnpm build-storybook`

### Testing

- Test runner: Jest 29 with TypeScript via `ts-jest`
- Run: `pnpm test`
- Add tests under `src/**/__tests__` or alongside modules with `.test.ts(x)` suffix.

### Docker

This repo includes a multi‑stage Dockerfile that produces a small runtime image using Next.js standalone output.

Build (example):

```bash
docker build \
  --build-arg CMS_SERVER=https://dev.hollandkade.nl \
  --build-arg NEXT_PUBLIC_CMS_SERVER=https://dev.hollandkade.nl \
  --build-arg NEXT_PUBLIC_API_SERVER=https://dev.hollandkade.nl \
  --build-arg NEXT_PUBLIC_IMAGE_KIT_ID=your_imagekit_id \
  -t hk-front:latest .
```

Run:

```bash
docker run -p 3000:3000 \
  -e CMS_SERVER=https://dev.hollandkade.nl \
  -e NEXT_PUBLIC_CMS_SERVER=https://dev.hollandkade.nl \
  -e NEXT_PUBLIC_API_SERVER=https://dev.hollandkade.nl \
  -e NEXT_PUBLIC_IMAGE_KIT_ID=your_imagekit_id \
  hk-front:latest
```

The server starts on port 3000 and binds to `0.0.0.0` inside the container.

### Deployment

- Vercel: Supported. Ensure env variables are configured in the project settings (build and runtime). Next.js standalone
  is enabled; Vercel will ignore the Dockerfile by default.
- Docker/Kubernetes: Use the provided Dockerfile and pass required environment variables.

### Troubleshooting

- Error: `CMS_SERVER or NEXT_PUBLIC_CMS_SERVER is not defined...`
    - Provide one of these in your env (e.g., `.env.local` or container envs).
- Images from a new remote host don’t load
    - Add the host to `images.remotePatterns` in `next.config.mjs`.
- RTL font doesn’t apply on Farsi pages
    - Check `src/app/[locale]/layout.tsx` and ensure the locale is `fa` and fonts exist at
      `src/app/[locale]/fonts/iran-sans/...`.

### Conventions

- Components are grouped by atomic design layers (template/organism/molecule).
- Use `valtio` for simple global state when needed.
- Prefer server‑side environment variables for secrets; expose only necessary values via `NEXT_PUBLIC_*`.

### Suggested Improvements (for discussion)

These are non‑breaking recommendations to improve maintainability and DX:

1. Add a `.env.example` file documenting all env vars and defaults.
2. Introduce API type safety with a thin client (e.g., `zod` schemas) around `core-call` responses.
3. Centralize auth token handling (helper to read/write `hkAuthToken`, handle refresh if applicable).
4. Add unit tests for middleware logic (using Next.js middleware test harness) and for `helpers`.
5. Create Storybook stories for key components in `components/template` and `components/organism` to improve UI
   documentation.
6. Consider moving image remote host list to an env‑driven allow list to reduce rebuilds when adding hosts.
7. Add CI (GitHub Actions) for lint, test, and build checks on PRs.
8. Enable Next.js `dangerouslyAllowSVG` only if required, and audit SVG sources when enabled.
9. Document API endpoints in `constants/api-path` and add examples in README or a `docs/` folder.

### License

Private/Proprietary unless stated otherwise.
