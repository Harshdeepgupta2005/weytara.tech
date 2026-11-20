# Weytara.tech

Official website for **Weytara.tech** — a full-stack technology studio offering web, mobile, cloud, UI/UX, and AI development services.

🌐 **Live site:** https://weytara.tech *(update after enabling GitHub Pages)*

## Overview

A responsive, single-page marketing site built with semantic HTML and [Tailwind CSS](https://tailwindcss.com/) (via the Play CDN), plus a small amount of custom CSS and vanilla JavaScript. No build step required — just open `index.html` in a browser.

### Sections

- Sticky navigation with mobile menu
- Hero with stats and product mockup
- Services grid
- About / why choose us + tech stack
- Process steps
- Selected work
- Call-to-action banner
- Contact form with client-side validation
- Footer

## Project structure

```
weytara.tech/
├── index.html          # Main page (all sections)
├── css/
│   └── styles.css      # Reusable component styles
├── js/
│   └── main.js         # Menu, scroll reveal, form validation
├── assets/
│   └── favicon.svg     # Site icon
└── README.md
```

## Getting started

Clone the repo and open `index.html` directly, or serve it locally:

```bash
# Python 3
python3 -m http.server 8000

# or with npx
npx serve .
```

Then visit `http://localhost:8000`.

## Customization

- **Brand colors / fonts:** edit the `tailwind.config` block in `index.html` and the `:root` variables in `css/styles.css`.
- **Content:** all copy, services, projects, and contact details live in `index.html`. The contact email is `hello@weytara.tech`.
- **Contact form:** currently validates and shows a demo success message. Connect it to a backend or a service like [Formspree](https://formspree.io/), [Netlify Forms](https://docs.netlify.com/forms/setup/), or your own API in `js/main.js`.
- **Analytics / custom domain:** configure in your GitHub repository settings under *Pages*.

## Deployment

This repo is set up for **GitHub Pages** from the `main` branch. To publish:

1. Go to **Settings → Pages** in the GitHub repo.
2. Set **Source** to *Deploy from a branch* → `main` / `/ (root)`.
3. Add a CNAME record for `www` and an apex A record pointing to GitHub Pages IPs, then add `weytara.tech` under *Custom domain*.

## License

© Weytara.tech. All rights reserved.
