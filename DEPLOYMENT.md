# Gleama Official Website — Deployment Guide

Production deployment guide for **Gleama (Pvt) Ltd** (`officialwebsite`).

---

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+
- Vercel account (recommended) or compatible Node hosting
- Gmail account with App Password enabled (contact form)
- Domain: `www.gleama.lk` (or staging subdomain)

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development, or configure the same variables in your hosting provider.

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_HOST` | Yes | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Yes | SMTP port (587 for TLS) |
| `SMTP_USER` | Yes | SMTP username |
| `SMTP_PASS` | Yes | Gmail App Password (not account password) |
| `CONTACT_RECEIVER` | Yes | Inbox for contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (e.g. `https://www.gleama.lk`) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GSC_VERIFICATION` | No | Google Search Console verification token |
| `NEXT_PUBLIC_CLARITY_ID` | No | Microsoft Clarity project ID |

**Never commit `.env.local` or production secrets to git.**

---

## Local Production Build Test

```bash
npm install
npm run build
npm run start
```

Verify:

- Homepage loads
- `/contact` form validation works
- `/sitemap.xml` and `/robots.txt` resolve
- `/manifest.webmanifest` and icons load

---

## Vercel Deployment

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**
4. Add all environment variables from `.env.example`.
5. Deploy.

### Build settings

- **Build command:** `npm run build`
- **Output directory:** `.next` (default)
- **Install command:** `npm install`
- **Node.js version:** 20.x

### Post-deploy checks

- [ ] `https://www.gleama.lk/sitemap.xml`
- [ ] `https://www.gleama.lk/robots.txt`
- [ ] Open Graph preview (use [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Contact form sends email
- [ ] Cookie banner stores consent
- [ ] Analytics loads only after consent

---

## Gmail SMTP Setup

1. Enable **2-Step Verification** on the Google account.
2. Go to **Google Account → Security → App passwords**.
3. Create an app password for “Mail”.
4. Set in Vercel:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=gleamasolutions@gmail.com`
   - `SMTP_PASS=<16-character app password>`
   - `CONTACT_RECEIVER=gleamasolutions@gmail.com`

---

## Google Analytics 4 Setup

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com).
2. Copy the Measurement ID (`G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel.
4. Analytics scripts load **only after cookie consent** (Accept All or Analytics enabled in Manage Preferences).

---

## Google Search Console Setup

1. Add property: `https://www.gleama.lk`
2. Choose **HTML tag** verification.
3. Copy the `content` value from the meta tag.
4. Set `NEXT_PUBLIC_GSC_VERIFICATION=<token>` in Vercel.
5. Redeploy and click **Verify** in Search Console.
6. Submit sitemap: `https://www.gleama.lk/sitemap.xml`

---

## Microsoft Clarity Setup

1. Create a project at [clarity.microsoft.com](https://clarity.microsoft.com).
2. Copy the project ID.
3. Set `NEXT_PUBLIC_CLARITY_ID=<project_id>` in Vercel.
4. Clarity loads only when analytics cookies are accepted.

---

## Domain Configuration

### Vercel

1. Project → **Settings → Domains**
2. Add `www.gleama.lk` and `gleama.lk`
3. Configure DNS at your registrar:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

4. Enable **Redirect** from apex to `www` (recommended).
5. SSL is provisioned automatically by Vercel.

### Required env after domain live

```
NEXT_PUBLIC_SITE_URL=https://www.gleama.lk
```

Redeploy after updating.

---

## Favicon & PWA Assets

Generated dynamically via Next.js:

- `/icon` — favicon (32×32)
- `/apple-icon` — Apple touch icon (180×180)
- `/manifest.webmanifest` — web app manifest
- `/public/site.webmanifest` — static manifest fallback

All use the official Gleama logo on navy background.

---

## Open Graph Images

Dynamic branded OG images:

- Route handlers: `/og-image`, `/twitter-image` (query: `?title=&subtitle=&eyebrow=`)
- Per-page: colocated `opengraph-image.tsx` / `twitter-image.tsx`

Branding: navy background, gold accent, Gleama logo.

---

## Security Headers

Configured in `next.config.ts`:

- Content Security Policy
- X-Frame-Options: DENY
- Referrer-Policy
- Permissions-Policy
- Strict-Transport-Security (production HTTPS)

---

## Performance Targets

Run Lighthouse on production URL after deploy:

| Category | Target |
|----------|--------|
| Performance | > 95 |
| SEO | > 100 |
| Accessibility | > 95 |
| Best Practices | > 95 |

Optimizations included:

- AVIF/WebP images
- Font display swap
- Dynamic analytics import
- Image cache TTL
- Compression enabled

---

## Support

Contact form submissions: `gleamasolutions@gmail.com`

For deployment issues, verify environment variables and Vercel build logs first.
