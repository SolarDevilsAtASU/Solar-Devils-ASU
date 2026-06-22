# Editing Guide

## Edit Team Text

Most editable content is in:

```text
src/data/siteData.js
```

Update contacts, stats, subteams, sponsor tiers, internship tracks, photos, and sponsor logos there.

## Replace Logo

Replace:

```text
public/assets/solar-devils-logo.png
```

Keep the same filename or update the image path in `src/main.jsx`.

## Add Team Photos

Place new images in:

```text
public/assets/photos/
```

Then add their paths to the `photos` array in `src/data/siteData.js`.

Example:

```js
'/assets/photos/new-photo.jpg'
```

## Add Sponsor Logos

Place sponsor logos in:

```text
public/assets/sponsors/
```

Then add them to `sponsorLogos` in `src/data/siteData.js`.

Example:

```js
{ name: 'Sponsor Name', file: '/assets/sponsors/sponsor-logo.svg' }
```

Use SVG or PNG when possible. EPS files are not browser-friendly.

## Replace Sponsorship Packet

Replace:

```text
public/assets/documents/sponsorship-packet-2025-26.pdf
```

Keep the filename or update the download link in `src/main.jsx`.

## Connect the Contact Form

The current form opens an email draft using `mailto:`. For a real submission backend, replace the form action in the Contact component inside `src/main.jsx` with a Formspree, Netlify, or custom endpoint.

## Change Brand Colors

Edit colors in:

```text
tailwind.config.js
src/styles/index.css
```

Current colors:

- Maroon: `#8C1D40`
- Gold: `#FFC627`
- Carbon black: `#050505`

## Update Navigation

Navigation items are stored in the `nav` array near the top of `src/main.jsx`.

## Notes

The site is currently one React page with anchored sections. This is easy to deploy and maintain. For separate routes like `/about` or `/sponsors`, add React Router later.
