import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const CalendarHeader = ({ month, year, onPrevMonth, onNextMonth, theme }) => {
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month];

  // Gradient colors for each month
  const monthGradients = [
    'from-purple-400 to-blue-400',
    'from-pink-400 to-red-400',
    'from-cyan-400 to-blue-400',
    'from-pink-400 to-purple-400',
    'from-yellow-400 to-orange-400',
    'from-teal-400 to-green-400',
    'from-orange-400 to-pink-400',
    'from-amber-400 to-orange-400',
    'from-purple-400 to-blue-400',
    'from-orange-400 to-red-400',
    'from-red-400 to-orange-400',
    'from-purple-400 to-pink-400',
  ];

  return (
    <div className={`flex items-center justify-between p-5 md:p-6 rounded-2xl mb-6 border-2 ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-gray-700 to-gray-600 border-gray-500' 
        : 'bg-gradient-to-r from-white to-gray-50 border-gray-300'
    } shadow-xl transition-all duration-300`}>
      <button
        onClick={onPrevMonth}
        className={`p-3 md:p-4 rounded-xl font-bold transition-all duration-200 hover:scale-110 active:scale-90 transform shadow-lg ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-blue-500/50 hover:shadow-2xl'
            : 'bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:shadow-blue-400/50 hover:shadow-2xl'
        }`}
        aria-label="Previous month"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex-1 text-center px-4">
        <h2 className={`text-3xl md:text-4xl font-black flex items-center justify-center gap-3 drop-shadow-md ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${monthGradients[month]} text-white shadow-lg`}>
            <Calendar className="w-8 h-8" />
          </div>
          <span>{monthName} {year}</span>
        </h2>
      </div>

      <button
        onClick={onNextMonth}
        className={`p-3 md:p-4 rounded-xl font-bold transition-all duration-200 hover:scale-110 active:scale-90 transform shadow-lg ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-green-500/50 hover:shadow-2xl'
            : 'bg-gradient-to-br from-green-400 to-green-500 text-white hover:shadow-green-400/50 hover:shadow-2xl'
        }`}
        aria-label="Next month"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CalendarHeader;
