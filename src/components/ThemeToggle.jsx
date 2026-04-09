import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-xl transition-all duration-500 font-bold transform hover:scale-110 active:scale-95 shadow-xl ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 hover:shadow-yellow-500/50'
          : 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/50'
      }`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
