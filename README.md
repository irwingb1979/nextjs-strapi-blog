## 📗 NextJs Blog with Strapi

A dynamic and responsive blog application built in NextJs and Fetching with Strapi.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Demo

**Live Demo**: [Demo](https://nextjs-strapi-blog-8lf6.onrender.com)

## 🖼️ Screenshots

![alt text](https://repository-images.githubusercontent.com/1067267080/3c8a6d79-392a-4a88-8360-d5f98c7f6db9)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **CMS Headless**: Strapi
- **Programming language**: Typescript

## ✨ Features

- **Blog posts** with cover images, authors, and rich content blocks
- **Dynamic routes** for individual posts at `/posts/[slug]`
- **Typed data models** using TypeScript interfaces
- **Optimized images** via `next/image` with remote Strapi media

## 📦 Prerequisites

- Node.js 18+ and npm
- A running Strapi instance (Cloud or self-hosted)

## ⚙️ Environment Variables

Create a `.env.local` at the project root with your Strapi base URL:

```bash
NEXT_PUBLIC_STRAPI_API_URL=https://<your-strapi-base-domain>
```

Examples:
- Cloud Strapi app base: `https://fearless-strength-c575a05e19.strapiapp.com`
- If your media is served from a separate media host, image URLs will be absolute from Strapi.

## 🔧 Image Domains Configuration

Remote images must be explicitly allowed in `next.config.ts` under `images.domains`.

This project includes:

```ts
images: {
  domains: [
    "localhost",
    "fearless-strength-c575a05e19.strapiapp.com",
    "fearless-strength-c575a05e19.media.strapiapp.com",
  ],
}
```

If you change these domains, you must restart the dev server for changes to take effect.

## 🚀 Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open the app at `http://localhost:3000`.

## 📚 Strapi Content Setup

Ensure your Strapi has content types similar to:
- `Article` with fields: `title`, `slug`, `description`, `publishedAt`, `cover` (media), `blocks` (rich text), `author` (relation)
- `Author` with fields: `name`, `avatar` (media)

This app fetches:
- Articles: `GET /api/articles?populate=*`
- Authors: `GET /api/authors?populate=*`

## 🧠 Implementation Notes

- Image URLs are built via `getImageUrl` in `src/app/lib/api.ts`. It returns the URL unchanged if it is already absolute, otherwise it prefixes `NEXT_PUBLIC_STRAPI_API_URL`.
- Components guard against missing media: images only render if a URL exists.

## 🏗️ Scripts

```bash
npm run dev      # Start Next.js in development
npm run build    # Create production build
npm run start    # Start production server
```

## 🐛 Troubleshooting

- "Invalid src prop on next/image": ensure the remote host is listed in `next.config.ts -> images.domains`, then restart the dev server.
- Double-prefixed URLs (e.g., `https://app.comhttps://media.app.com/...`): confirm `getImageUrl` receives a relative path when you expect prefixing, or an absolute URL if provided by Strapi. The helper handles both.
- Images not rendering: verify `article.cover?.url` exists or provide a placeholder fallback.

## 📂 Project Structure

```
src/app/
  components/        # UI components (Intro, MoreStories, etc.)
  lib/api.ts         # API helpers (Strapi fetchers, getImageUrl)
  posts/[slug]/      # Dynamic post page
  page.tsx           # Home page
```

## 📄 License

MIT