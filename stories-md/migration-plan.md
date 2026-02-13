# Stories Migration Plan

## Analysis Summary

**Total files**: 13 markdown files in `stories-md/`

### Standard Pattern (11 files)
- ✅ Frontmatter with `title` and `description`
- ✅ Main H1 title
- ✅ Structured sections: `المحنة` → `نقطة التحول` → `النتيجة`
- ✅ Separator `---`
- ✅ `العبرة من القصة` → `نصيحة:...`
- ✅ Arabic istighfar ending

**Files**: الديون.md, السيارة.md, العقم.md, سحر.md, السجين.md, البصري.md, يونس.md, يوسف.md, الامام_أحمد.md, أسعد_إمرأة.md, محنة.md

### Alternate Pattern (2 files)
- ❌ No frontmatter
- ❌ No H1 title
- ❌ No structured sections
- ❌ Brief paragraphs only (7 lines each)

**Files**: قصة_خالد.md, قصة_سارة.md

## Conversion Required

Convert these 2 files to match standard pattern:

1. **قصة_خالد.md** → Add:
   - Frontmatter
   - H1 title
   - Structured sections
   - Arabic istighfar ending

2. **قصة_سارة.md** → Add:
   - Frontmatter
   - H1 title
   - Structured sections
   - Arabic istighfar ending

## Status

✅ **COMPLETED** - 2026-02-13

### ✅ Completed Tasks

1. ✅ **Analysis complete** - All patterns identified
2. ✅ **Parse standard files** - 11 stories successfully parsed and added
3. ✅ **Add stories to project** - Stories integrated into `src/data/stories.ts`
4. ✅ **Build verification** - `pnpm lint`, `npx tsc --noEmit`, and `pnpm build` all pass

### 📊 Results

- **Stories added**: 11
- **Categories**: repentance (10), gratitude (1)
- **All stories**: Bilingual (Arabic/English)
- **Build status**: ✅ Success

### ⏳ Remaining Tasks

- 🔄 **Convert 2 alternate files** - User will convert manually when ready:
  - `قصة_خالد.md`
  - `قصة_سارة.md`

Once converted, run `npx tsx scripts/parse-stories.ts` to regenerate.
