'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
    );
  }

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme as Theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  const getIcon = () => {
    if (resolvedTheme === 'dark') {
      return <Moon className="w-5 h-5" />;
    }
    return <Sun className="w-5 h-5" />;
  };

  const getAriaLabel = () => {
    if (theme === 'system') {
      return `Switch theme (currently system, using ${resolvedTheme})`;
    }
    return `Switch theme (currently ${theme})`;
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
      aria-label={getAriaLabel()}
      title={`Theme: ${theme} (${resolvedTheme})`}
    >
      {getIcon()}
    </button>
  );
}

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse" />
      </div>
    );
  }

  const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { id: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { id: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
      {themes.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`p-2 rounded-full transition-all duration-200 ${
            theme === id
              ? 'bg-white dark:bg-gray-700 shadow-sm text-green-600 dark:text-green-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
          aria-label={`Set theme to ${id}`}
          title={id}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
