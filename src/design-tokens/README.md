# Design Tokens System

This directory contains the centralized design tokens for the HollandKade Frontend application.

## Overview

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain visual consistency across different platforms and devices.

## File Structure

- `index.ts` - Main design tokens file containing all design system values

## Usage

### Importing Tokens

```typescript
import { designTokens, colors, spacing, typography } from '@/design-tokens';

// Use specific token categories
const primaryColor = colors.primary.DEFAULT;
const spacingValue = spacing[4]; // 1rem
const fontSize = typography.fontSize.base;
```

### Using in Components

```typescript
// In a React component
import { colors } from '@/design-tokens';

const MyComponent = () => {
  return (
    <div style={{ color: colors.primary.DEFAULT }}>
      Content
    </div>
  );
};
```

### Using with Tailwind CSS

The tokens are automatically integrated into Tailwind CSS configuration. You can use them directly in your classes:

```tsx
<div className="bg-primary text-white p-4">
  <h1 className="text-2xl font-semibold">Title</h1>
</div>
```

## Color System

### Primary Colors
- **Primary Blue** (`#3d7dc0`): Main brand color representing trust and professionalism
- Used for: Primary actions, links, focus states, brand elements

### Accent Colors
- **Warm Orange** (`#ff9800`): Secondary brand color representing energy and approachability
- Used for: CTAs, highlights, important notifications

### Semantic Colors
- **Success** (`#4caf50`): Green for success states
- **Warning** (`#ffc107`): Amber for warnings
- **Error** (`#f44336`): Red for errors
- **Info** (`#2196f3`): Blue for informational messages

### Neutral Colors
- Gray scale from 50 (lightest) to 900 (darkest)
- Used for: Text, borders, backgrounds, disabled states

## Spacing Scale

Based on 4px base unit:
- `spacing[1]` = 4px (0.25rem)
- `spacing[4]` = 16px (1rem)
- `spacing[8]` = 32px (2rem)
- And so on...

## Typography

### Font Families
- **Sans**: Geist Sans (English) / IRANSansX (Persian)
- **Mono**: Geist Mono

### Font Sizes
Fluid typography scale from `xs` (12px) to `7xl` (72px)

### Font Weights
- Thin (100) to Black (900)

## Best Practices

1. **Always use tokens** instead of hard-coded values
2. **Use semantic color names** (e.g., `primary`, `success`) rather than color names (e.g., `blue`, `green`)
3. **Follow the spacing scale** for consistent spacing
4. **Use typography tokens** for consistent text styling
5. **Test contrast ratios** when combining colors

## Migration Guide

When migrating from old color variables:

**Old:**
```css
color: var(--primary);
background: var(--secondary);
```

**New:**
```css
color: var(--text-primary);
background: var(--bg-primary);
```

Or in Tailwind:
```tsx
<div className="text-text-primary bg-bg-primary">
```

## Accessibility

All colors meet WCAG 2.1 AA contrast requirements:
- Normal text: Minimum 4.5:1 contrast ratio
- Large text: Minimum 3:1 contrast ratio

## Future Enhancements

- [ ] Dark mode support
- [ ] Theme switching
- [ ] Custom theme generation
- [ ] Design tokens documentation site

