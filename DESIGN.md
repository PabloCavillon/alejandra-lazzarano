---
name: Alejandra Lazzarano · Gestión de obras sociales
description: An orden de prestación printed in one form ink on a pink carbon copy, stamped AUTORIZADO.
colors:
  form-ink: "#1f2a5a"
  form-ink-soft: "#4a5480"
  sello-violet: "#5b3f9e"
  sello-violet-deep: "#46307d"
  duplicado-pink: "#f3c4cf"
  triplicado-celeste: "#bfd7ea"
  original-sheet: "#fcfcfb"
  carbon-type: "#1a1a1a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 65"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 750
    lineHeight: 1.15
    fontVariation: "'wdth' 78"
  body:
    fontFamily: "Courier Prime, monospace"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.45
  body-print:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 70"
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 700
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 80"
rounded:
  none: "0px"
  control: "3px"
spacing:
  row: "16px"
  row-compact: "12px"
  pad: "clamp(16px, 4vw, 48px)"
  label-column: "9.5rem"
  check-row: "10px"
components:
  button-primary:
    backgroundColor: "{colors.form-ink}"
    textColor: "{colors.original-sheet}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.sello-violet-deep}"
    textColor: "{colors.original-sheet}"
  button-strip:
    backgroundColor: "{colors.duplicado-pink}"
    textColor: "{colors.form-ink}"
    rounded: "{rounded.control}"
    padding: "4px 12px"
  button-strip-hover:
    backgroundColor: "{colors.original-sheet}"
  link-alt:
    textColor: "{colors.form-ink-soft}"
  link-alt-hover:
    textColor: "{colors.sello-violet}"
  field-label:
    textColor: "{colors.form-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "3px 7px 2px"
  header-strip:
    backgroundColor: "{colors.form-ink}"
    textColor: "{colors.original-sheet}"
    padding: "14px clamp(16px, 4vw, 48px)"
  field-row:
    backgroundColor: "{colors.original-sheet}"
    padding: "16px clamp(16px, 4vw, 48px)"
---

# Design System: Alejandra Lazzarano · Gestión de obras sociales

## Overview

**Creative North Star: "Orden autorizada"**

The whole surface is one administrative form: an orden de prestación printed in a single deep blue-black form ink on a white original, laid over its pink carbon duplicate with the celeste triplicate peeking out beneath. Every piece of content is a field on that form: a boxed, condensed, uppercase printed label on the left, and the value typed in beside it in a typewriter face. Sections are further ruled parts of the same order, and the contact block is the talón, separated by a perforation.

Density is that of a real form: ruled rows, hairline and double-weight rules, tight label column, no floating cards. Color carries meaning by material, not by decoration: form ink is everything pre-printed, carbon black is everything typed, violet is the one rubber stamp. The stamp is the single authored motion moment; it strikes the authorization box once, unevenly inked, and lands across the primary action.

**Key Characteristics:**
- One sheet on a pink carbon copy, celeste triplicate offset beneath it.
- Two voices only: condensed printed grotesk (Archivo, width axis) for what the form prints; Courier Prime for what is typed in.
- Label + value field rows on a ruled grid are the grammar of every section.
- Square, ruled geometry; the only rounding is 3px on actionable controls.
- One violet rubber stamp, one strike, with per-visit angle and ink pattern.

## Colors

A form palette: one print ink, one typing black, one stamp violet, and three paper copies.

### Primary
- **Form Ink** (form-ink): every pre-printed element: rules, label boxes, headlines, the header strip ground, the primary button. Also the page's text color by default.
- **Form Ink Soft** (form-ink-soft): secondary print: part-head subtitles, ledger column heads, footer, dotted sub-rules, the alternate mail link.

### Secondary
- **Sello Violet** (sello-violet): the rubber stamp only, plus the focus ring, text selection and the alternate link's hover. It is the ink of authorization.
- **Sello Violet Deep** (sello-violet-deep): primary button hover; the button takes on the stamp's ink when reached for.

### Neutral
- **Duplicado Pink** (duplicado-pink): the page ground (the carbon duplicate), the strip's WhatsApp chip, the form number in the header strip, the browser theme color.
- **Triplicado Celeste** (triplicado-celeste): the third copy, offset 0.5deg beneath the sheet; mixed 30% into the original as the talón's ground.
- **Original Sheet** (original-sheet): the white original, laid at 93% over a grain texture; text on the header strip and the primary button.
- **Carbon Type** (carbon-type): every typed value (Courier Prime), the X marks in the check boxes.

