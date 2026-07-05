# Design System – Szepesi Dániel Weboldala

A projekt vizuális és komponens-alapú szabályrendszere.

---

## Szín-paletta

### CSS Variables (:root)

```css
:root {
  --color-primary-dark: #2d5a3d;
  --color-primary: #4a7c5f;
  --color-primary-light: #7db896;
  --color-secondary: #8b7355;
  --color-accent: #d4a574;
  --color-text: #2c2c2c;
  --color-text-light: #666666;
  --color-bg: #faf8f5;
  --color-white: #ffffff;
  --color-border: #e0dbd3;
}
```

### Használat

| Szín | CSS Var | Mire |
|------|---------|------|
| Sötét zöld | --color-primary-dark | h1-h3, szekció BG (kinezio, garden) |
| Zöld | --color-primary | Links, primary button, kiemelés |
| Világos zöld | --color-primary-light | Hero gradient |
| Föld-barna | --color-secondary | Secondary accent |
| Arany | --color-accent | CTA gombok, step-number, border-left |
| Szöveg | --color-text | Szövegtörzs |
| Szöveg-light | --color-text-light | Másodlagos szöveg, intro, closing |
| BG | --color-bg | Oldal háttér, világos szekciók |
| White | --color-white | Kártyák háttere |
| Border | --color-border | Form szegélyek |

---

## Tipográfia

### Fontok

```css
--font-serif: 'Playfair Display', serif;    /* Címek */
--font-sans: 'Lato', sans-serif;            /* Szövegtörzs */
```

### Méret Skála

| Elem | Desktop | ≤768px | ≤480px | CSS var |
|------|---------|--------|--------|---------|
| h1 | 3.5rem (56px) | 2.5rem (40px) | 2rem (32px) | --fs-h1 |
| h2 | 2.2rem (35px) | 1.8rem (29px) | – (marad 1.8rem) | --fs-h2 |
| h3 | 1.5rem (24px) | 1.2rem (19px) | – (marad 1.2rem) | --fs-h3 |
| Body | 1.1rem (18px) | 1rem (16px) | – (marad 1rem) | --fs-body |
| Small | 0.95rem (15px) | 0.95rem | – | --fs-small |

*(A 480px-es töréspont csak a `--fs-h1`-et csökkenti tovább; a többi méret a 768px-es értéken marad.)*

### Szabályok
- h1, h2, h3: font-family var(--font-serif), color var(--color-primary-dark), text-align center, line-height 1.2 (ez a `body`-tól eltérő szabály, közvetlenül a h1/h2/h3 szelektoron)
- body (és így minden öröklő elem, pl. p): line-height 1.6 – **nincs** külön `p { margin-bottom: ... }` szabály a kódban
- a: color var(--color-primary), text-decoration none, transition var(--transition) (0.3s ease), hover: color var(--color-primary-dark)

---

## Térközök (Spacing)

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 2rem;      /* 32px */
--spacing-lg: 3rem;      /* 48px */
--spacing-xl: 4rem;      /* 64px */
```

---

## Árnyékok

```css
--shadow-light: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-md: 0 8px 12px rgba(0, 0, 0, 0.15);
```

---

## Komponensek

### Button

**Base (.btn)**
- padding: var(--spacing-sm) var(--spacing-md) *(= 1rem 2rem / 16px 32px – nem 0.75rem 1.5rem)*
- border: none
- border-radius: 4px
- font-size: 1rem
- cursor: pointer
- transition: var(--transition) (all 0.3s ease)

**Primary (.btn-primary)**
- background: var(--color-accent)
- color: var(--color-text)
- hover: background sötétebb árnyalatra vált (`color-mix(in srgb, var(--color-accent) 85%, black)`), box-shadow: var(--shadow-md), transform: scale(1.05)
- **kivétel**: a `#contact` form submit gombja (`.contact-form .btn-primary:hover`) más hovert kap – background `color-mix(in srgb, var(--color-primary) 90%, black)`, transform: translateY(-2px) (ez felülírja a fenti scale-t, csak ezen az egy gombon)

**Secondary (.btn-secondary)**
- background: transparent
- border: 2px solid var(--color-white)
- color: var(--color-white)
- hover: background var(--color-white), color var(--color-primary-dark)

### Kártyák (.level, .pillar, .step)

*Nincs generikus `.card` osztály a kódban – mindhárom kártyatípus saját, egymástól kissé eltérő szabályokkal rendelkezik, és egyiknek sincs `transition`-je vagy hover-állapota.*

