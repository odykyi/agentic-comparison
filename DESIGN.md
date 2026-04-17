# Design System - Agentic Comparison

## Overview

**Aesthetic:** Refined Brutalism  
**Philosophy:** Raw, honest, structural. Bold typography does 90% of the work. Decoration is minimal and purposeful.  
**Target:** Developers comparing AI coding tools  
**Date:** 2024

---

## Color System

### Base Colors

```css
--color-bg: #ffffff; /* Pure white background */
--color-surface: #f5f5f5; /* Subtle gray for cards/sections */
--color-surface-hover: #ebebeb; /* Hover states */

--color-text-primary: #000000; /* Headings, important text */
--color-text-secondary: #444444; /* Body text */
--color-text-tertiary: #666666; /* Meta, captions */

--color-border: #000000; /* Strong borders */
--color-border-light: #d4d4d4; /* Subtle separators */
```

### Accent Colors

```css
--color-accent: #7c3aed; /* Electric purple - primary action */
--color-accent-hover: #6d28d9; /* Hover state */
--color-accent-subtle: #f3e8ff; /* Light purple backgrounds */
```

### Tool Colors (sparing use)

```css
--color-codex: #22c55e;
--color-claude: #f97316;
--color-opencode: #3b82f6;
--color-cursor: #8b5cf6;
--color-junie: #6366f1;
--color-windsurf: #34e8bb;
--color-copilot: #06b6d4;
--color-tabnine: #4a90e2;
```

---

## Typography

### Font Stack

```css
--font-display: "Clash Grotesk", "Space Grotesk", "General Sans", sans-serif;
--font-body: "DM Sans", "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;
```

### Type Scale

```css
--text-xs: 0.75rem; /* 12px - Tool badges */
--text-sm: 0.875rem; /* 14px - Body small, nav */
--text-base: 1rem; /* 16px - Body */
--text-lg: 1.25rem; /* 20px - Lead text */
--text-xl: 1.5rem; /* 24px - Card titles */
--text-2xl: 2rem; /* 32px - Section headings */
--text-3xl: 2.5rem; /* 40px - Page titles */
--text-4xl: 3.5rem; /* 56px - Hero */
--text-5xl: 4.5rem; /* 72px - Homepage hero */
```

### Typography Rules

- Headings: Bold (700+), tight line-height (1.0-1.1)
- Body: Normal weight, comfortable line-height (1.5-1.6)
- Labels/Nav: Uppercase, letter-spacing 0.05em, small size
- Code: Monospace, consistent sizing
- No text smaller than 12px

---

## Spacing System

### Base Unit: 4px

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

### Section Spacing

- Hero: 120px top/bottom
- Content sections: 80px top/bottom
- Footer: 40px

---

## Components

### Buttons

```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 0; /* Sharp corners */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all 0.15s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border);
  padding: 12px 24px;
  border-radius: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.btn-outline:hover {
  background: var(--color-surface);
  border-color: var(--color-accent);
}
```

### Cards

```css
.card {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  padding: 24px;
  border-radius: 0;
  transition: all 0.2s ease;
}

.card:hover {
  background: #ffffff;
  border-color: var(--color-accent);
  transform: translateY(-4px);
}
```

### Badges

```css
.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid var(--color-border);
  border-radius: 0;
}

.badge-accent {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.badge-mono {
  font-family: var(--font-mono);
  background: var(--color-surface);
}
```

### Navigation

```css
.navbar {
  background: #ffffff;
  border-bottom: 2px solid #000000;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.active {
  color: #000000;
  border-bottom-color: var(--color-accent);
}
```

### Tables

```css
.table-brutalist {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000000;
}

.table-brutalist th {
  font-family: var(--font-display);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #000000;
  color: #ffffff;
  padding: 16px;
  border-right: 1px solid #333333;
  text-align: left;
}

.table-brutalist td {
  padding: 16px;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.table-brutalist tr:hover {
  background: var(--color-surface);
}
```

### Command Box (Skills)

```css
.command-box {
  font-family: var(--font-mono);
  font-size: 14px;
  background: #000000;
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 0;
  overflow-x: auto;
}
```

---

## Layout

### Container

- Max-width: 1280px
- Centered with auto margins
- Padding: 0 24px (mobile: 0 16px)

### Grid

- 12-column grid
- Gutter: 24px
- No container queries — simple responsive breakpoints

### Responsive Breakpoints

```css
/* Mobile first */
/* Base: 0-639px */

/* Tablet: 640px+ */
@media (min-width: 640px) {
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
}

/* Large: 1280px+ */
@media (min-width: 1280px) {
}
```

---

## Animation

### Principles

- Fast: 150-200ms transitions
- Purposeful: Only for hover/focus states
- Simple: Transform and opacity only

### Standard Transitions

```css
--transition-fast: all 0.15s ease;
--transition-base: all 0.2s ease;
```

### Hover Patterns

- Cards: translateY(-4px) + border color change
- Buttons: translateY(-2px) + background color
- Links: Border underline slide-in

---

## Decision Log

| Date | Decision                 | Rationale                                           |
| ---- | ------------------------ | --------------------------------------------------- |
| 2024 | Brutalist aesthetic      | Memorable, stands out from purple-gradient AI sites |
| 2024 | Sharp corners (0 radius) | Honest to brutalist aesthetic, clean lines          |
| 2024 | Single accent (purple)   | Focus, brand cohesion, less visual noise            |
| 2024 | All-caps for labels/nav  | Editorial, structured, brutalist convention         |
| 2024 | Category tabs for skills | Discoverability, hierarchy at 42+ items             |
| 2024 | Monospace for tool names | Technical accuracy, visual distinction              |
| 2024 | Black command boxes      | Terminal aesthetic, high contrast                   |

---

## Accessibility Requirements

- WCAG AA contrast compliance (4.5:1 minimum)
- All interactive elements keyboard accessible
- Visible focus indicators (3px solid accent outline)
- Skip navigation links
- Proper heading hierarchy (h1→h2→h3)
- Alt text for all images
- ARIA labels where visual text insufficient
- Form labels for all inputs
- Table headers properly scoped
