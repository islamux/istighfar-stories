// Define the Story type matching the one in page.tsx and StoryCard.tsx
interface Story {
  id: string;
  title: string;
  content: string; // content might not be strictly needed here if only titles are displayed
  source?: string;
}

interface StoryListProps {
  stories: Story[];
  currentStoryId: string | null;
  onStorySelect: (id: string) => void;
  currentLanguage: 'ar' | 'en'; // To set text direction
}

export default function StoryList({ stories, currentStoryId, onStorySelect, currentLanguage }: StoryListProps) {
  if (!stories || stories.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No stories available.</p>;
  }

  return (
    <div className={`w-full md:w-1/4 p-4 border-r border-gray-200 dark:border-gray-700 ${currentLanguage === 'ar' ? 'md:border-l md:border-r-0' : ''}`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {currentLanguage === 'ar' ? 'قائمة القصص' : 'Story List'}
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
