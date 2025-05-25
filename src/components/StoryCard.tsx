interface Story {
  id: string;
  title: string;
  content: string;
  source?: string;
}

interface StoryCardProps {
  story: Story;
  sourceLabel: string; // Added sourceLabel prop
}

export default function StoryCard({ story, sourceLabel }: StoryCardProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg dark:bg-gray-800 my-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{story.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-3">{story.content}</p>
      {story.source && (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">{sourceLabel} {story.source}</p>
      )}
    </div>
  );
}
