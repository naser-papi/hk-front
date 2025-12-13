# Component Standards

This document defines the standards and patterns for all components in the HollandKade Frontend project.

## Table of Contents

1. [Component Structure](#component-structure)
2. [Naming Conventions](#naming-conventions)
3. [Variant System](#variant-system)
4. [Prop Interfaces](#prop-interfaces)
5. [Styling Patterns](#styling-patterns)
6. [Accessibility Standards](#accessibility-standards)
7. [TypeScript Standards](#typescript-standards)

---

## Component Structure

### Standard Component Template

```typescript
"use client"; // or "use server" if server component

import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const componentVariants = cva(
    [
        "base-classes",
        "common-styles",
    ],
    {
        variants: {
            variant: {
                primary: ["primary-styles"],
                secondary: ["secondary-styles"],
            },
            size: {
                sm: ["size-sm-styles"],
                md: ["size-md-styles"],
                lg: ["size-lg-styles"],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ComponentProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof componentVariants> {
    // Component-specific props
    label: string;
    icon?: IconType;
}

const Component = ({
    variant,
    size,
    label,
    icon,
    className,
    ...rest
}: ComponentProps) => {
    return (
        <div
            className={twMerge(
                componentVariants({ variant, size }),
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                className
            )}
            {...rest}
        >
            {label}
        </div>
    );
};

export default Component;
```

---

## Naming Conventions

### Component Files
- **File names**: `kebab-case.tsx` (e.g., `button.tsx`, `service-card.tsx`)
- **Component names**: `PascalCase` (e.g., `Button`, `ServiceCard`)
- **Export**: Default export with component name

### Variant Variables
- **CVA variable**: `componentVariants` (e.g., `buttonVariants`, `cardVariants`)
- **Pattern**: `{componentName}Variants` in camelCase

### Props Interfaces
- **Interface name**: `{ComponentName}Props` (e.g., `ButtonProps`, `CardProps`)
- **Always extend**: Appropriate HTML element attributes + `VariantProps`

---

## Variant System

### Standard Variant Names

Use these standard variant names across all components:

#### Primary Variant (Required)
- **Name**: `variant` (NOT `intend`)
- **Values**: `primary`, `secondary`, `tertiary`, `ghost`, `outline`
- **Purpose**: Main visual style of the component

#### Size Variant (Optional)
- **Name**: `size`
- **Values**: `sm`, `md`, `lg`
- **Purpose**: Component size variations

#### State Variants (Optional)
- **Name**: `disabled`, `loading`, `selected`, `active`
- **Values**: `true` / `false` or specific states
- **Purpose**: Component state variations

### Variant Naming Examples

✅ **Correct:**
```typescript
variants: {
    variant: {
        primary: [...],
        secondary: [...],
    },
    size: {
        sm: [...],
        md: [...],
    },
}
```

❌ **Incorrect:**
```typescript
variants: {
    intend: { ... }, // Use 'variant' instead
    type: { ... },   // Use 'variant' instead
}
```

---

## Prop Interfaces

### Standard Prop Interface Pattern

```typescript
interface ComponentProps
    extends BaseHTMLAttributes<HTMLDivElement>, // Use appropriate HTML element
        VariantProps<typeof componentVariants> {
    // Required props first
    label: string;
    href: string;
    
    // Optional props with defaults
    icon?: IconType;
    disabled?: boolean;
    ariaLabel?: string; // For accessibility
}
```

### HTML Element Extensions

Use the appropriate HTML element attributes:
- `ButtonHTMLAttributes<HTMLButtonElement>` for buttons
- `AnchorHTMLAttributes<HTMLAnchorElement>` for links
- `InputHTMLAttributes<HTMLInputElement>` for inputs
- `BaseHTMLAttributes<HTMLDivElement>` for divs
- `LabelHTMLAttributes<HTMLLabelElement>` for labels

### Required Props Order

1. HTML element attributes (via extends)
2. VariantProps (via extends)
3. Required component props
4. Optional component props
5. Accessibility props (`ariaLabel`, etc.)

---

## Styling Patterns

### CVA (Class Variance Authority) Usage

#### Always Use CVA for Variants
```typescript
const componentVariants = cva(
    ["base-classes"], // Base classes always applied
    {
        variants: {
            variant: { ... },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
```

#### Don't Use Empty Variants
❌ **Bad:**
```typescript
variants: {
    variants: {}, // Empty object
}
```

✅ **Good:**
```typescript
// If no variants needed, don't include variants object
// Or use a simple boolean variant if needed
variants: {
    disabled: {
        true: ["disabled-styles"],
        false: [],
    },
}
```

### Tailwind Merge

Always use `twMerge` when combining classes:
```typescript
className={twMerge(
    componentVariants({ variant }),
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
    className
)}
```

### Focus Styles

All interactive components MUST include focus styles:
```typescript
className={twMerge(
    componentVariants({ variant }),
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
    className
)}
```

---

## Accessibility Standards

### ARIA Labels

- **Icon-only buttons**: Always provide `ariaLabel` prop
- **Decorative icons**: Use `aria-hidden="true"`
- **Interactive icons**: Provide accessible labels

### Semantic HTML

- Use semantic elements (`<button>`, `<nav>`, `<header>`, etc.)
- Add ARIA roles when needed (`role="banner"`, `role="contentinfo"`)
- Use proper heading hierarchy (`h1` → `h2` → `h3`)

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus indicators must be visible
- Tab order should be logical

---

## TypeScript Standards

### Type Safety

- Always type component props
- Use `VariantProps` from CVA
- Extend appropriate HTML element types
- Use `as const` for literal types when needed

### Import Order

1. React imports
2. Next.js imports
3. Third-party library imports
4. Internal component imports
5. Utility imports (`@/helpers`, `@/utils`)
6. Type imports

### Example:
```typescript
"use client";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/atom";
import { formatDate } from "@/helpers";
```

---

## Component Categories

### Atoms
- Single responsibility
- No business logic
- Reusable across the app
- Examples: Button, Input, Icon

### Molecules
- Composed of atoms
- May have some logic
- Reusable patterns
- Examples: FormField, Card, Modal

### Organisms
- Complex components
- Business logic allowed
- Composed of molecules/atoms
- Examples: Header, Footer, Form

### Templates
- Page-level components
- Layout structure
- Composed of organisms
- Examples: LandingPage, DetailPage

---

## Common Patterns

### Card Components

All card components should follow this pattern:
- Image/Icon section
- Content section (title, description)
- Actions section (buttons/links)
- Consistent spacing and styling

### Button Components

- Use `variant` prop (primary, secondary, tertiary, ghost, outline)
- Use `size` prop (sm, md, lg)
- Support `disabled` state
- Include focus styles
- Support icons

### Form Components

- Use consistent label/input structure
- Include error states
- Support validation
- Accessible error messages

---

## Migration Checklist

When standardizing an existing component:

- [ ] Rename `intend` to `variant` if present
- [ ] Standardize CVA variable name to `{component}Variants`
- [ ] Add proper TypeScript types
- [ ] Add focus styles
- [ ] Add ARIA labels if needed
- [ ] Remove empty variants object
- [ ] Add default variants
- [ ] Use `twMerge` for className merging
- [ ] Follow import order
- [ ] Add JSDoc comments if complex

---

## Examples

### Good Component Example

```typescript
"use client";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-lg",
        "font-semibold",
        "transition-colors",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-border-focus",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-primary",
                    "text-white",
                    "hover:bg-primary-dark",
                ],
                secondary: [
                    "bg-secondary",
                    "text-white",
                    "hover:bg-secondary-dark",
                ],
            },
            size: {
                sm: ["px-3", "py-1.5", "text-sm"],
                md: ["px-4", "py-2", "text-base"],
                lg: ["px-6", "py-3", "text-lg"],
            },
            disabled: {
                true: ["opacity-50", "cursor-not-allowed"],
                false: [],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false,
        },
    }
);

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof buttonVariants> {
    label: string;
    icon?: IconType;
    ariaLabel?: string;
}

const Button = ({
    variant,
    size,
    disabled,
    label,
    icon,
    ariaLabel,
    className,
    ...rest
}: ButtonProps) => {
    const Icon = icon;
    const hasIconOnly = !label && icon;

    return (
        <button
            className={twMerge(buttonVariants({ variant, size, disabled }), className)}
            disabled={disabled}
            aria-label={hasIconOnly ? ariaLabel : undefined}
            {...rest}
        >
            {icon && <Icon aria-hidden={hasIconOnly ? true : undefined} />}
            {label && <span>{label}</span>}
        </button>
    );
};

export default Button;
```

---

*This document should be updated as standards evolve.*

