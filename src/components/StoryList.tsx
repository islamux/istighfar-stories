'use client';

import { useState } from 'react';
import { StoryCard } from './StoryCard';
import { STORIES, CATEGORIES } from '@/data/stories';
import type { Language, StoryCategory } from '@/types/story';
import { ThemeToggle } from './ThemeToggle';

interface StoryListProps {
  initialLanguage?: Language;
}

export function StoryList({ initialLanguage = 'ar' }: StoryListProps) {
  const [activeCategory, setActiveCategory] = useState<StoryCategory | 'all'>('all');
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const filteredStories = activeCategory === 'all' 
    ? STORIES 
    : STORIES.filter(story => story.category === activeCategory);

  const isRtl = language === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : 'font-sans'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 dark:from-green-900/20 to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1" />
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 ${isRtl ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 
                'قصص المستغفرين' : 
                'Istighfar Stories'}
            </h1>
            <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
          <p className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto ${isRtl ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 
              'قصص مؤثرة من القرآن والسنة تعلمنا أهمية التوبة والاستغفار' : 
              'Inspiring stories from the Quran and Sunnah teaching us the importance of repentance and seeking forgiveness'}
          </p>
          
          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 bg-background dark:bg-card rounded-full p-1 shadow-sm border border-border inline-flex font-arabic-ui">
            <button
              onClick={() => setLanguage('ar')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'ar'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-10 bg-background dark:bg-card border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`flex items-center gap-2 overflow-x-auto scrollbar-hide`}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'
              }`}
            >
              {language === 'ar' ? 'الكل' : 'All'}
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'
                }`}
              >
                {language === 'ar' ? category.labelAr : category.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredStories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                {language === 'ar' ? 'لا توجد قصص في هذا القسم' : 'No stories in this category'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  language={language}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
