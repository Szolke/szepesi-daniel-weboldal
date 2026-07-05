# Szepesi Dániel – Holisztikus Fejlesztés Weboldala

Egy holisztikus fejlesztéssel, önismerettel és gyógyulással foglalkozó szakember bemutatkozó oldala.
Az oldal egy személyes "Rólam" bemutatkozással indul, majd három fő módszert (Life Coaching, Kineziológia,
Recall Healing) mutat be egy összekötő kertész metaforán keresztül, kiegészülve egy önismeret/tanulmányok
szekcióval és egy kapcsolatfelvételi résszel.

## Deployment

- **Live**: Cloudflare Pages (auto-deploy on git push)
- **Repository**: GitHub (szepesi-daniel-weboldal)

## Tech Stack

- HTML5, CSS3, jQuery
- Cloudflare Pages hosting

## Gyors Start

1. `git clone https://github.com/[user]/szepesi-daniel-weboldal.git`
2. Szerkesztés: `index.html`, `css/style.css`, `js/main.js`
3. `git add . && git commit -m "description" && git push`
4. Cloudflare Pages automatikusan deploy-ol

## Fájlstruktúra

```
/szepesi-daniel-weboldal
├── index.html
├── /css/style.css
├── /js/main.js
├── /images/
│   ├── profile.jpg          – ✅ megvan
│   ├── hero.jpg              – ⏳ még nincs generálva
│   ├── coaching.jpg          – ⏳ még nincs generálva
│   ├── kinezio.jpg           – ⏳ még nincs generálva
│   ├── recall.jpg            – ⏳ még nincs generálva
│   └── garden-metaphor.jpg   – ⏳ még nincs generálva
├── content.md              – szöveges tartalom forrása
├── README.md               – ez a fájl
├── PROJECT_BRIEF.md        – teljes projekt specifikáció
├── DESIGN_SYSTEM.md        – design tokenek, komponensek
├── CHANGELOG.md            – verzió-napló
└── IMAGE_MANIFEST.md       – képek leltára, AI promptok
```

A repóban emellett megtalálható a projekt korábbi (jelszavas védelmes) verziójának archívuma is: `index.old.html`, `main.old.html`, `css/style.old.css`, `js/main.old.js` – ezek nem részei az élő oldalnak, csak referenciaként lettek megőrizve.

## Dokumentáció

| Fájl | Tartalom |
|------|----------|
| PROJECT_BRIEF.md | Teljes specifikáció – az "igazság forrása" |
| DESIGN_SYSTEM.md | Szín-paletta, tipográfia, komponensek, breakpoints |
| CHANGELOG.md | Verzió-napló, minden módosítás dokumentálva |
| IMAGE_MANIFEST.md | Képek leltára, státusza, AI generálás promptok |
| content.md | Az oldal szöveges tartalma (szekciónként) |

## Design Elvek

- Szín: természetközeli, meleg tónusok – bézs, barna, krém, arany
- Tipó: Playfair Display (cím) + Lato (törzs)
- Hangulat: meleg, bizalomkeltő, professzionális de emberi
- Reszponzív: desktop-first (a CSS a `max-width` media query mintát követi, nem `min-width`-et), 768px + 480px breakpoints

*Utolsó frissítés: 2026-07-05*
