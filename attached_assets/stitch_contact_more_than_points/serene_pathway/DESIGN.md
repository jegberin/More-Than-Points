# Design System Strategy: The Compassionate Editorial

## 1. Overview & Creative North Star
The "More Than Points" experience is anchored by a Creative North Star we call **"The Grounded Horizon."** 

This design system moves away from the rigid, boxed-in aesthetics of traditional educational software. Instead, it leans into the Irish landscape's softness—misty greens, coastal teals, and the warm stability of stone. We prioritize "emotional breathing room" through generous white space and an editorial layout that feels curated rather than automated. By using intentional asymmetry and overlapping elements, we create a sense of organic growth and human touch, ensuring that both parents and teens feel supported, not processed.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated extraction of natural tones, designed to reduce cognitive load and evoke a sense of calm authority.

*   **Primary (Sage):** `#4d6451` – Used for growth-oriented actions and primary brand moments.
*   **Secondary (Muted Navy/Teal):** `#545f72` – Used for professional stability and secondary information.
*   **Tertiary (Gold):** `#775a19` – Reserved for "Aha!" moments, highlights, and subtle achievements.
*   **Neutral (Warm Beige):** `#fcf9f2` – The foundational "canvas" that provides warmth compared to clinical whites.

### The "No-Line" Rule
To maintain a high-end, modern feel, **1px solid borders are prohibited for sectioning.** 
Structure must be defined by background shifts. For example, a content block using `surface-container-low` (`#f6f3ec`) should sit directly on a `surface` (`#fcf9f2`) background. The distinction is felt, not seen as a harsh line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine Irish linen. 
*   **Base:** `surface` (`#fcf9f2`)
*   **Mid-Level Content:** `surface-container` (`#f1eee7`)
*   **Elevated Cards:** `surface-container-lowest` (`#ffffff`) 
Nesting these creates depth without clutter. An inner container should always be a slightly higher or lower tier than its parent to define its importance.

### Signature Textures & Glass
*   **Glassmorphism:** Use semi-transparent surface colors (e.g., `surface` at 80% opacity) with a `20px` backdrop-blur for floating navigation or overlay modals.
*   **Gradients:** Hero sections should utilize a subtle linear gradient from `primary` (`#4d6451`) to `primary-container` (`#8fa892`) at a 135-degree angle to provide a "soulful" depth.

---

## 3. Typography
The typography system balances the authority of a coach with the accessibility of a mentor.

*   **Display & Headlines (Plus Jakarta Sans):** Chosen for its modern, open apertures. Large scales (`display-lg` at 3.5rem) should be used with tight letter-spacing (-2%) to create a bold, editorial statement.
*   **Titles & Body (Inter):** A workhorse for legibility. Inter provides a neutral, clear voice for complex coaching advice. 
*   **Hierarchy as Empathy:** Use `headline-lg` for guiding thoughts and `body-lg` for narrative content. Ensure a minimum of `1.6` line-height for body text to maintain the "open" aesthetic inspired by the Google Stitch reference.

---

## 4. Elevation & Depth
In this system, depth is a tool for focus, not just decoration.

*   **The Layering Principle:** Place `surface-container-lowest` cards on a `surface-container-low` section. This "Tonal Layering" creates a soft, natural lift.
*   **Ambient Shadows:** Traditional drop shadows are too heavy. Use "Ambient Shadows":
    *   **Blur:** 32px to 64px.
    *   **Opacity:** 4% - 6%.
    *   **Color:** Use a tinted version of `on-surface` (e.g., `rgba(28, 28, 24, 0.05)`).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons (The "Pebble" Shape)
Inspired by the stone-stacking in the logo, buttons use high roundedness (`full`).
*   **Primary:** `primary` background with `on-primary` text. Use a subtle gold (`tertiary`) inner glow on hover.
*   **Secondary:** `surface-container-high` background. No border.
*   **Padding:** Vertical `3.5` (1.2rem), Horizontal `6` (2rem).

### Cards & Lists
*   **No Dividers:** Forbid the use of horizontal lines. Use vertical white space (Spacing Scale `8` or `10`) to separate list items.
*   **Asymmetric Cards:** Experiment with slightly different border-radii (e.g., `xl` on the top-left and `md` on the other three) for featured coaching tips to break the "template" look.

### Input Fields
*   **Style:** Minimalist. Use `surface-container-highest` as a subtle fill. 
*   **Focus State:** Transition the background to `surface-container-lowest` and add a `2px` `primary` "Ghost Border" at 20% opacity.

### Progress Stones (Custom Component)
Instead of a standard progress bar, use a series of staggered "stones" (rounded containers) that fill from `secondary-container` to `primary` as the teen completes modules.

---

## 6. Do's and Don'ts

### Do
*   **Do** use intentional white space. If a layout feels "full," increase the spacing scale by two increments.
*   **Do** use "Floating" layouts where elements overlap the boundaries of their parent containers slightly.
*   **Do** prioritize the `surface` beige over pure white to keep the emotional tone warm.

### Don't
*   **Don't** use black (`#000000`). Use `on-surface` (`#1c1c18`) for high-contrast text.
*   **Don't** use sharp corners. Every container must have at least a `DEFAULT` (0.5rem) radius.
*   **Don't** use standard "Material Design" blue for links. Use `secondary` or `primary` to keep the palette organic and cohesive.