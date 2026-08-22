# thestories.pk Multi-Tenant Story Platform

A multi-tenant storytelling and blogging publishing platform with custom subdomain routing built with Next.js 14 App Router and MongoDB (Mongoose).

## Overview

`thestories.pk` provides a publishing infrastructure supporting dynamic subdomain routing (configured via Next.js middleware and `subdomains.json`), author accounts, and secure password hashing.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v14 App Router)
- **Database**: MongoDB & Mongoose (v8)
- **Authentication & Security**: `bcrypt`
- **Routing Middleware**: Next.js Edge Middleware for subdomain rewrites
- **Language**: TypeScript

## Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB database instance
- Package manager (`pnpm` or `npm`)

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI="your-mongodb-connection-string"
   ```

3. **Run the Development Server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Access the Application**:
   Open `http://localhost:3000` in your web browser.

## Available Scripts

- `pnpm dev` - Starts the development server.
- `pnpm build` - Builds the application for production.
- `pnpm start` - Starts the production build.
- `pnpm lint` - Runs Next.js ESLint linting.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
