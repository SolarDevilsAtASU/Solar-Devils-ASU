# Solar Devils @ ASU Website

Production-ready React + Vite + Tailwind website for the ASU Solar Devils solar car team.

## Architecture Proposal

The site is a single-page React experience with anchored sections for Home, About, Join, Outreach, Internships, Sponsors, and Contact. This keeps deployment simple while still functioning as a full replacement website. The design uses reusable cards, sections, navigation, CTA buttons, data-driven content arrays, and public assets.

Recommended future architecture upgrade: convert to React Router or Astro/Next if the team wants separate URLs for every page, blog posts, or SEO-rich program updates.

## Visual Direction

- Dark technical theme
- ASU Maroon: `#8C1D40`
- ASU Gold: `#FFC627`
- Black, white, glass panels, grid overlays, telemetry-style lines, scan animation, and solar racing UI elements
- Primary CTA: Contact
- Brand: Solar Devils @ ASU

## Content Strategy

The site is written for sponsors, ASU students, high school students, parents, teachers, mentors, and community partners. It emphasizes real engineering work, 2026 American Solar Challenge goals, hands-on student development, outreach, high school internships, and corporate partnership value.

## File Structure

```text
solar-devils-site/
  public/
    assets/
      solar-devils-logo.png
      documents/
        sponsorship-packet-2025-26.pdf
      photos/
      sponsors/
  src/
    data/
      siteData.js
    styles/
      index.css
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  README.md
  EDITING_GUIDE.md
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Upload Instructions

```bash
git init
git add .
git commit -m "Initial Solar Devils website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

## Deploy on GitHub Pages

Install the deploy package:

```bash
npm install -D gh-pages
```

Add this to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then run:

```bash
npm run deploy
```

For a project page, set the Vite base path in `vite.config.js` if needed.

## Recommended Future Upgrades

- Add React Router for true page routes.
- Add Formspree, Netlify Forms, or a serverless function for contact submissions.
- Add a CMS such as Sanity, Decap CMS, or Contentful for nontechnical editing.
- Add a projects/blog section for build logs.
- Add sponsor analytics tracking and downloadable media kit.
- Add a student application form integration.
- Add calendar integration for outreach and recruitment events.
- Add accessibility testing with Lighthouse and axe.
