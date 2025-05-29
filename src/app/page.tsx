"use client";
import Image from "next/image";
import { useState } from 'react';
import { stories } from "@/data/stories";

export default function Home() {
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);
  const [currentLanguageView, setCurrentLanguageView] = useState<string>('arabic');

  const selectedStory = stories.find(s => s.id === selectedStoryId);

  const baseLangButtonClass = "px-5 py-2 border rounded-lg text-sm font-medium transition-colors shadow-sm";
  const activeLangButtonClass = `${baseLangButtonClass} bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:text-white`;
  const inactiveLangButtonClass = `${baseLangButtonClass} border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700`;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-20 bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-5xl">
        <div className="story-titles-list w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-gray-800 dark:text-gray-100">Select a Story</h2>
          {stories.map(story => (
            <button
              key={story.id}
              onClick={() => {
                setSelectedStoryId(story.id);
                setCurrentLanguageView('arabic');
              }}
              className={`py-3 px-4 border rounded-lg mb-2 w-full text-right transition-all duration-150 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                ${selectedStoryId === story.id 
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white border-blue-600 dark:border-blue-500 shadow-md text-lg font-semibold' 
                  : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-lg font-medium'}`}
            >
              {story.titleArabic}
            </button>
          ))}
        </div>

        <div className="selected-story-content w-full p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg min-h-[300px] flex flex-col">
          {selectedStory ? (
            <>
              <h3 dir="rtl" className="text-3xl font-extrabold mb-1 text-right text-blue-700 dark:text-blue-400">{selectedStory.titleArabic}</h3>
              
              {currentLanguageView === 'arabic' && <h4 className="text-2xl font-bold mb-4 text-right dir-rtl text-gray-800 dark:text-gray-100">{selectedStory.titleArabic}</h4>}
              {currentLanguageView === 'english' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleEnglish}</h4>}
              {currentLanguageView === 'french' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleFrench}</h4>}
              {currentLanguageView === 'german' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleGerman}</h4>}
              {currentLanguageView === 'spanish' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleSpanish}</h4>}
              {currentLanguageView === 'turkish' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleTurkish}</h4>}
              {currentLanguageView === 'chinese' && <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedStory.titleChinese}</h4>}

              <div className="story-text-content flex-grow mb-6 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {currentLanguageView === 'arabic' && <p dir="rtl" className="text-right whitespace-pre-wrap">{selectedStory.arabicText}</p>}
                {currentLanguageView === 'english' && <p className="whitespace-pre-wrap">{selectedStory.englishText}</p>}
                {currentLanguageView === 'french' && <p className="whitespace-pre-wrap">{selectedStory.frenchText}</p>}
                {currentLanguageView === 'german' && <p className="whitespace-pre-wrap">{selectedStory.germanText}</p>}
                {currentLanguageView === 'spanish' && <p className="whitespace-pre-wrap">{selectedStory.spanishText}</p>}
                {currentLanguageView === 'turkish' && <p className="whitespace-pre-wrap">{selectedStory.turkishText}</p>}
                {currentLanguageView === 'chinese' && <p className="whitespace-pre-wrap">{selectedStory.chineseText}</p>}
              </div>

              <div className="language-buttons mt-auto pt-6 border-t border-gray-300 dark:border-gray-600 flex flex-wrap justify-center gap-3">
                <button onClick={() => setCurrentLanguageView('arabic')} className={currentLanguageView === 'arabic' ? activeLangButtonClass : inactiveLangButtonClass}>العربية</button>
                <button onClick={() => setCurrentLanguageView('english')} className={currentLanguageView === 'english' ? activeLangButtonClass : inactiveLangButtonClass}>English</button>
                <button onClick={() => setCurrentLanguageView('french')} className={currentLanguageView === 'french' ? activeLangButtonClass : inactiveLangButtonClass}>Français</button>
                <button onClick={() => setCurrentLanguageView('german')} className={currentLanguageView === 'german' ? activeLangButtonClass : inactiveLangButtonClass}>Deutsch</button>
                <button onClick={() => setCurrentLanguageView('spanish')} className={currentLanguageView === 'spanish' ? activeLangButtonClass : inactiveLangButtonClass}>Español</button>
                <button onClick={() => setCurrentLanguageView('turkish')} className={currentLanguageView === 'turkish' ? activeLangButtonClass : inactiveLangButtonClass}>Türkçe</button>
                <button onClick={() => setCurrentLanguageView('chinese')} className={currentLanguageView === 'chinese' ? activeLangButtonClass : inactiveLangButtonClass}>中文</button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 m-auto text-lg">Please select a story from the list on the left to read its content.</p>
          )}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
