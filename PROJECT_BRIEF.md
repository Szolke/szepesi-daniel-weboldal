# PROJECT BRIEF – Szepesi Dániel Weboldala

**Ez a dokumentum a projekt specifikációja és igazság forrása.**

---

## Projekt Overview

**Projekt**: Szepesi Dániel – Holisztikus Fejlesztés Weboldala
**Cél**: Bemutatkozó oldal három holisztikus módszerhez, összekötő kertész metaforával.
**Szakember**: Szepesi Dániel (life coach, kinéziológus, Recall Healing gyakorló)
**Cégnév**: nincs – csak a neve szerepel az oldalon
**Portréfotó**: profile.jpg (/images mappában; a #contact szekció .contact-info dobozában jelenik meg, kör alakúra vágva)

---

## Inspirációs Oldalak

### 1. https://gonczlikandi.hu/
- Tiszta, egyoldalas (one-page) struktúra anchor-linkekkel
- Erős hero szöveg + kettős CTA gomb
- Módszerek kártyás/blokkos bemutatása
- Személyes, meleg hang + profi fotók váltakoznak szöveggel
- Kapcsolati form az oldal alján

### 2. https://creado.hu/hu/oldal/goda-gyula
- Szakmai hitelesség megjelenítése
- Tartalomdús, de jól tagolt struktúra
- Több szekció egymás után, jól elkülönítve

---

## Szekciók & Tartalom

### 1. Hero szekció (#hero)
- Erős, figyelemfelkeltő bevezető – a kertész metaforára alapozva
- Kettős CTA gomb: „Foglalj időpontot" + „Ismerj meg"
- Háttér: gradient vagy hero.jpg
- Hangulat: megnyerő, inspiráló, profi

### 2. Life Coaching (#coaching)
- Mi az a life coaching? (bevezető bekezdés)
- Észlelés három szinten: Elme, Érzelmek, Test (3 kártya)
- Mire jó a folyamat? (4 pont: elakadások, önismeret, erőforrások, célmegvalósítás)
- Miért hatékony? (záró gondolat)
- Kép: coaching.jpg

### 3. Kineziológia – One Brain módszer (#kinezio)
- A módszer bemutatása és alapelve
- Főbb eszközök: Izomtesztelés, Korkeresés, Viselkedési Barométer, Szerkezet/Funkció
- A korrekció és oldás folyamata
- Alkalmazási területek (tanulás, önértékelés, érzelmi/kapcsolati, fóbia/szorongás)
- Kép: kinezio.jpg

### 4. Recall Healing (#recall)
- A módszer alapelve
- Főbb pillérek: Biológiai törvényszerűségek, Projekt Cél program, Transzgenerációs minták, Életút Idővonala
- A konzultáció folyamata
- Miben segít? (krónikus, ismétlődő, gyermekkori, félelmek)
- Kép: recall.jpg

### 5. Kertész Metafora (#garden-metaphor)
- Cím: „Művelnünk kell kertjeinket"
- Intro: Képzeld el, hogy a jelened és jövőd egy kert...
- 3 lépés kártyás megjelenítésben:
  1. Talajvizsgálat (Recall Healing) – rejtett kártevők megkeresése
  2. Gyomirtás & Talajlazítás (Kineziológia) – gaz kitépése gyökerestül
  3. Parkosítás & Veteményezés (Life Coaching) – új magvak ültetése
- Záró gondolat: Mi a lényeg?
- Kép: garden-metaphor.jpg

### 6. Kapcsolat (#contact)
- Form: Név, Email, Üzenet (validációval)
- Elérhetőségek: Email, Telefon, Helyszín (placeholder-ek)
- CTA gomb: „Küldés"

---

## Tech Stack

- HTML5 (szemantikus tagek: nav, section, article, header, footer)
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript: jQuery 3.6+ (smooth scroll, form validation, animációk)
- Hosting: Cloudflare Pages (auto-deploy on git push)
- Version Control: Git + GitHub

---

## Design Specifikáció

### Szín-paletta

*(2026-07-05 óta: meleg bézs/földszín paletta, inspiráció: marosvolgyiandrea.hu – korábban zöld alapú volt)*

| Elem | Hex | CSS var |
|------|-----|---------|
| Sötét meleg barna | #5c4033 | --color-primary-dark |
| Meleg közép barna | #8b6f4e | --color-primary |
| Világos homokszín/camel | #c4a882 | --color-primary-light |
| Meleg arany-barna | #a67c52 | --color-secondary |
| Meleg arany | #d4a55a | --color-accent |
| Szöveg | #3d3028 | --color-text |
| Szöveg-light | #7a6b5d | --color-text-light |
| BG | #f5f0e8 | --color-bg |
| White | #fffcf7 | --color-white |
| Border | #ddd5c9 | --color-border |

### Tipográfia
- Cím (h1-h3): Playfair Display, serif
  - h1: 3.5rem (desktop) / 2.5rem (mobile)
  - h2: 2.2rem / 1.8rem
  - h3: 1.5rem / 1.2rem
- Törzs: Lato, sans-serif – 1.1rem (18px)

### Reszponzivitás
A style.css-ben ténylegesen csak két `@media` töréspont létezik – nincs külön kódolt "tablet" szabálykészlet, a 768px és 1200px közti tartományt a grid-ek `auto-fit` viselkedése tölti ki képernyőszélesség szerint:
- Alap (nincs media query): > 768px
- `@media (max-width: 768px)`: tipó/spacing változók csökkennek, grid-ek 1 oszlopra váltanak, navbar tördel
- `@media (max-width: 480px)`: h1 és --spacing-lg tovább csökken

---

## Képek

| Kép | Fájlnév | Méret | Stílus |
|-----|---------|-------|--------|
| Hero | hero.jpg | 1920×1080 | Virágzó kert, napfény, festői |
| Coaching | coaching.jpg | 1200×800 | Meleg, ember + természet |
| Kinezio | kinezio.jpg | 1200×800 | Egyensúly, agyféltekék |
| Recall | recall.jpg | 1200×800 | Gyökerek, mélyrétegek |
| Kertész | garden-metaphor.jpg | 1600×800 | Kert, 3 részre osztva |
| Profil | profile.jpg | 400×400 | Fehér háttér, profi portré |

---

## Módosítások Kezelése

- Minden kérés jelölje meg melyik szekció változik
- Stílusmódosítások MINDIG style.css-ben, SOHA nem inline
- Új tartalomnál kép igény is megadandó
- CHANGELOG.md frissítése minden módosítás után

## Kommunikáció

- Magyar nyelven
- Kód módosításoknál: melyik fájl, melyik rész
- Inspirációs oldalak stílusát figyelembe venni

---

*Utolsó frissítés: 2026-07-05 – Státusz: aktív fejlesztés*
