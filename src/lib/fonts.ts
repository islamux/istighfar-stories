import { Amiri, Cairo, Tajawal } from 'next/font/google';

// Primary font for headings and titles - Classic Islamic Naskh style
export const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
  preload: true,
});

// Secondary font for UI and body text - Modern geometric style
export const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

// Alternative modern font for body text
export const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
});
