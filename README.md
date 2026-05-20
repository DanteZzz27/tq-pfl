# Lea Hoang — Marketing Portfolio

A cinematic, editorial portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and shadcn-style UI primitives.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Share with ngrok

```bash
npm run ngrok
```

Defaults to port **3000**. Custom port:

```bash
npm run ngrok -- 3000
```

If `npm run dev` is already running, the script detects it and only starts ngrok (tunneled to the existing port).

**Restart the dev server** after changing `next.config.ts` so ngrok can load the site (Next.js blocks tunnel origins by default).

First time? Add your ngrok auth token:

```bash
npx ngrok config add-authtoken YOUR_TOKEN
```

The ngrok public URL prints in the terminal under the `ngrok` line.

## Customize content

Edit **[`lib/content/portfolio.ts`](lib/content/portfolio.ts)** — all copy, case studies, experience, skills, testimonials, and links live in this single file.

## Contact form

Submissions POST to `/api/contact`. In development, payloads are logged to the console. Wire `CONTACT_WEBHOOK_URL` or a Resend/Formspree integration in [`app/api/contact/route.ts`](app/api/contact/route.ts).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion + GSAP
- next-themes (light-first, dark toggle)
- react-hook-form + zod

## Build

```bash
npm run build
npm start
```
