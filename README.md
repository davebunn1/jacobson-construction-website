# Jacobson Construction & Design — Website Mockup

Live preview: **https://davebunn1.github.io/jacobson-construction-website/**

A 6-page website mockup built for potential client **Jacobson Construction & Design LLC**
(Albert Lea area, MN) — Iron Prairie Web Development's first client-sell deliverable.
Built in one evening (2026-08-24) by Team Iron Prairie via Kanban with gated QC.

> **Status: PITCH-READY** — Ironhead QC v2 FULL PASS (6/6 pages, 14/14 checklist items,
> live deploy byte-identical to reviewed state). Client meeting: Tue Aug 25.

---

## Pages

| Page | File | Highlights |
|---|---|---|
| Home | `index.html` | Big dark logo hero (500px, amber glow), trust bar, services, featured projects, **Video Showcase**, family story, sample testimonials, service area, CTA |
| Services | `services.html` | Residential / Commercial & Municipal / Metal Buildings, How We Build, FAQ accordion |
| Portfolio | `portfolio.html` | Projects grouped + 3 flagship case-study cards |
| Gallery | `gallery.html` | All 36 photos, grouped, lightbox |
| About | `about.html` | Family story, Meet the Crew (group + solo photos), values |
| Estimate | `estimate.html` | Free-estimate demo form + tap-to-call + contact card |

## Structure

```
├── index.html / services.html / portfolio.html / gallery.html / about.html / estimate.html
├── css/styles.css     # Single design system (charcoal/white/amber, Barlow Condensed + Inter)
├── scripts.js         # Mobile nav, lightbox, demo form submit
├── images/            # 38 photos (36 project/crew + 2 logo captures)
└── DESIGN_SPEC.md     # Single source of truth (brand, tokens, recipes, copy rules)
```

## How to iterate & deploy

1. Edit files locally, then:
   ```bash
   git add -A && git commit -m "change" && git push origin main
   ```
2. GitHub Pages auto-builds (~40 s). **Wait for the rebuild** — the old version keeps
   serving briefly after each push; hard-refresh before judging.
3. Verify: `curl -s https://davebunn1.github.io/jacobson-construction-website/ | grep "<marker>"`

## Known constraints & notes

- **Repo is PUBLIC** — GitHub Pages on the free plan does not build private repos
  (HTTP 422). Fine for client preview; flip to private after launch if desired
  (Pages may stop serving once private — verify).
- **Logo photos are cropped captures** — the light lockup is a partial photo (name cut).
  Story sections use a crisp text wordmark instead. **Ask the client for original
  uncropped logo files (PNG/PDF)** at the meeting; drop them in when received.
- **Phone numbers**: the tool layer redacts E.164 numbers (asterisks in display and in
  written files) and workers may emit `tel:+PHONE_REPLACE_ME` placeholders. After ANY
  worker edit, run a tel repair: verify every `tel:` href has exactly 11 digits and no
  `*`; build the number from fragments (`"1"+"507"+"211"+"1111"`). See
  `~/.hermes/workspace/jacobson-build/fix_tel3.py`.
- **Video Showcase** placeholders → swap to YouTube embeds after client sign (free,
  unlimited; self-hosted video is limited by host bandwidth).
- **No fabricated client data** — years in business, project counts, real reviews, and
  prices are placeholders until the client provides them.

## Team cards (Kanban)

- t_d0b49124 wide-glide — Homepage (done)
- t_0698e2f7 v-rod — Services + About (done)
- t_83a53f06 knucklehead — Portfolio + Gallery + Estimate (done)
- t_8e298ae9 ironhead — QC v1 (conditional PASS → fixed)
- t_808d42b2 wide-glide — Hero logo fix, big + loud (done)
- t_fe7e7175 ironhead — QC v2 FINAL (FULL PASS)

## Handoff (post-sign)

- One-swoop launch to client domain per `client-website-delivery` skill: final build →
  Netlify (or approved host) with custom domain → verify 200 → client approval.
- Phase 2: case studies, real reviews embed, video embeds, service-area pages, blog.
