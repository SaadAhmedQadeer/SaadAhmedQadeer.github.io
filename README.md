# saadahmedqadeer.github.io

Personal portfolio site — modern minimal, dark mode only, charcoal + lime accent, Geist typography.

**Live URL** (after deploy): `https://saadahmedqadeer.github.io/`

---

## 1. Deploy to GitHub Pages (5 minutes)

This site is a static HTML/CSS/JS bundle. No build step.

1. Create a new public GitHub repo named **exactly** `SaadAhmedQadeer.github.io` (the casing of your username, then `.github.io`).
2. Upload all files from this folder to the root of that repo (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`).
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`.
5. Wait ~60 seconds. Your site is live at `https://saadahmedqadeer.github.io/`.

To update the site later, just edit files and `git push`. GitHub redeploys automatically.

### Buying a custom domain (optional, recommended)

A custom domain like `saadqadeer.com` or `saadqadeer.dev` looks more professional in cold emails.

1. Buy a domain from Namecheap, Cloudflare, or Porkbun (≈ $10–15/year).
2. In your domain registrar, add these DNS records:
   - **A** records pointing `@` to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** record pointing `www` to `saadahmedqadeer.github.io`
3. In the GitHub repo, **Settings → Pages → Custom domain**, enter your domain.
4. Tick **Enforce HTTPS** once the certificate provisions (a few minutes).

---

## 2. Content checklist (replace before you start sending emails)

The site ships with `[bracketed placeholders]` in every section. Search the project for `[` to find every spot that needs your words.

### High priority — fill before sharing the link

- [ ] **About** — three short paragraphs (bio, applied work, what you want from a PhD)
- [ ] **Contact email** — replace `your.email@example.com` in `index.html` (appears twice: hero/contact section and `mailto:` link)
- [ ] **LinkedIn URL** — replace `#` in the contact socials list
- [ ] **Google Scholar / Kaggle URLs** — same
- [ ] **CV PDF** — save as `assets/cv.pdf`
- [ ] **Headshot** — save as `assets/headshot.jpg`, ideally square, ~600×600px. If missing, a clean "SAQ" monogram shows automatically.
- [ ] **Projects** — for each card: GitHub link, optional writeup link, 2–3 sentence description with one headline result
- [ ] **Awards** — fill in years and one-line context for each
- [ ] **Teaching** — short descriptions of each course

### Lower priority

- [ ] **Writing** — uncomment the post template in the writing section once you publish something
- [ ] **Page title and meta description** — tweak in `<head>` if you want different copy
- [ ] **Open Graph image** — add `assets/og.png` (1200×630) and reference it in `<head>` for link previews

---

## 3. Design system reference

Defined as CSS variables at the top of `style.css`. To tweak globally, change there.

```
--bg:         #0a0a0a    (page background)
--bg-elev:    #111111    (cards)
--text:       #ededed    (primary text)
--text-muted: #9a9a9a    (secondary text)
--accent:     #c5f800    (lime — used sparingly)
--font-sans:  Geist
--font-mono:  Geist Mono (used for labels, metadata, code)
```

Typography rules used in the site:
- Body weight: 400. Headings: 500–600. Never bolder than 600 — it muddies Geist.
- Tight tracking on large headings (`letter-spacing: -0.02em` to `-0.04em`).
- Mono is for *labels and metadata only*, not body text.

---

## 4. File structure

```
.
├── index.html          # All content lives here. Edit copy in place.
├── style.css           # Design tokens at top, then sections.
├── script.js           # Nav, reveals, mobile menu. No dependencies.
├── assets/
│   ├── cv.pdf          # ← add this
│   └── headshot.jpg    # ← add this
└── README.md
```

---

## 5. Local preview

Open `index.html` directly in a browser, or run a tiny server for cleaner relative paths:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

---

## 6. Notes on the design choices

- **Dark mode only** by deliberate choice. One polished look beats two half-polished ones.
- **Lime accent** appears on: the favicon, name period, eyebrow dot, section numbers, hover states, project top-line, award years. Nowhere else. Restraint is the point.
- **No frameworks, no build step.** Loads in well under a second. Easy to maintain a year from now.
- **Accessible**: semantic landmarks, skip link, focus-visible outlines, `prefers-reduced-motion` respected, keyboard navigable.
