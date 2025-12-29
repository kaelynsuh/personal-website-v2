# Personal Website v2

Kaelyn's personal website v2 running live on [kaelyn.dev](https://kaelyn.dev/)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI, Lucide React
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## Getting Started

1. **Install dependencies and run the development server**:

   ```bash
   npm install
   npm run dev
   ```

   _You can also use `yarn`, `pnpm`, or `bun`_

2. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

```
├── app/                   # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── home/              # Home page sections
│   │   ├── Intro.tsx
│   │   ├── About.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── layout/            # Layout components
│       ├── AppShell.tsx
│       ├── MainNav.tsx
│       ├── SideNav.tsx
│       └── Footer.tsx
├── lib/
│   ├── data.ts           # Site content and data
│   └── text-utils.tsx    # Text utility functions
└── public/               # Static assets
    ├── images/           # Image files
    └── resume.pdf        # Resume file
```
