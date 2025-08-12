'use client';

import { useEffect } from 'react';

export default function PWARegister() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/service-worker.js', {
            scope: '/',
          });

          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available, prompt user to refresh
                  if (confirm('New version available! Would you like to refresh?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          console.log('Service Worker registered successfully:', registration);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Register service worker when window loads
      window.addEventListener('load', registerServiceWorker);

      // Handle app install prompt (moved to InstallPWA component)
      // This is kept here as a reference for logging
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        console.log('App can be installed - handled by InstallPWA component');
      });

      window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
      });

      // Cleanup
      return () => {
        window.removeEventListener('load', registerServiceWorker);
      };
    }
  }, []);

  return null;
}