- `.level` (#coaching): padding var(--spacing-md), border-radius 8px, box-shadow var(--shadow-light), background var(--color-white), text-align center
- `.pillar` (#recall): ugyanaz mint `.level`, plusz `border-top: 4px solid var(--color-primary)`
- `.step` (#garden-metaphor): padding var(--spacing-md), border-radius 8px, background rgba(255,255,255,0.1), border: 2px solid rgba(255,255,255,0.3), text-align center

### Section Container (.section-container)

- max-width: 1200px, margin: 0 auto
- a tényleges felső/alsó és oldalsó padding a szülő `section` elemen van, nem a `.section-container`-en: `section { padding: var(--spacing-xl) var(--spacing-lg); }`
- mobilon (≤768px) a `.section-container` kap egy extra, csak vízszintes paddingot: `padding: 0 var(--spacing-md)` – ez ráadódik a `section` (időközben kisebb `--spacing-lg` értékű) saját paddingjára, nem helyettesíti azt

### Grid

Nincs egységes grid-osztály – komponensenként eltérő `minmax` érték:

| Komponens | grid-template-columns | gap |
|---|---|---|
| `.three-levels` | repeat(auto-fit, minmax(300px, 1fr)) | var(--spacing-lg) |
| `.benefits` | repeat(auto-fit, minmax(250px, 1fr)) | var(--spacing-md) |
| `.pillars` | repeat(auto-fit, minmax(250px, 1fr)) | var(--spacing-lg) |
| `.garden-steps` | repeat(auto-fit, minmax(280px, 1fr)) | var(--spacing-lg) |

mobil (≤768px): mindegyik `grid-template-columns: 1fr`-re vált

### Navbar (#navbar)

- position: sticky, top: 0, z-index: 100
- magasság: 60px (fix – erre épít a `main.js` smooth scroll -60px eltolása)
- display: flex, align-items center, justify-content center, gap var(--spacing-lg)
- background: var(--color-white), box-shadow: var(--shadow-light)
- linkek: color var(--color-primary-dark), font-weight 700, font-size var(--fs-small); hover: color var(--color-primary)
- mobilon (≤768px): magasság auto-ra vált, flex-wrap: wrap, gap var(--spacing-sm), padding var(--spacing-sm) var(--spacing-md) – tehát a 60px csak desktopon garantált

---

## Szekció BG Váltakozás

| Szekció | Háttér | Szöveg szín |
|---------|--------|-------------|
| #hero | `.hero-image` (teljes háttérkép, object-fit: cover) + `#hero::before` 0.85 opacitású gradient overlay (primary-light → primary-dark) | white |
| #coaching | var(--color-bg) | var(--color-text) (örökölt) |
| #kinezio | var(--color-primary-dark) | white |
| #recall | var(--color-bg) | var(--color-text) (örökölt) |
| #garden-metaphor | sima CSS gradient (primary → primary-dark), nincs alatta kép-overlay | white |
| #contact | var(--color-bg) | var(--color-text) (örökölt) |

*(A #hero és a #garden-metaphor gradiense két különböző szín-párost használ: hero = primary-light→primary-dark, garden-metaphor = primary→primary-dark – ne keverd össze a kettőt.)*

---

## Animációk & Transitions

- **--transition var (all 0.3s ease)**: a, button, .btn, .form-group input/textarea szelektorokon van kiosztva – **nem** globális minden elemre (a `.level`/`.pillar`/`.step` kártyáknak és a `.hero-image`/`.section-image` képeknek nincs transition tulajdonságuk)
- **Smooth scroll**: jQuery, 800ms, `$('html, body').animate({scrollTop: ...}, 800)`
- **Button click (CTA-k, main.js)**: transform scale(0.95), 100ms delay, majd visszaáll üres transformra
- **Button hover (.btn-primary, CSS)**: sötétebb háttér + box-shadow var(--shadow-md) + transform scale(1.05); a #contact submit gombján kivételesen translateY(-2px)
- **Form focus**: outline none, border-color var(--color-primary), box-shadow 0 0 0 3px rgba(74,124,95,0.1)
- **Kártya hover**: **nem létezik** – sem shadow-increase, sem translateY nincs a `.level`/`.pillar`/`.step` osztályokon

---

## Breakpoints

A kódban ténylegesen csak két `@media` szabály van (768px és 480px) – nincs külön "tablet" logika, a közte lévő tartományt a grid-ek `auto-fit` viselkedése kezeli automatikusan, konténerszélesség alapján.

| Töréspont | Mit vált |
|-----------|----------|
| Alapértelmezett (>768px) | teljes méretű tipó/spacing, többoszlopos grid-ek (auto-fit alapján) |
| `@media (max-width: 768px)` | --fs-h1/h2/h3/body és --spacing-lg/md csökken, `.three-levels`/`.garden-steps`/`.pillars` 1 oszlopra vált, `#navbar` tördel, input/textarea font-size 16px (zoom-fix) |
| `@media (max-width: 480px)` | --fs-h1 tovább csökken 2rem-re, --spacing-lg 1.5rem-re |

---

## Accessibility

- Color contrast: WCAG AA minimum (4.5:1)
- Font size: 16px+ mobile (input zoom fix)
- Line-height: 1.5–1.8
- Minden img-nek alt text
- Minden form input-nak label
- Link: vizuálisan megkülönböztethető + hover state

---

## Checklist (minden új elem)

- [ ] CSS variables használata (szín, térköz, tipó)
- [ ] Responsive (desktop, tablet, mobile)
- [ ] Hover/focus state
- [ ] Accessibility (contrast, alt, labels)
- [ ] SOHA inline style

---

*Utolsó frissítés: 2026-07-05*
