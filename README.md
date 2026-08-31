# Matei Tudor — Portfolio

Premium personal site for Matei Tudor, Senior AI & Full-Stack Engineer.

Built with Next.js (App Router), TypeScript, React, and Tailwind CSS. Ready for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL (for example `https://your-domain.com`).
4. Deploy.

## Content

All resume-derived copy lives in `data/`:

- `data/profile.ts` — name, positioning, about, contact
- `data/experience.ts` — roles and career path
- `data/work.ts` — selected work / engineering highlights
- `data/expertise.ts` — skills, capabilities, tech ecosystem
- `data/content.ts` — AI section, approach, education, CTAs
- `data/nav.ts` — navigation

Contact links (email, LinkedIn, GitHub) render only when filled in `data/profile.ts`. They are left empty unless they appear on the source resume. Add them there when you have the addresses from the original document.

## Resume files

- View: `/resume`
- Download: `/Matei-Tudor-Resume.txt`

To use the original Word/PDF resume for download, place it in `public/` and update the download hrefs in `data/profile.ts` and `components/sections/ResumeCta.tsx`.