### Named Rules
**The Material Ink Rule.** A color names a material, not a mood: print is Form Ink, typed values are Carbon Type, the stamp is Sello Violet, paper is one of the three copies. A new element takes the ink of what it would physically be on the form.

**The One Stamp Rule.** Sello Violet appears as a full mark exactly once per surface: the AUTORIZADO stamp. Everywhere else it is limited to interaction states (focus, selection, hover).

## Typography

**Display Font:** Archivo, variable width axis (with system-ui, sans-serif)
**Body Font:** Courier Prime 400/700 (with monospace) for typed values; Archivo for printed prose
**Label/Mono Font:** Archivo condensed for labels; Courier Prime is the mono

**Character:** A condensed government-form grotesk squeezed along its width axis against a typewriter that fills the fields in. The width axis, not the weight, sets hierarchy: the bigger the role, the narrower the print.

### Hierarchy
- **Display** (800, clamp(2.9rem, 7.4vw, 6rem), 0.92, width 62%, uppercase, balanced): the headline as the "Práctica solicitada" field value. One per surface.
- **Headline** (800, clamp(1.9rem, 3.6vw, 2.9rem), 0.98, width 65%, uppercase, balanced): part heads; an optional sentence-case subtitle sits under it at 0.5em, weight 600, width 85%, Form Ink Soft.
- **Title** (750, 1.3rem, 1.15, width 78%): item heads inside a row (the numbered circuit steps).
- **Strip title** (800, 1.05rem, width 75%, uppercase, 0.04em): the form's printed name in the header strip, followed by the form number in Courier Prime.
- **Body / typed** (Courier Prime 400, 1.06rem, 1.45, max 62ch): every field value, with a faint carbon offset (`text-shadow: 0.7px 0.5px 0 rgb(31 42 90 / 0.16)`).
- **Label** (650, 0.74rem, 0.06em, width 70%, uppercase, 1px Form Ink box): field labels and table column heads.

### Named Rules
**The Typed-Value Rule.** Courier Prime is for content the form receives (values, list items, table cells, captions, the form number), never for printed headings, labels, buttons or navigation.

**The Narrower-Is-Louder Rule.** Scale up with font-stretch toward 62%, not with extra weight beyond 800.

## Layout

A single centered sheet (max 1180px) with fluid margins (clamp(12px, 3vw, 40px) top, clamp(28px, 5vw, 64px) bottom). Inside, everything is a field row: a two-column grid of a 9.5rem label column and a fluid value column, 16px gap, 16px vertical padding, horizontal padding on the fluid `pad` step, and a 1px Form Ink rule underneath. Major parts are closed by a 2px rule; the last row in a group drops its own rule so rules never double.

The opening orden is a two-column grid: fields on the left and a side column (clamp(260px, 27vw, 330px)) holding the photo carnet over the authorization box, divided by a 2px vertical rule. Part heads take generous top padding (clamp(36px, 6vw, 72px)) and sit on a 2px rule.

**Responsive.** At ≤860px the orden stacks and the side column becomes two cells side by side (photo | authorization). At ≤520px rows collapse to label-above-value (8px gap, 12px vertical padding), the strip's subtitle and form number drop onto their own lines, the nav keeps only Contacto and WhatsApp, the authorization box is reordered to sit directly under the headline, the photo follows the Gestiona row, and the ledger reflows into two-column cards with the task spanning full width.

## Elevation & Depth

Depth is paper physics, not UI elevation. The sheet sits on the pink ground with a warm two-layer shadow; the celeste triplicate sits behind it offset and rotated 0.5deg; the passport photo is a print laid on top, rotated -2.2deg with a white border. Inside the sheet everything is flat and ruled.

