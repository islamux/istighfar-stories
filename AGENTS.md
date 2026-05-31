# AGENTS.md — Istighfar Stories

## Project Overview

See [README.md](./README.md) for full project description.

- **Stack**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Languages**: Arabic (RTL) + English (LTR) — bilingual interface
- **i18n**: JSON translation files in `src/locales/`
- **Package manager**: pnpm
- **Scripts**: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm typecheck`

## Docs Reference

### `docs/ARABIC_FONT_PLAN.md`
Font strategy for Arabic typography:
- **Primary**: Amiri (classic Islamic calligraphy) for headings/story titles — installed via `@fontsource/amiri`
- **Secondary**: Cairo (modern geometric) for UI/body text — installed via `@fontsource/cairo`
- **Loading**: Next.js font optimization, self-hosted for offline, `display: swap`, Arabic subset only
- CSS variables: `--font-amiri`, `--font-cairo` used via `font-arabic` / `font-arabic-ui` classes

### `docs/STORIES_MIGRATION_PLAN.md`
Story data migration status:
- **11 stories migrated** and integrated into `src/data/stories.ts` — bilingual AR/EN, categorized, build passing
- **2 remaining**: `قصة_خالد.md` and `قصة_سارة.md` need manual conversion to standard format, then `npx tsx scripts/parse-stories.ts` to regenerate

## Conventions

- **Components**: Reusable UI in `src/components/`, page components in `src/app/`
- **Data**: Story data in `src/data/stories.ts` with TypeScript types in `src/types/`
- **Styles**: Tailwind utility classes, `globals.css` for custom variables
- **RTL**: `dir="rtl"` on Arabic content, Tailwind RTL variants for layout
- **Branch naming**: `<type>/<short-description>` — feature/, fix/, refactor/, docs/, chore/
- **Commits**: Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`)
