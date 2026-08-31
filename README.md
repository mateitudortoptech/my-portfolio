# Matei Tudor — Portfolio

Premium personal site for Matei Tudor, Senior AI & Full-Stack Engineer.

Built with Next.js (App Router), TypeScript, React, and Tailwind CSS. Hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on GitHub Pages

The site deploys automatically from `main` via `.github/workflows/deploy.yml`.

1. Push this repository to GitHub.
2. In the repo, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. After the workflow succeeds, the site is live at `https://<user>.github.io/<repo>/`.

This repository publishes to [https://mateitudortoptech.github.io/my-portfolio/](https://mateitudortoptech.github.io/my-portfolio/).

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
