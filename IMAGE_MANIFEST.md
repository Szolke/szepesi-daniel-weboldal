# Képek Manifest

## Összefoglaló

| Kép | Fájlnév | Méret | Alt szöveg | Szekció | Státusz |
|-----|---------|-------|-----------|---------|---------|
| Hero | hero.jpg | 1920×1080 | Virágzó kert napfényben | #hero | ⏳ Generálni |
| Life Coaching | coaching.jpg | 1200×800 | Meleg inspiráló jelenet ember és természettel | #coaching | ⏳ Generálni |
| Kineziológia | kinezio.jpg | 1200×800 | Agyféltekék szimbolikája, egyensúly | #kinezio | ⏳ Generálni |
| Recall Healing | recall.jpg | 1200×800 | Gyökerek, mélyebb rétegek, föld | #recall | ⏳ Generálni |
| Kertész metafora | garden-metaphor.jpg | 1600×800 | Illusztratív kert három részre osztva | #garden-metaphor | ⏳ Generálni |
| Profil | profile.jpg | 400×400 | Szepesi Dániel portréja | Hero mellett / Rólam | ✅ Rendelkezésre áll |

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

### hero.jpg
```html
<img src="images/hero.jpg" alt="Virágzó kert napfényben" class="hero-image">
```

### coaching.jpg
```html
<img src="images/coaching.jpg" alt="Meleg inspiráló jelenet ember és természettel" class="section-image">
```

### kinezio.jpg
```html
<img src="images/kinezio.jpg" alt="Agyféltekék szimbolikája, egyensúly" class="section-image">
```

### recall.jpg
```html
<img src="images/recall.jpg" alt="Gyökerek, mélyebb rétegek, föld" class="section-image">
```

### garden-metaphor.jpg
```html
<img src="images/garden-metaphor.jpg" alt="Illusztratív kert három részre osztva" class="section-image">
```

### profile.jpg
```html
<img src="images/profile.jpg" alt="Szepesi Dániel portréja" class="profile-image">
```

---

## CSS Osztályok

```css
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  margin-top: var(--spacing-lg);
}

.section-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  margin: var(--spacing-lg) 0;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  object-fit: cover;
}

@media (max-width: 768px) {
  .section-image { margin: var(--spacing-md) 0; }
  .profile-image { width: 150px; height: 150px; }
}
```

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
