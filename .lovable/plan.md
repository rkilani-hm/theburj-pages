

# Updated Plan: Rising Page "Legacy Fade" Layout

## Change Summary

Update the Transformation Background (Scroll 2) to use the newly uploaded Al Hamra Tower daylight image instead of the previously planned `som-tower-skyline.jpg`.

---

## Asset Update

| Action | Details |
|--------|---------|
| Copy uploaded image | `user-uploads://2455-2.png` to `src/assets/alhamra-tower-daylight.png` |

This high-resolution daylight shot of Al Hamra Tower provides:
- Clear blue sky backdrop for contrast with the B&W cinema
- Full tower visibility from base to crown
- Warm stone facade colors that complement the design system
- Kuwait cityscape context in the lower portion

---

## Updated Visual Flow

```text
SCROLL 1: THE HERITAGE (1958)
+--------------------------------------------------+
|                                                  |
|  [B&W Al Hamra Cinema - Grayscale Filter]        |
|  (alhamra-cinema-historic.jpg)                   |
|                                                  |
|  +-------------------+                           |
|  | Heritage Card     |             "1958"        |
|  | Executive Black   |           Watermark       |
|  +-------------------+                           |
|                                                  |
+--------------------------------------------------+
              |
              | Cinematic Dissolve Fade
              v
SCROLL 2: THE TRANSFORMATION (2011)
+--------------------------------------------------+
|                                                  |
|  [Al Hamra Tower Daylight - Full Color]          |
|  (alhamra-tower-daylight.png) <-- NEW IMAGE      |
|                                                  |
|           "2011"           +-------------------+ |
|          Watermark         | Specs Card        | |
|                            | Architectural     | |
|                            | White             | |
|                            +-------------------+ |
|                                                  |
+--------------------------------------------------+
```

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/alhamra/LegacyFadeHero.tsx` | Two-scroll parallax hero with cinematic fade |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/tower/Rising.tsx` | Replace `LegacySection` with `LegacyFadeHero` |

## Assets to Add

| Source | Destination |
|--------|-------------|
| `user-uploads://hamra.jpg` | `src/assets/alhamra-cinema-historic.jpg` |
| `user-uploads://2455-2.png` | `src/assets/alhamra-tower-daylight.png` |

---

## Cinematic Fade Implementation

The transition between the two sections will use Framer Motion's scroll-driven animations:

**Heritage Section (Scroll 1):**
- Opacity fades from 1 to 0 as user scrolls (progress 0 to 0.4)
- B&W grayscale filter applied via CSS
- Slight upward parallax movement for depth

**Transformation Section (Scroll 2):**
- Opacity fades from 0 to 1 (progress 0.3 to 0.7)
- Subtle scale animation (0.97 to 1) for zoom effect
- Full-color daylight tower image
- Creates overlap "dissolve" effect during transition zone

**Animation Timeline:**
```text
Scroll Progress:
0.0 ─────────── 0.3 ─────────── 0.5 ─────────── 0.7 ─────────── 1.0
     Heritage         │ Dissolve Zone │          Tower
     Full Opacity     │   (overlap)   │       Full Opacity
```

---

## Component Structure

```typescript
// LegacyFadeHero.tsx key elements
import heritageImage from "@/assets/alhamra-cinema-historic.jpg";
import towerImage from "@/assets/alhamra-tower-daylight.png";

// Scroll-driven opacity transforms
const heritageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
const towerOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
const towerScale = useTransform(scrollYProgress, [0.3, 0.7], [0.97, 1]);
```

---

## Card Styling

**Heritage Card (Left - Executive Black):**
- Background: `bg-foreground/85 backdrop-blur-md`
- Border: `border border-foreground/20`
- Text: Inverted colors for dark background

**Transformation Card (Right - Architectural White):**
- Background: `bg-background/90 backdrop-blur-md`
- Border: `border border-border`
- Text: Standard foreground colors

---

## Preserved Content

Below the new LegacyFadeHero, the existing sections remain:
- **ConstructionStory** - Scroll-driven SVG tower build animation
- **PerspectiveSection** - Tower perspective views

