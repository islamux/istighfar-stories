'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPWA() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const promptEvent = e as BeforeInstallPromptEvent;
      promptEvent.preventDefault();
      console.log('PWA install prompt triggered');
      setSupportsPWA(true);
      setPromptInstall(promptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setSupportsPWA(false);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
  }, []);

  const handleInstallClick = async () => {
    if (!promptInstall) {
      return;
    }
    
    promptInstall.prompt();
    
    const { outcome } = await promptInstall.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setSupportsPWA(false);
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setPromptInstall(null);
  };

  // Don't show if already installed or not supported
  if (isInstalled || !supportsPWA) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <button
        onClick={handleInstallClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        aria-label="Install app"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8l-8 8-8-8"
          />
        </svg>
        Install App
      </button>
    </div>
  );
}
