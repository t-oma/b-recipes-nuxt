# Agent Guidelines for b-recipes-nuxt

## Commands

- **Build**: `nuxt build`
- **Dev server**: `nuxt dev`
- **Generate static**: `nuxt generate`
- **Preview**: `nuxt preview`
- **Lint**: `eslint .`
- **Lint fix**: `eslint . --fix`
- **Format check**: `prettier . --check`
- **Format fix**: `prettier . --write`
- **Type check**: Run build (Nuxt handles TypeScript checking)

## Code Style

- **Framework**: Nuxt 4 with Vue 3, TypeScript, Pinia stores
- **Styling**: Tailwind CSS with custom Vite plugin
- **Formatting**: Prettier (2 spaces, semicolons, trailing commas)
- **Linting**: ESLint with Vue accessibility rules
- **Components**: `<script setup lang="ts">`, PascalCase names
- **Composables**: camelCase with `use` prefix
- **Types**: PascalCase, defined in `shared/types/`
- **Imports**: Use `~/` for Nuxt aliases, relative paths otherwise
- **Naming**: camelCase for variables/functions, PascalCase for types/components
- **Multilingual**: Supports Ukrainian/Russian content, English code
- **Error handling**: Basic try/catch where needed, no complex patterns
- **State**: Pinia stores with reactive/computed patterns

## Preferences

- Do not commit until you asked to
