#!/bin/bash

# Tailwind CSS v4 Upgrade Script

echo "Starting Tailwind CSS v4 upgrade process..."

# Backup important files
echo "Creating backups of important files..."
mkdir -p backups
cp tailwind.config.ts backups/tailwind.config.ts.bak
cp postcss.config.mjs backups/postcss.config.mjs.bak
cp package.json backups/package.json.bak
cp src/app/globals.css backups/globals.css.bak

# Update dependencies
echo "Updating dependencies with bun..."
bun remove tailwindcss-animate autoprefixer postcss
bun add -d tailwindcss@4.0.0

# Add comment to postcss.config.mjs
echo "Updating PostCSS config..."
echo "// This file is no longer needed with Tailwind CSS v4" > postcss.config.mjs
echo "// Tailwind v4 no longer requires PostCSS" >> postcss.config.mjs
echo "// This file can be safely deleted" >> postcss.config.mjs
echo "" >> postcss.config.mjs
cat backups/postcss.config.mjs.bak >> postcss.config.mjs

# Clean cache
echo "Cleaning cache..."
rm -rf .next
rm -rf node_modules/.cache

# Rebuild
echo "Rebuilding the project..."
bun install

echo "Tailwind CSS v4 upgrade completed!"
echo "Please check TAILWIND_V4_UPGRADE.md for more information about the changes."
echo "If you encounter any issues, you can restore the backups from the 'backups' directory."
