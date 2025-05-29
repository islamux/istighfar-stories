import Image from "next/image";
import { stories, Story } from "../../data/stories";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        {stories.map((story: Story) => (
          <div key={story.id} className="story-container mb-8 p-4 border border-gray-200 rounded-lg w-full">
            <p dir="rtl" className="text-xl font-semibold mb-2 text-right">
              {story.arabicText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">English:</strong> {story.englishText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">French:</strong> {story.frenchText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">German:</strong> {story.germanText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">Spanish:</strong> {story.spanishText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">Turkish:</strong> {story.turkishText}
            </p>
            <p className="mt-2">
              <strong className="font-medium">Chinese:</strong> {story.chineseText}
            </p>
          </div>
        ))}
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
