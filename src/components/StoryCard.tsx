import type { Story, Language, StoryCategory } from '@/types/story';
import { CATEGORIES } from '@/data/stories';

interface StoryCardProps {
  story: Story;
  language: Language;
  onClick?: (story: Story) => void;
}

const getCategoryStyle = (category: StoryCategory): string => {
  const styles: Record<StoryCategory, string> = {
    repentance: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800',
    gratitude: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
    patience: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
    forgiveness: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800',
    mercy: 'bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800',
  };
  return styles[category];
};

export function StoryCard({ story, language, onClick }: StoryCardProps) {
  const translation = story.translations[language];
  const category = CATEGORIES.find(cat => cat.id === story.category);
  const isRtl = language === 'ar';

  return (
    <article
      className={`group relative bg-card dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border dark:border-border overflow-hidden cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
      onClick={() => onClick?.(story)}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className={`p-6 ${isRtl ? 'space-y-3' : 'space-y-3'}`}>
        <div className={`flex items-center gap-2 ${isRtl ? 'justify-between' : ''}`}>
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full border font-arabic-ui ${getCategoryStyle(story.category)}`}
          >
            {language === 'ar' ? category?.labelAr : category?.labelEn}
          </span>
          <span className={`text-xs text-muted-foreground font-arabic-ui ${isRtl ? 'order-first' : ''}`}>
            {story.readTime} {language === 'ar' ? 'دقائق' : 'min read'}
          </span>
        </div>

        <h2 className={`text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${isRtl ? 'font-arabic' : ''}`}>
          {translation.title}
        </h2>

        <p className={`text-muted-foreground text-sm line-clamp-3 leading-relaxed ${isRtl ? 'font-arabic' : ''}`}>
          {translation.excerpt}
        </p>

        <div className={`flex items-center justify-between pt-2 border-t border-border ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">{story.source}</span>
            {story.author && <span className="ml-1">{story.author}</span>}
          </div>
          <button 
            className={`text-sm font-medium text-primary hover:text-accent transition-colors font-arabic-ui ${isRtl ? 'mr-auto' : 'ml-auto'}`}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(story);
            }}
          >
            {language === 'ar' ? 'اقرأ المزيد →' : 'Read more →'}
          </button>
        </div>
      </div>
    </article>
  );
}
