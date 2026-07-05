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

| Elem | Desktop | Mobile (< 768px) | CSS var |
|------|---------|-------------------|---------|
| h1 | 3.5rem (56px) | 2.5rem (40px) | --fs-h1 |
| h2 | 2.2rem (35px) | 1.8rem (29px) | --fs-h2 |
| h3 | 1.5rem (24px) | 1.2rem (19px) | --fs-h3 |
| Body | 1.1rem (18px) | 1rem (16px) | --fs-body |
| Small | 0.95rem (15px) | 0.95rem | --fs-small |

### Szabályok
- h1-h3: font-family var(--font-serif), color var(--color-primary-dark), text-align center
- p: line-height 1.6, margin-bottom var(--spacing-md)
- a: color var(--color-primary), text-decoration none, transition 0.3s

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
- padding: 0.75rem 1.5rem (12px 24px)
- border-radius: 4px
- font-family: var(--font-sans)
- font-size: 1rem
- cursor: pointer
- transition: all 0.3s ease

**Primary (.btn-primary)**
- background: var(--color-accent)
- color: var(--color-text)
- hover: box-shadow increase, translateY(-2px)

**Secondary (.btn-secondary)**
- background: transparent
- border: 2px solid white
- color: white
- hover: bg white, color var(--color-primary-dark)

### Card (.card, .level, .pillar, .step)

- padding: 2rem
- border-radius: 8px
- box-shadow: var(--shadow-light)
- background: var(--color-white) VAGY rgba(255,255,255,0.1) sötét szekciókban
- transition: all 0.3s ease
- hover: shadow increase, translateY(-4px)

### Section Container (.section-container)

- max-width: 1200px
- margin: 0 auto
- padding: var(--spacing-xl) var(--spacing-lg) → desktop
- padding: var(--spacing-lg) var(--spacing-md) → mobile

### Grid

- display: grid
- grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
- gap: var(--spacing-lg)
- mobile (< 768px): grid-template-columns: 1fr

---

## Szekció BG Váltakozás

| Szekció | Háttér | Szöveg szín |
|---------|--------|-------------|
| #hero | gradient (primary-light → primary-dark) | white |
| #coaching | var(--color-bg) | var(--color-text) |
| #kinezio | var(--color-primary-dark) | white |
| #recall | var(--color-bg) | var(--color-text) |
| #garden-metaphor | gradient (primary → primary-dark) | white |
| #contact | var(--color-bg) | var(--color-text) |

---

## Animációk & Transitions

- **Global**: transition all 0.3s ease
- **Smooth scroll**: jQuery 800ms
- **Button click**: scale(0.95), 100ms, visszaáll
- **Form focus**: outline none, border-color var(--color-primary), box-shadow 0 0 0 3px rgba(74,124,95,0.1)
- **Card hover**: shadow increase, translateY(-4px)

---

## Breakpoints

| Név | Szélesség | Grid | Spacing |
|-----|-----------|------|---------|
| Desktop | > 1200px | multi-column | full |
| Tablet | 768–1200px | 2-3 column | csökkentett |
| Mobile | < 768px | 1 column | minimális |
| XS | < 480px | 1 column | extra minimális |

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
