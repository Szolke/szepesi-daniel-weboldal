# Képek Manifest

## Összefoglaló

| Kép | Fájlnév | Méret | Alt szöveg (a tényleges index.html szerint) | Szekció | Státusz |
|-----|---------|-------|-----------|---------|---------|
| Hero | hero.jpg | 1920×1080 | Virágzó kert napfényben | #hero | ⏳ Generálni |
| Life Coaching | coaching.jpg | 1200×800 | Life coaching ülés meleg, bizalmas légkörben | #coaching | ⏳ Generálni |
| Kineziológia | kinezio.jpg | 1200×800 | Kineziológiai kezelés, izomtesztelés közben | #kinezio | ⏳ Generálni |
| Recall Healing | recall.jpg | 1200×800 | Nyugodt konzultációs tér a Recall Healing üléshez | #recall | ⏳ Generálni |
| Kertész metafora | garden-metaphor.jpg | 1600×800 | Gondozott, virágzó kert szimbolikus fényben | #garden-metaphor | ⏳ Generálni |
| Profil | profile.jpg | 400×400 | Szepesi Dániel | #contact (a .contact-info dobozban) | ✅ Rendelkezésre áll |

---

## AI Generálás Prompt-ok

### hero.jpg
```
A blooming garden in warm sunlight, peaceful yet vibrant.
Lush greens, earth tones, cream, and golden accents.
Painterly, illustrated style — not photorealistic.
Metaphor for growth, healing, natural abundance.
Wide composition, 16:9 aspect ratio.
```

### coaching.jpg
```
Warm, inspiring scene of human connection and personal growth.
Person in peaceful natural environment — park or garden.
Soft natural lighting, serene, inviting atmosphere.
Earth tones, soft greens, openness and trust.
Illustration or digital art style.
3:2 aspect ratio.
```

### kinezio.jpg
```
Visual metaphor for brain hemispheres and balance.
Symmetrical composition with flowing, harmonious lines.
Integration and wholeness — left and right halves merging.
Soft greens and golden accents, peaceful balance.
Symbolic and healing, not medical or clinical.
Illustration style. 3:2 aspect ratio.
```

### recall.jpg
```
Roots, deep earth layers, soil cross-section.
Natural, organic textures — layers beneath the surface.
Earth tones: browns, deep greens, golden highlights.
Metaphor for healing from deep roots.
Peaceful and grounding feeling.
Botanical illustration quality. 3:2 aspect ratio.
```

### garden-metaphor.jpg
```
Illustrative garden in three distinct sections, left to right:
LEFT: Soil analysis — earth layers, microscopic soil view
MIDDLE: Weeding and cultivation — plants being tended, cleared space
RIGHT: Landscaping — blooming garden, flowers, abundance
One cohesive scene showing transformation.
Greens, earth browns, golden accents. Botanical style.
Wide panoramic composition, 2:1 aspect ratio.
```

---

## HTML Képhelyek

*(Az alábbi kód szó szerint az `index.html`-ből – nem terv, a jelenlegi élő markup.)*

### hero.jpg
```html
<img src="images/hero.jpg" alt="Virágzó kert napfényben" class="hero-image">
```

### coaching.jpg
```html
<img src="images/coaching.jpg" alt="Life coaching ülés meleg, bizalmas légkörben" class="section-image">
```

### kinezio.jpg
```html
<img src="images/kinezio.jpg" alt="Kineziológiai kezelés, izomtesztelés közben" class="section-image">
```

### recall.jpg
```html
<img src="images/recall.jpg" alt="Nyugodt konzultációs tér a Recall Healing üléshez" class="section-image">
```

### garden-metaphor.jpg
```html
<img src="images/garden-metaphor.jpg" alt="Gondozott, virágzó kert szimbolikus fényben" class="section-image">
```

### profile.jpg
```html
<img src="images/profile.jpg" alt="Szepesi Dániel" class="profile-image">
```

---

## CSS Osztályok

*(Az alábbi kód pontosan a `css/style.css`-ben lévő, ténylegesen élő definíció – nem terv.)*

```css
/* A .hero-image a #hero teljes hátterét tölti ki, a szöveg olvashatóságáért
   a #hero::before egy 0.85 opacitású zöld gradienst rak rá overlay-ként. */
#hero {
  position: relative;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--color-primary-dark);
  z-index: 0;
}

#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary-dark));
  opacity: 0.85;
  z-index: 1;
}

.section-image {
  display: block;
  width: 100%;
  max-width: 700px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: var(--color-border);
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  margin: 0 auto var(--spacing-lg);
}

.profile-image {
  display: block;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--color-white);
  box-shadow: var(--shadow-light);
  margin: 0 auto var(--spacing-md);
}
```

Nincs külön mobil (`@media max-width: 768px`) felülírás sem a `.section-image`-re, sem a `.profile-image`-re – a `.section-image` a `max-width:700px` és a `width:100%` kombinációja miatt magától zsugorodik, a `.profile-image` mérete (120×120px) minden képernyőméreten fix marad.

---

## Státusz

- ⏳ Generálni: 5 kép (hero, coaching, kinezio, recall, garden-metaphor)
- ✅ Kész: 1 kép (profile.jpg)

## Következő Lépések

1. [ ] AI képek generálása (fenti promptokkal)
2. [ ] /images mappába mentés
3. [ ] Ellenőrzés: img tagek src helyes-e
4. [ ] Responsive tesztelés képekkel
5. [ ] Optimalizáció (WebP, lazy loading – később)

*Utolsó frissítés: 2026-07-05*
