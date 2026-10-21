# thestories.pk

A multi-tenant storytelling platform in Next.js, where each publication sits on its own subdomain.

**Status:** In progress. Subdomain routing, the Mongoose models and the database connection helper are real, but the login form has no submit handler and the dashboard pages are placeholders.

## The problem

The platform is meant to host story and blog publishing for several tenants on one codebase, with each tenant reachable at its own subdomain and with author accounts.

## What it does

- Edge middleware rewrites a request from a tenant subdomain (for example `admin`) to a `/[subdomain]` route. Known tenants are listed in `subdomains.json`.
- A login page under each tenant route, with email and password fields.
- A `dashboard` route group with a layout that mounts an auth-check component.
- Mongoose models for `User`, `Post` and `Category`.
- A cached MongoDB connection helper in `libs/dbConnect.ts`, which reuses the connection across hot reloads.

## How it's built

- Next.js 14 with the App Router and TypeScript.
- MongoDB through Mongoose 8. `bcrypt` is listed as a dependency for password hashing.
- Multi-tenancy is handled in one place: the middleware turns the host name into a path segment, so the app does not need separate deployments per tenant.
- The database helper stores its connection on `global`, so development reloads do not open new connections.

## Running it locally

Create a `.env.local` file with `MONGODB_URI` set to your MongoDB connection string, then:

```bash
pnpm install
pnpm dev
```

`pnpm build` and `pnpm start` build and serve the production app, and `pnpm lint` runs Next.js linting. The app runs at `http://localhost:3000`.

## What's left

- The login form in `app/[subdomain]/page.tsx` has no submit handler, and the repo has no `app/api` routes for sign-in.
- The dashboard pages for posts and categories are placeholders, and the home page is a placeholder too.
- The auth check in `CheckIfAuthenticated` only redirects when the path is `/`, so it does not guard the dashboard routes.
- The `Post` and `Category` models are not used by any page yet.
- No tests.
