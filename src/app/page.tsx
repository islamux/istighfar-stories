"use client";
import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import StoryList from '../components/StoryList'; // Import StoryList
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
  const [allStories, setAllStories] = useState<Story[]>(
    arabicData.stories.length > 0 ? arabicData.stories : []
  );
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(
    arabicData.stories.length > 0 ? arabicData.stories[0].id : null
  );
  const [currentStory, setCurrentStory] = useState<Story | null>(
    arabicData.stories.length > 0 ? arabicData.stories[0] : null
  );

  const handleSetLanguage = (lang: 'ar' | 'en') => {
    setCurrentLanguage(lang);
    const newStories = lang === 'ar' ? arabicData.stories : englishData.stories;
    setAllStories(newStories.length > 0 ? newStories : []);

    if (newStories.length > 0) {
      // Try to find previously selected story ID in the new language list
      const existingStory = selectedStoryId ? newStories.find(story => story.id === selectedStoryId) : undefined;
      if (existingStory) {
        setCurrentStory(existingStory);
        // selectedStoryId remains the same
      } else {
        // Default to the first story in the new language
        setCurrentStory(newStories[0]);
        setSelectedStoryId(newStories[0].id);
      }
    } else {
      // No stories in the new language
      setCurrentStory(null);
      setSelectedStoryId(null);
    }
  };

  const handleStorySelected = (id: string) => {
    const story = allStories.find(s => s.id === id);
    if (story) {
      setSelectedStoryId(id);
      setCurrentStory(story);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen py-8 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Istigfar Stories | قصص المستغفرين</h1>
      <div className="mb-6">
        <button 
          onClick={() => handleSetLanguage('ar')} 
          className={`px-4 py-2 mr-2 rounded transition-colors ${currentLanguage === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
        >
          العربية
        </button>
        <button 
          onClick={() => handleSetLanguage('en')} 
          className={`px-4 py-2 rounded transition-colors ${currentLanguage === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
        >
          English
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-4">
        {/* Story List */}
        <div className={`md:w-1/3 ${currentLanguage === 'ar' ? 'md:order-2' : 'md:order-1'}`}>
          <StoryList
            stories={allStories}
            currentStoryId={selectedStoryId}
            onStorySelect={handleStorySelected}
            currentLanguage={currentLanguage}
          />
        </div>

        {/* Story Content */}
        <div className={`md:w-2/3 p-4 ${currentLanguage === 'ar' ? 'md:order-1' : 'md:order-2'}`}>
          {currentStory ? (
            <StoryCard story={currentStory} />
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              {currentLanguage === 'ar' ? 'الرجاء اختيار قصة لعرضها.' : 'Please select a story to display.'}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
