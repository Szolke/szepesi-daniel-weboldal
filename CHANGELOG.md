# Changelog

## [1.0.2] – 2026-07-05 – Dokumentáció szinkronizálás

### Changed
- IMAGE_MANIFEST.md: CSS Osztályok szakasz a tényleges style.css-hez igazítva
- PROJECT_BRIEF.md: profile.jpg helye javítva (#contact szekció)
- DESIGN_SYSTEM.md: összes érték a tényleges style.css-ből frissítve
- README.md: fájlstruktúra ellenőrizve és szinkronizálva

### Verified
- Dokumentáció ↔ kód konzisztencia ellenőrizve
- Minden CSS érték, class, breakpoint egyezik

### Talált további eltérések (a fenti listán túl)
- IMAGE_MANIFEST.md: mind az 5 generálandó kép alt szövege eltért az index.html tényleges alt attribútumaitól – kijavítva
- DESIGN_SYSTEM.md: `.btn` base padding, `.btn-primary` hover, kártya (`.level`/`.pillar`/`.step`) hover/transition állítások pontatlanok voltak – a kódban ezek nem léteznek, javítva
- PROJECT_BRIEF.md és DESIGN_SYSTEM.md: "Tablet 768–1200px" töréspont nem létezik a kódban (csak 768px és 480px `@media` szabály van) – pontosítva
- README.md: "mobile-first" állítás javítva "desktop-first"-re (a kód `max-width` media query-ket használ)

## [1.0.1] – 2026-07-05 – Audit & Dokumentáció

### Added
- PROJECT_BRIEF.md: teljes projekt specifikáció
- DESIGN_SYSTEM.md: design tokenek, komponensek, breakpoints
- IMAGE_MANIFEST.md: képek leltára, AI generálás promptok (korábbi audit)
- CHANGELOG.md: verzió-napló (korábbi audit, most frissítve)

### Changed
- README.md: teljes újraírás, fájlstruktúra, dokumentáció linkek

### Fixed (korábbi audit eredményei)
- Inline style a #coaching szekcióban → .subheading-left osztályra cserélve
- #kinezio .applications lista kiegészítve teljes content.md szöveggel
- #navbar: sticky navbar CSS hozzáadva (60px magasság)
- Összes img képhely bekötve (.hero-image, .section-image, .profile-image)
- Szemantikus HTML: header a nav köré, article a kártyákra
- Footer: copyright sor + stílus

### Verified
- HTML semantic structure
- CSS design system variables
- jQuery interakciók (smooth scroll, form, buttons)
- Responsive design (768px, 480px)
- Képhelyek előkészítve (img tagek src-vel)

### Known Issues
- 768px media query-ben redundáns grid-columns duplikáció (!important) – takarítandó
- Képek: placeholder-ek, AI generálás vár (lásd IMAGE_MANIFEST.md)
- Form submission: mock-up only, email backend nincs

### Deployed
- Cloudflare Pages: auto-deploy on git push

---

## [1.0.0] – 2026-07-05 – Initial Launch

### Added
- HTML5 semantic structure (index.html) – 6 szekció
- CSS3 Design System (style.css) – CSS variables, komponensek, responsive
- jQuery interakciók (main.js) – smooth scroll, form validation, button animations
- content.md – szöveges tartalom forrása
- Responsive design: 768px + 480px breakpoints

### Deployed
- Cloudflare Pages: első deploy

---

## Unreleased

### In Progress
- [ ] AI képek generálása (5 db – hero, coaching, kinezio, recall, garden-metaphor)
- [ ] Képek integrálása index.html-be
- [ ] Profile.jpg integrálása
- [ ] 768px media query CSS takarítás (redundáns !important eltávolítása)

### Planned
- [ ] Form email backend (Formspree / Cloudflare Workers)
- [ ] SEO: Open Graph meta, schema.org markup
- [ ] Performance: képek optimalizálása (WebP, srcset, lazy loading)
- [ ] Analytics integráció

### Maybe Later
- [ ] Newsletter signup
- [ ] Blog szekció
- [ ] Testimonials
- [ ] Időpontfoglaló rendszer
- [ ] Dark mode

---

## Frissítési Útmutató

Minden módosítás után:
1. Verzió számozás: [MAJOR].[MINOR].[PATCH]
2. CHANGELOG.md frissítése (Added/Changed/Fixed/Deployed)
3. Git commit + push
4. Cloudflare auto-deploy

*Utolsó frissítés: 2026-07-05*
