# saadahmedqadeer.github.io  ·  v3

Monochrome academic portfolio. Dark mode default, light mode toggle. Single cobalt accent. Instrument Serif display + Geist body.

---

## What changed in v3 (against the design review)

1. **Awards now use real logos** — Meta, UN, Upwork via Simple Icons CDN. Trophy + CS50 shield are inline SVG. Islamia University crest left as a `[IUB]` placeholder. All logos grayscale by default, full color on hover.
2. **Work section** — Upwork logo via Simple Icons (Mention also for the company). N5 Sensors is a `[N5]` placeholder you can replace.
3. **Hero** — square photo slot (240px) to the right of the name, falls back to "SAQ" monogram if the image is missing. Faint attention-pattern SVG sits at ~8–10% opacity behind the type.
4. **Hero subheadline** — updated to: "mechanistic interpretability of LLMs, and applied ML where methods meet hard problems."
5. **Projects** — one-column layout with more breathing room between cards. Each card has a tiny domain SVG icon top-right (neural net / RNA helix / graph / medical cross / turbine). Lead metric is ~1.6× larger than the supporting two and rendered in the cobalt accent.
6. **Teaching cards** — each has a "▶ Watch a lecture" pill button (currently `#recordings`, TODO).
7. **Toolkit** — pills replaced with quiet inline lists. Reads like footer metadata, not buttons.
8. **All dead `#` links removed** — every project's "GitHub / Paper / Demo / Writeup" link is gone and replaced with a TODO comment. LinkedIn similarly removed and commented out. Live links: GitHub profile, mailto, tel, CV download.
9. **Section transitions** — top/bottom padding increased to `clamp(100px, 16vh, 180px)`. Sections feel like chapters.

## Color rules (don't break)

- **Single accent**: cobalt `#2D4EFF` (light) / `#5E7BFF` (dark). Used on: name's second line, headline metric, section emphasis (`em`), buttons, hovers, lecture pill, "Now" label.
- Everything else is paper + ink + line. No coral, no cream, no gradients.
- **Logos are monochrome by default, color on hover** — `filter: grayscale + brightness` for `<img>` logos; `currentColor` for inline SVG logos.

## Per-section TODO checklist

You'll want to find each `<!-- TODO -->` in `index.html` and address it. Quick map:

**Hero**
- [ ] `assets/photo.jpg` — your headshot (square ~600×600)
- [ ] `assets/cv.pdf` — your CV file

**Work**
- [ ] `/assets/logos/n5sensors.svg` — N5 Sensors logo (currently shows "N5" fallback)

**Projects — replace TODO comments with real URLs (or leave them and the section stays clean)**
- [ ] Project 01: paper draft + GitHub
- [ ] Project 02: GitHub + writeup
- [ ] Project 03: GitHub + demo
- [ ] Project 04: GitHub + report
- [ ] Project 05: GitHub

To add links back, drop a `<div class="project__links">` block before the closing `</article>`. Example pattern (copy this into a card and replace the href):
```html
<div class="project__links">
  <a href="https://github.com/SaadAhmedQadeer/REPO" target="_blank" rel="noopener">GitHub →</a>
  <a href="https://YOUR-URL" target="_blank" rel="noopener">Paper →</a>
</div>
```
You'll also want to add a small style for `.project__links` (a 24px top margin, font-mono, 13px, with hover on the accent color).

**Teaching**
- [ ] Replace `href="#recordings"` on both teaching cards with real YouTube / Drive URLs

**Awards**
- [ ] `/assets/logos/iub.svg` — Islamia University of Bahawalpur crest (currently shows "IUB" fallback)

**Contact**
- [ ] LinkedIn URL — uncomment the `<li>` and drop in your real handle

---

## Deploy to GitHub Pages

1. Create a public repo named **exactly** `SaadAhmedQadeer.github.io`
2. Upload everything from this folder to the repo root
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. ~60 seconds later: live at `https://saadahmedqadeer.github.io/`

To update: edit files, `git push`. Auto-redeploys.

### Custom domain (recommended)

A `.com` or `.dev` domain reads more serious than a `github.io` subdomain in a cold email. Buy one (~$10/yr), then in your registrar add:
- **A** records on `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME** on `www` → `saadahmedqadeer.github.io`

Then GitHub → Settings → Pages → Custom domain → enter it → tick Enforce HTTPS.

---

## File map

```
.
├── index.html      # Edit copy in place. Search "TODO" for everything left to fill.
├── style.css       # Design tokens at top — palette, fonts, spacing.
├── script.js       # Theme toggle, mobile menu, reveals, active nav.
├── assets/
│   ├── cv.pdf      # ← drop yours here
│   ├── photo.jpg   # ← drop yours here (square, ~600×600)
│   └── logos/      # optional: n5sensors.svg, iub.svg
└── README.md
```

---

## Local preview

```bash
cd this-folder
python -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html`.
