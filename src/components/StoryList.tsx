// Define the Story type matching the one in page.tsx and StoryCard.tsx
interface Story {
  id: string;
  title: string;
  content: string; // content might not be strictly needed here if only titles are displayed
  source?: string;
}

// Define UiStrings type matching the one in page.tsx
interface UiStrings {
  storyListTitle: string;
  selectStoryPrompt: string;
  sourceLabel: string;
}

interface StoryListProps {
  stories: Story[];
  currentStoryId: string | null;
  onStorySelect: (id: string) => void;
  currentLanguage: 'ar' | 'en' | 'tr'; // Updated to include 'tr'
  uiStrings: UiStrings; // Added uiStrings prop
}

export default function StoryList({ stories, currentStoryId, onStorySelect, currentLanguage, uiStrings }: StoryListProps) {
  if (!stories || stories.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">{uiStrings.selectStoryPrompt || "No stories available."}</p>;
  }

  return (
    <div className={`w-full md:w-1/3 p-4 border-gray-200 dark:border-gray-700 ${currentLanguage === 'ar' || currentLanguage === 'tr' ? 'md:border-l md:border-r-0 md:border-l-gray-200 md:dark:border-l-gray-700' : 'md:border-r md:border-r-gray-200 md:dark:border-r-gray-700'}`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {uiStrings.storyListTitle}
      </h2>
      <ul className="space-y-2">
        {stories.map((story) => (
          <li key={story.id}>
            <button
              onClick={() => onStorySelect(story.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors
                          ${story.id === currentStoryId
                            ? 'bg-blue-500 text-white font-semibold'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                          }
                          focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {story.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
