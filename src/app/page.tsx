import StoryCard from '../components/StoryCard';
import arabicData from '../locales/ar.json';

// Define the Story type matching StoryCardProps
// (StoryCard.tsx already defines this, but for clarity in page.tsx or if it were separate)
interface Story {
  id: string;
  title: string;
  content: string;
  source?: string;
}

export default function Home() {
  // Explicitly type the stories array if needed, though type inference from JSON import might work.
  const stories: Story[] = arabicData.stories;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">Istigfar Stories | قصص المستغفرين</h1>
      {stories.length > 0 ? (
        <StoryCard story={stories[0]} />
      ) : (
        <p>No stories available at the moment.</p>
      )}
    </main>
  );
}
