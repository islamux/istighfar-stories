# Arabic Font Enhancement Plan

## Current State Analysis

**Current Implementation:**
- Uses generic system font stack: `"Noto Sans Arabic", "Cairo", "Tajawal", system-ui, sans-serif`
- No actual font files loaded - relies on system-installed fonts
- No offline capability - requires internet for Google Fonts CDN (if used)
- Generic fallback to system fonts results in inconsistent appearance across devices

**Problems:**
1. No guaranteed beautiful Arabic typography
2. Inconsistent appearance across devices
3. No offline font capability
4. No font optimization or preloading

---

## Recommended Solution: Self-Hosted Fonts with Next.js

### Option A: @fontsource npm packages (RECOMMENDED)
Install fonts as npm packages for automatic optimization and offline support.

**Recommended Font Combinations:**

#### 1. Primary: Amiri (Classic Islamic)
- **Best for:** Quranic content, traditional Islamic stories
- **Style:** Classical Naskh calligraphy
- **License:** SIL Open Font License
- **Why:** Beautiful, authentic Islamic feel

#### 2. Secondary: Cairo (Modern)
- **Best for:** UI elements, headings, modern feel
- **Style:** Contemporary Kufi-based geometric
- **License:** SIL Open Font License
- **Why:** Clean, modern, highly readable

#### 3. Alternative: Tajawal (Modern Geometric)
- **Best for:** Body text, long reading
- **Style:** Modern geometric sans-serif
- **License:** SIL Open Font License
- **Why:** Excellent readability, contemporary

---

## Implementation Plan

### Phase 1: Install Font Packages

```bash
# Option A: Amiri (Classic Islamic)
pnpm add @fontsource/amiri

# Option B: Cairo (Modern)
pnpm add @fontsource/cairo

# Option C: Tajawal (Modern Geometric)
pnpm add @fontsource/tajawal

# Recommended: Install multiple for hierarchy
pnpm add @fontsource/amiri @fontsource/cairo @fontsource/tajawal
```

### Phase 2: Create Font Configuration

**New File:** `src/lib/fonts.ts`

```typescript
import { Amiri, Cairo, Tajawal } from 'next/font/google';

// Primary font for headings and titles
export const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
  preload: true,
});

// Secondary font for UI and body
export const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

// Alternative modern font
export const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
});
```

### Phase 3: Update Layout

**File:** `src/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { amiri, cairo } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Istigfar-Stories | قصص المستغفرين",
  description: "A bilingual Islamic stories web application showcasing the power of seeking forgiveness (istighfar) in Muslim lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${amiri.variable} ${cairo.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

### Phase 4: Update Global Styles

**File:** `src/app/globals.css`

Add font family definitions:

```css
:root {
  /* Font families */
  --font-arabic-primary: var(--font-amiri), 'Amiri', serif;
  --font-arabic-secondary: var(--font-cairo), 'Cairo', sans-serif;
  
  /* Rest of CSS variables... */
}

/* Apply fonts to Arabic content */
.font-arabic {
  font-family: var(--font-arabic-primary);
  line-height: 1.8;
}

.font-arabic-ui {
  font-family: var(--font-arabic-secondary);
  line-height: 1.6;
}

/* Default body font */
body {
  font-family: var(--font-arabic-secondary), system-ui, -apple-system, sans-serif;
}
```

### Phase 5: Update Components

**File:** `src/components/StoryList.tsx`

```typescript
// For titles and headings
<h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-arabic ${isRtl ? 'font-arabic' : ''}`}>

// For UI elements (buttons, filters)
<button className={`font-arabic-ui ...`}>
```

**File:** `src/components/StoryCard.tsx`

```typescript
// For story titles
<h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 font-arabic">
  {translation.title}
</h2>

// For body text
<p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed font-arabic">
  {translation.excerpt}
</p>
```

---

## Alternative: Option B - Local Font Files (Manual)

If npm packages are not preferred, manually host font files:

### Step 1: Download Fonts
Download WOFF2 files from:
- Google Fonts GitHub: https://github.com/google/fonts
- Fontsource: https://fontsource.org/

### Step 2: Place in Public Directory
```
public/fonts/
├── amiri/
│   ├── amiri-regular.woff2
│   ├── amiri-bold.woff2
│   └── amiri-quran.woff2
├── cairo/
│   ├── cairo-regular.woff2
│   ├── cairo-medium.woff2
│   ├── cairo-semibold.woff2
│   └── cairo-bold.woff2
└── tajawal/
    ├── tajawal-regular.woff2
    ├── tajawal-medium.woff2
    └── tajawal-bold.woff2
```

### Step 3: Configure Local Fonts

**File:** `src/lib/fonts.ts`

```typescript
import localFont from 'next/font/local';

export const amiriLocal = localFont({
  src: [
    {
      path: '../../public/fonts/amiri/amiri-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/amiri/amiri-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-amiri',
  display: 'swap',
});
```

---

## Typography Hierarchy Recommendations

### For Islamic Stories Website:

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Site Title | Amiri | 2.5rem - 3rem | 700 |
| Story Titles | Amiri | 1.25rem | 700 |
| Story Body | Cairo/Tajawal | 1rem | 400 |
| UI Elements | Cairo | 0.875rem | 500-600 |
| Buttons | Cairo | 0.875rem | 600 |
| Navigation | Cairo | 0.875rem | 500 |

---

## Testing Checklist

- [ ] Fonts load correctly without internet (offline mode)
- [ ] No flash of unstyled text (FOUT)
- [ ] Arabic text is beautiful and readable
- [ ] Font weights render correctly (400, 500, 700)
- [ ] Both light and dark themes work
- [ ] No layout shift during font loading
- [ ] Lighthouse performance score maintained
- [ ] Mobile devices display fonts correctly
- [ ] RTL text alignment preserved
- [ ] Build completes without errors

---

## Performance Considerations

### Font Loading Strategy:
1. **Preload** critical fonts in layout.tsx
2. **Display: swap** to show fallback immediately
3. **Subset** Arabic characters only to reduce size
4. **WOFF2** format only (30% smaller than WOFF)

### Estimated Bundle Impact:
- Amiri Regular: ~60KB
- Amiri Bold: ~60KB
- Cairo Regular: ~50KB
- Cairo Bold: ~50KB
- **Total**: ~220KB (acceptable for offline capability)

---

## Success Criteria

1. ✅ Arabic text displays beautifully without internet
2. ✅ Font hierarchy improves readability and aesthetics
3. ✅ Classic Islamic font (Amiri) for authentic feel
4. ✅ Modern font (Cairo) for UI elements
5. ✅ No performance degradation
6. ✅ Maintains accessibility standards
7. ✅ Build passes all checks

---

## Implementation Priority

1. **High**: Install @fontsource packages
2. **High**: Configure fonts in layout.tsx
3. **Medium**: Update component classes
4. **Medium**: Test offline functionality
5. **Low**: Fine-tune typography hierarchy

---

## Resources

- **Fontsource:** https://fontsource.org/fonts/amiri
- **Google Fonts:** https://fonts.google.com/specimen/Amiri
- **Cairo GitHub:** https://github.com/Gue3bara/Cairo
- **Next.js Font Optimization:** https://nextjs.org/docs/app/building-your-application/optimizing/fonts

---

Created: 2026-02-12