### Shadow Vocabulary
- **Sheet on copy** (`box-shadow: 0 2px 3px rgb(80 20 40 / 0.12), 0 18px 40px -12px rgb(80 20 40 / 0.28)`): the original sheet on the pink duplicate only.
- **Triplicate beneath** (`box-shadow: 0 10px 24px -10px rgb(30 40 90 / 0.3)`): the celeste copy under the sheet.
- **Laid print** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.15), 0 10px 18px -8px rgb(0 0 0 / 0.35)`): the photo print on the sheet.
- **Carbon offset** (`text-shadow: 0.7px 0.5px 0 rgb(31 42 90 / 0.16)`): typed values only.

### Named Rules
**The Paper-Only Depth Rule.** Shadows belong to physical sheets and prints. Controls, rows and boxes inside the form are flat; they are separated by rules.

## Shapes

Square and ruled. Form structure is drawn with 1px Form Ink rules (rows, label boxes), 2px rules (part boundaries, the orden's column divider), 1px dotted Form Ink Soft rules (sub-items in lists and the ledger) and one 2px dashed rule (the talón's perforation). Label boxes and check boxes are sharp-cornered. The only rounding is 3px on the two actionable controls (primary button, strip chip) and 2px on the focus ring. Slight rotation is reserved for physical objects laid on the form: the triplicate (0.5deg), the photo (-2.2deg) and the stamp (-6 to -12deg).

## Components

### Buttons
- **Shape:** barely softened rectangle (3px).
- **Primary:** Form Ink ground, Original Sheet text, Archivo 700 at width 80%, 15px 22px padding.
- **Hover / Focus:** ground shifts to Sello Violet Deep (0.2s ease-out); active presses down 1px; focus is the global 3px Sello Violet ring at 3px offset.
- **Strip chip:** the WhatsApp link in the header strip: Duplicado Pink ground, Form Ink text, 700, 4px 12px; hover turns it Original Sheet.
- **Alternate link:** Form Ink Soft text, underlined at 0.2em offset; hover turns Sello Violet.

### Field Label
- **Style:** inline 1px Form Ink box, uppercase Archivo 650 at width 70%, 0.74rem, 0.06em tracking, 3px 7px 2px padding, square corners.
- **Variants:** a numeral label for numbered steps (centered, min 2.2em); a signature-line variant that drops the box to a single top rule ("Firma y sello del prestador").

### Field Row
- **Style:** label column + value column on the ruled grid (see Layout). The value is typed (Courier Prime, Carbon Type) or a nested list, table or heading.

### Header Strip
- **Style:** full-width Form Ink band at the top of the sheet: printed form title, form number in Courier Prime Duplicado Pink (never wrapped), sentence-case subtitle at 75% opacity, and section nav.
- **Nav:** Archivo 550 at width 85%, 0.95rem, no underline; hover draws a 1px bottom rule in currentColor; focus ring switches to Duplicado Pink on the dark band.

### Check List
- **Style:** list of typed items separated by dotted rules, each led by a 20px square box (1.5px Form Ink) holding a typed X in Carbon Type. The X means "this reason applies", not approval.

### Ledger
- **Style:** borderless table with tabular numerals; label-style column heads in Form Ink Soft over a 1px rule; typed cells separated by dotted rules; the place column printed in Form Ink. Reflows to cards at ≤520px.

### Talón
- **Style:** the closing contact part, grounded in 30% celeste mixed into the original, opened by a 2px dashed perforation. Holds the primary button, the mail link and a signature line.

### AUTORIZADO Stamp (signature)
A Sello Violet rubber stamp drawn in SVG: double rounded frame (6px and 2px strokes) around "AUTORIZADO" in Archivo 800 at width 70%, at 0.9 opacity, roughened by a displacement filter and an uneven ink-blot mask. It sits rotated over the primary button so its frame crosses the button's top-right corner while the word stays on paper.
- **Strike:** on scroll into view it falls for 190ms from 1.65x with blur, then settles on an underdamped spring for 460ms; at contact the ink fills in over 520ms and the button dips 2px.
- **Per visit:** angle randomized between -6 and -12deg and a new ink-blot seed, so no two impressions match.
- **Hover:** while the button is hovered or focused, the stamp lifts (−5px, 1.035 scale, 0.78 opacity) on an overshoot curve, ready to come down again.
- **Re-strike:** clicking the button strikes again from 1.18x.
- **Pre-paint:** a head script marks `html.js` so the stamp waits hidden until it strikes, instead of flashing.
- **Reduced motion:** visible and static at -9deg; no strike, no lift, no smooth scroll.

## Do's and Don'ts

### Do:
- **Do** express new content as field rows: a boxed printed label beside a typed value on the 9.5rem label grid.
- **Do** separate with rules (1px rows, 2px parts, dotted sub-items, dashed perforation), never with cards or gaps alone.
- **Do** set every typed value in Courier Prime Carbon Type with the faint carbon offset, max 62ch.
- **Do** scale printed headings by narrowing the width axis (62–78%) at weight 750–800.
- **Do** keep Sello Violet to the single stamp plus focus, selection and hover states.
- **Do** keep the stamp static and fully visible under prefers-reduced-motion.

### Don't:
- **Don't** set headings, labels, buttons or navigation in the typewriter face.
- **Don't** add a second stamp or a second full violet mark to a surface.
- **Don't** round containers, label boxes or check boxes; 3px belongs to actionable controls only.
- **Don't** put shadows on anything that is not a physical sheet or print laid on the form.
- **Don't** introduce colors outside the three inks and three paper copies.
