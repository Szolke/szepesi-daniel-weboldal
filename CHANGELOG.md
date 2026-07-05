# Changelog

## [1.0.1] – 2026-07-05 – Audit & Finomhangolás
### Changed
- `#kinezio` alkalmazási területek listája kiegészítve a content.md-ből hiányzó kettőspont utáni magyarázó szöveggel (korábban csak a kategórianevek szerepeltek)
- `#coaching` "Mire jó a folyamat?" alcím inline style-ja (`style="text-align:left..."`) áthelyezve egy `.subheading-left` CSS osztályba
- `.level`, `.pillar`, `.step` kártyák `<div>`-ből `<article>`-re cserélve (szemantikusabb, önálló tartalmi egységek)
- `<nav id="navbar">` egy `<header>` elembe csomagolva

### Fixed
- `#navbar` korábban egyáltalán nem rendelkezett CSS szabállyal, miközben a `main.js` smooth scroll -60px eltolást feltételezett egy fix navsávhoz – most `#navbar` sticky, 60px magas, stílusozott sáv
- Üres `<footer>` most tartalmaz egy copyright sort, és kapott saját CSS stílust

### Added
- Képhelyek kijelölve: `images/hero.jpg` (hero, teljes háttérkép + gradiens overlay), `images/coaching.jpg`, `images/kinezio.jpg`, `images/recall.jpg`, `images/garden-metaphor.jpg` (`.section-image` osztállyal), valamint `images/profile.jpg` a kapcsolat szekcióban (`.profile-image`, kör alakú avatar) – ez utóbbi fájl már ténylegesen létezik és megjelenik
- `.hero-image`, `.section-image`, `.profile-image`, `.subheading-left`, `#navbar`, `footer` CSS szabályok

### Verified
- ✅ HTML strukturáció (mind a 6 szekció megvan, anchor linkek működnek, meta tagek rendben)
- ✅ CSS design system (színek, tipográfia, spacing változók konzisztensen használva)
- ✅ jQuery interakciók (smooth scroll, form validáció, CTA gomb animáció)
- ✅ Reszponzív design (768px és 480px breakpointok jelen vannak)
- ✅ Inspirációs oldalak stílusa (erős hero, kettős CTA, kártyás Three Levels elrendezés)

### Ismert, nem javított észrevétel
- A 768px-es media query blokkban a `.three-levels`/`.garden-steps`/`.pillars`/`.contact-form` grid-szabályok két helyen is szerepelnek (egyszer szekciónként, egyszer az összevont blokkban `!important`-tal) – működik, de redundáns; összevonása jövőbeli takarítási feladat, nem hibajavítás.
