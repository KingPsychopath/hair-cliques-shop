# Tailwind CSS v4 Upgrade Documentation

This document outlines the changes made to upgrade the project from Tailwind CSS v3 to v4.0.0.

## Changes Made

### 1. Package Updates

- Updated `tailwindcss` from v3.4.17 to v4.0.0
- Removed `tailwindcss-animate` plugin (no longer needed or compatible with v4)
- Removed `autoprefixer` as Tailwind v4 no longer requires it
- Removed `postcss` as Tailwind v4 no longer depends on it

### 2. Configuration Updates

#### tailwind.config.js

- Created a minimal configuration file with just the essential options
- Simplified content paths to use a single pattern: `"./src/**/*.{js,ts,jsx,tsx,mdx}"`
- Removed the old `tailwind.config.ts` file as it's no longer needed

#### postcss.config.mjs

- This file is no longer needed for Tailwind CSS v4, but kept with a comment for reference
- Tailwind v4 now works as a standalone tool without PostCSS

#### globals.css

- Moved container and border radius configurations from Tailwind config to CSS
- Replaced `@apply` directives with standard CSS (no longer supported in v4)
- Replaced `@screen` directives with standard media queries (no longer supported in v4)

### 3. Key Tailwind v4 Changes to Be Aware Of

1. **Standalone Operation**:
   - Tailwind v4 now operates as a standalone tool without requiring PostCSS or autoprefixer
   - This results in faster build times and simpler configuration

2. **Removed Directives**:
   - `@apply` directive is no longer supported - use standard CSS instead
   - `@screen` directive is no longer supported - use standard media queries instead

3. **Simplified Content Configuration**:
   - Now using a more streamlined content path pattern

4. **Plugin Changes**:
   - Removed `tailwindcss-animate` as it's not compatible with v4

5. **CSS Variables**:
   - The existing CSS variable system for colors is still compatible with v4

6. **Performance Improvements**:
   - Tailwind v4 includes significant performance improvements for build times

7. **New Features**:
   - Logical properties support
   - Simplified variants
   - Improved color opacity syntax
   - Better dark mode support

## How to Install the Updates

Run the following command to install the updated dependencies:

```bash
bun install
```

## Potential Issues to Watch For

1. **Component Libraries**:
   - If you're using component libraries that depend on Tailwind v3, they may need updates

2. **Custom Plugins**:
   - Any custom Tailwind plugins may need to be updated for v4 compatibility

3. **JIT Mode**:
   - JIT (Just-In-Time) mode is now the default and only option in v4

4. **Utility Classes**:
   - Some utility classes have been renamed or changed in v4

5. **CSS Directives**:
   - Code using `@apply` and `@screen` directives needs to be rewritten with standard CSS

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
