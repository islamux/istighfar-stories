"use client";
import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import arabicData from '../locales/ar.json';
import englishData from '../locales/en.json';

// Define the Story type matching StoryCardProps
// (StoryCard.tsx already defines this, but for clarity in page.tsx or if it were separate)
interface Story {
  id: string;
  title: string;
  content: string;
  source?: string;
}

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<'ar' | 'en'>('ar');
  const [currentStory, setCurrentStory] = useState<Story>(
    arabicData.stories.length > 0 
      ? arabicData.stories[0] 
      : { id: 'no_story_ar_initial', title: 'لا توجد قصة مبدئية', content: 'لم يتم تحميل أي قصة.' }
  );

  const handleSetLanguage = (lang: 'ar' | 'en') => {
    setCurrentLanguage(lang);
    if (lang === 'ar') {
      if (arabicData.stories.length > 0) {
        setCurrentStory(arabicData.stories[0]);
      } else {
        setCurrentStory({ id: 'no_story_ar', title: 'لا توجد قصة', content: 'القصة المطلوبة غير متوفرة حالياً.' });
      }
    } else { // lang === 'en'
      if (englishData.stories.length > 0) {
        setCurrentStory(englishData.stories[0]);
      } else {
        setCurrentStory({ id: 'no_story_en', title: 'No Story', content: 'The requested story is not currently available.' });
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Istigfar Stories | قصص المستغفرين</h1>
      <div className="mb-4">
        <button 
          onClick={() => handleSetLanguage('ar')} 
          className={`px-4 py-2 mr-2 rounded ${currentLanguage === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          العربية
        </button>
        <button 
          onClick={() => handleSetLanguage('en')} 
          className={`px-4 py-2 rounded ${currentLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
      </div>
      {currentStory && currentStory.id !== 'no_story_ar_initial' && currentStory.id !== 'no_story_ar' && currentStory.id !== 'no_story_en' ? (
        <StoryCard story={currentStory} />
      ) : (
        <p>{currentStory.content}</p> // Display content of placeholder story
      )}
    </main>
  );
}
