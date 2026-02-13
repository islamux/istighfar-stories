export type StoryCategory = 'repentance' | 'gratitude' | 'patience' | 'forgiveness' | 'mercy';
export type Language = 'ar' | 'en';

export interface StoryTranslation {
  title: string;
  content: string;
  excerpt: string;
}

export interface Story {
  id: string;
  category: StoryCategory;
  source: string;
  author?: string;
  date: string;
  readTime: number;
  translations: Record<Language, StoryTranslation>;
}

export interface CategoryLabel {
  id: StoryCategory;
  labelAr: string;
  labelEn: string;
}
