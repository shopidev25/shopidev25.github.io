# FullStack Developer Portfolio

A modern, production-ready personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase full-stack engineering skills with a recruiter-friendly, premium UI.

## Features

- **Hero** — Animated gradient background, availability badge, CTAs
- **About** — Professional story with highlight cards
- **Skills** — Categorized tech stack with icon cards
- **Projects** — 6 full-stack case studies with expandable details
- **Experience** — Timeline with freelance, full-time, and internship roles
- **Contact** — Form with API route validation + email/GitHub links
- **Dark mode** — System preference + manual toggle with persistence
- **SEO** — Meta tags, OpenGraph, and Twitter cards
- **Animations** — Framer Motion scroll reveals and micro-interactions

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 15 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS                        |
| Animation  | Framer Motion                       |
| Icons      | Lucide React                        |
| Deployment | Vercel (recommended)                |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project
cd fullstack-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

All portfolio content lives in a single data file:

```
src/data/portfolio.ts
```

Update the following to personalize:

| Field    | Location in `portfolio.ts` |
| -------- | ------------------------ |
| Name     | `candidate.name`         |
| Role     | `candidate.role`         |
| Location | `candidate.location`     |
| Email    | `candidate.email`        |
| GitHub   | `candidate.github`       |
| Website  | `candidate.website`      |
| Summary  | `professionalSummary`    |
| Skills   | `skillCategories`        |
| Projects | `projects`               |
| Experience | `experiences`          |

Also update SEO metadata in `src/app/layout.tsx`.

## Contact Form

The contact API route (`src/app/api/contact/route.ts`) validates submissions server-side. To send real emails in production, integrate a service like [Resend](https://resend.com) or [SendGrid](https://sendgrid.com):

```ts
// Example: add to route.ts after validation
await resend.emails.send({
  from: "portfolio@yourdomain.com",
  to: candidate.email,
  subject: `Portfolio contact from ${name}`,
  text: message,
});
```

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No additional configuration required.

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── globals.css            # Global styles + Tailwind
│   ├── layout.tsx             # Root layout + SEO
│   └── page.tsx               # Home page
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/              # Hero, About, Skills, etc.
│   ├── ui/                    # Button, Card, FadeIn
│   └── ThemeProvider.tsx      # Dark mode context
├── data/
│   └── portfolio.ts           # All content (edit here)
├── lib/
│   └── utils.ts               # Utility helpers
└── types/
    └── index.ts               # TypeScript interfaces
```

## License

MIT — use freely for your own portfolio.
