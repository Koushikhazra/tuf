import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getReadableDate } from '../utils/dateUtils';

const DateSelector = ({ startDate, endDate, onClear, theme }) => {
  if (!startDate && !endDate) return null;

  const daysCount = startDate && endDate 
    ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
    : 0;

  return (
    <div className={`rounded-2xl p-5 md:p-7 border-2 animate-slide-up shadow-xl transform ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-red border-purple-500'
        : 'bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 border-purple-400'
    }`}
    style={theme === 'dark' ? {
      background: 'linear-gradient(135deg, rgb(88, 28, 135) 0%, rgb(190, 24, 93) 50%, rgb(220, 38, 38) 100%)'
    } : {}}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className={`text-sm font-black mb-3 ${
            theme === 'dark' ? 'text-purple-100' : 'text-purple-900'
          }`}>
            📅 Selected Date Range
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className={`px-5 py-3 rounded-xl font-bold text-lg ${
              theme === 'dark'
                ? 'bg-white/20 text-white border-2 border-white/30'
                : 'bg-white text-purple-900 border-2 border-purple-400'
            } shadow-md`}>
              {startDate ? getReadableDate(startDate) : 'Start date'}
            </div>

            <ArrowRight className={`w-6 h-6 hidden md:block font-bold ${
              theme === 'dark' ? 'text-white' : 'text-purple-700'
            }`} />
            
            <div className="md:hidden w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />

            <div className={`px-5 py-3 rounded-xl font-bold text-lg ${
              theme === 'dark'
                ? 'bg-white/20 text-white border-2 border-white/30'
                : 'bg-white text-purple-900 border-2 border-purple-400'
            } shadow-md`}>
              {endDate ? getReadableDate(endDate) : 'End date'}
            </div>
          </div>

          {daysCount > 0 && (
            <p className={`mt-4 text-lg font-black ${
              theme === 'dark' ? 'text-yellow-200' : 'text-purple-900'
            }`}>
              ✨ {daysCount} day{daysCount !== 1 ? 's' : ''} selected
            </p>
          )}
        </div>

        <button
          onClick={onClear}
          className={`px-6 py-3 rounded-xl font-black transition-all duration-200 flex items-center gap-2 hover:scale-110 active:scale-95 text-lg ${
            theme === 'dark'
              ? 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/40'
              : 'bg-red-500 text-white hover:bg-red-600 border-2 border-red-600 shadow-lg'
          }`}
        >
          <X className="w-5 h-5" />
          Clear
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
