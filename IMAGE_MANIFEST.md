# Image Manifest

Az index.html az alábbi képfájlokra hivatkozik. Az AI-generálás/fotózás után ezekkel a pontos fájlnevekkel kell feltölteni az `images/` mappába.

| Fájl | Szekció | Alt szöveg | Class | Állapot |
|---|---|---|---|---|
| `images/hero.jpg` | `#hero` | Virágzó kert napfényben | `.hero-image` | ❌ Hiányzik |
| `images/coaching.jpg` | `#coaching` | Life coaching ülés meleg, bizalmas légkörben | `.section-image` | ❌ Hiányzik |
| `images/kinezio.jpg` | `#kinezio` | Kineziológiai kezelés, izomtesztelés közben | `.section-image` | ❌ Hiányzik |
| `images/recall.jpg` | `#recall` | Nyugodt konzultációs tér a Recall Healing üléshez | `.section-image` | ❌ Hiányzik |
| `images/garden-metaphor.jpg` | `#garden-metaphor` | Gondozott, virágzó kert szimbolikus fényben | `.section-image` | ❌ Hiányzik |
| `images/profile.jpg` | `#contact` | Szepesi Dániel | `.profile-image` | ✅ Megvan |

## Megjegyzések

- Amíg egy kép hiányzik, a böngésző a `.section-image`/`.hero-image` CSS-ben megadott háttérszínt (`var(--color-border)` ill. `var(--color-primary-dark)`) mutatja a helyén, plusz a törött kép ikont és az alt szöveget – ez szándékos, elkerüli a layout összecsuklását.
- A `.section-image` osztály `aspect-ratio: 16/9`-et vár, tehát a beérkező képeket ilyen vágásban (vagy ehhez közeli arányban) érdemes elkészíteni/generálni.
- A `.hero-image` teljes szekció-hátteret tölt ki (`object-fit: cover`), rá 0.85 opacitású zöld gradiens réteg kerül a szöveg olvashatósága miatt – ezért a hero kép lehet akár erősebb kontrasztú, nem kell rajta már eleve sötétíteni.
- A `.profile-image` kör alakúra van vágva (`border-radius: 50%`, 120×120px) – négyzetes vagy centrált portré kép ajánlott.
