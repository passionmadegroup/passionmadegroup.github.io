# Deploy this folder to GitHub Pages

This is a clean, ready-to-deploy bundle of the PASSIONMADE GROUP website.

## Quick start

1. **Create a new GitHub repo** (e.g. `passionmade-group-site`)
2. **Upload the CONTENTS of this `deploy/` folder** to the repo root — not the `deploy/` folder itself, but everything inside it. The repo root should look like:

   ```
   index.html
   work.html
   services.html
   about.html
   contact.html
   site.css
   site.js
   assets/
     └─ logo-mark.png
   fonts/
     ├─ ZalandoSans-Light.ttf
     ├─ ZalandoSans-Medium.ttf
     ├─ ZalandoSans-Bold.ttf
     ├─ Prompt-Light.ttf
     └─ Prompt-Medium.ttf
   ```

3. **Enable GitHub Pages**:
   - Go to repo **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **`main`** · Folder: **`/ (root)`**
   - Save

4. Wait ~1–2 minutes. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Alternative: deploy from `/docs` folder

If you want to keep other files in your repo root, you can instead:

1. Rename `deploy/` to `docs/`
2. Push that folder to your repo
3. In **Settings → Pages** set Folder to **`/docs`**

## What's inside

- **5 pages** — Home, Work, Services, About, Contact — linked via top nav
- **1 image** — green logo mark only (`assets/logo-mark.png`)
- **5 fonts** — Zalando Sans (Light/Medium/Bold) + Prompt (Light/Medium)
- **External font** — Zalando Sans Expanded is loaded from Google Fonts (CDN, requires internet)
- No build step. No JS framework. Plain HTML + CSS + tiny JS for active-nav highlight.

## Custom domain (optional)

If you have your own domain (e.g. `passionmadegroup.com`):

1. In **Settings → Pages → Custom domain**, enter your domain
2. At your DNS provider, add a `CNAME` record pointing to `<your-username>.github.io`
3. GitHub will auto-issue an SSL cert after a few minutes

## Notes

- **Project images** in the Work page are placeholders (empty boxes with hairline border). When you have real project photography, drop `.jpg/.png` files into `assets/photos/` and replace each `<div class="case__media" aria-label="…"></div>` with `<div class="case__media"><img src="assets/photos/your-image.jpg" alt="..." loading="lazy"></div>`.
- **No back-end** — the contact form on `contact.html` is cosmetic only. To make it actually send email, wire it to a service like Formspree, Netlify Forms, or Web3Forms (free tiers available).
