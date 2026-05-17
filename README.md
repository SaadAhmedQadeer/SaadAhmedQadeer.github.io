# saadahmedqadeer.github.io  ·  v2

Editorial portfolio — Instrument Serif display + Geist body, dual mode, color-blocked sections (cobalt / coral / cream / ink).

**Live URL** (after deploy): `https://saadahmedqadeer.github.io/`

---

## What's already in the site (from your CV — no edits needed)

- **Hero**: name + tagline + animated achievement ticker
- **About**: 3 paragraphs (Bronze Medal, BS Data Science, freelance + research + teaching split, what you're looking for in a PhD)
- **Work**: N5 Sensors + Upwork consulting
- **Research & Projects**: all 5 of your CV projects with metrics
  - Mechanistic Interpretability & ICL (80.5% probing, 11-12% LSFS collapse exposed, 80-100% recovery)
  - RNA 3D Prediction at Stanford (0.507 TM-score)
  - Graph-RAG (0.871 RAGAS Faithfulness, +17.4% vs naive)
  - Chest X-Ray (0.780 AUC)
  - Bayesian LSTM for RUL (15.18 RMSE)
- **Teaching**: Both iCodeGuru courses
- **Awards**: Meta Hacker Cup #42, Bronze Medal, Millennium Fellowship, 10+ comps, CS50x, Top-Rated
- **Skills**: All tech from your CV
- **Contact**: Real email + phone

## Three things you still need to drop in

1. **Your CV** → save as `assets/cv.pdf` (download button is wired up)
2. **GitHub repo links** in the project cards — replace the `#` placeholders with real URLs
3. **LinkedIn URL** in the contact section — replace `#`

That's it. The site is ready to send.

---

## Deploy to GitHub Pages

1. Create a public repo named **exactly** `SaadAhmedQadeer.github.io`
2. Upload everything in this folder to the repo root
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. Wait ~60 seconds → live at `https://saadahmedqadeer.github.io/`

### Custom domain (recommended, ≈$10/yr)

Looks more serious in cold emails to professors. From Cloudflare or Namecheap, buy a domain. DNS records:
- **A** records on `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME** on `www` → `saadahmedqadeer.github.io`

Then GitHub → Settings → Pages → Custom domain → enter it → tick Enforce HTTPS.

---

## Design notes

**Color philosophy.** Four colors used with discipline:
- **Cobalt `#2D4EFF`** — your accent / serif-italic word in hero / one of the project cards / nav mark
- **Coral `#FF5C3A`** — pulsing dot, one project card, "Now" tag, contact section background
- **Cream `#FFE873`** — one project card, awards section background, ticker highlights
- **Ink `#14151A`** — text, dark sections, ticker background

Switch to dark mode and the same four colors stay coherent — paper becomes deep slate `#0E0F13`, ink becomes warm cream.

**Typography.** Instrument Serif (free, by Rodrigo Fuenzalida) for display + italics. Geist Sans for body. Geist Mono for labels, metadata, and chips. The mix of serif italics inside sans-serif body is the editorial signature.

**Theme toggle.** Top-right of nav, sun/moon icon. Persists in localStorage. First visit follows the user's OS preference.

**Performance.** ~50KB total. No frameworks. Loads in well under a second.

---

## Local preview

Open `index.html` directly, or run:
```bash
python -m http.server 8000
# visit http://localhost:8000
```
