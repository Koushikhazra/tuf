import React from 'react';
import { 
  getDaysInMonth, 
  getFirstDayOfMonth, 
  DAYS, 
  HOLIDAYS,
  formatDateToString 
} from '../utils/dateUtils';
import { AlertCircle, Star } from 'lucide-react';

const CalendarGrid = ({
  month,
  year,
  startDate,
  endDate,
  selectedRange,
  onDateClick,
  getDateNote,
  theme,
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const getDateContent = (day) => {
    if (!day) return null;
    const date = new Date(year, month, day);
    const dateString = formatDateToString(date);
    const isHoliday = HOLIDAYS[dateString];
    const hasNote = getDateNote(dateString);
    return { date, dateString, isHoliday, hasNote };
  };

  const isDateInRange = (day) => {
    if (!day || !selectedRange.includes(formatDateToString(new Date(year, month, day)))) return false;
    return true;
  };

  const isStartDate = (day) => {
    if (!day || !startDate) return false;
    const date = new Date(year, month, day);
    return startDate.getFullYear() === year &&
           startDate.getMonth() === month &&
           startDate.getDate() === day;
  };

  const isEndDate = (day) => {
    if (!day || !endDate) return false;
    const date = new Date(year, month, day);
    return endDate.getFullYear() === year &&
           endDate.getMonth() === month &&
           endDate.getDate() === day;
  };

  const getDayClasses = (day) => {
    const content = getDateContent(day);
    if (!content) return '';
    
    const { isHoliday } = content;
    const inRange = isDateInRange(day);
    const isStart = isStartDate(day);
    const isEnd = isEndDate(day);

    let baseClass = 'relative p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer font-semibold ';
    let bgClass = '';
    let textClass = '';

    if (isStart || isEnd) {
      // Start or end date - vibrant gradient
      bgClass = ' bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 text-white shadow-2xl scale-110 ring-4 ring-white/40';
      textClass = 'font-black text-lg';
    } else if (inRange) {
      // In range - colorful gradient
      bgClass = theme === 'dark' 
        ? ' bg-gradient-to-br from-blue-600/60 to-purple-600/60 border-2 border-blue-300 text-blue-50 shadow-xl'
        : ' bg-gradient-to-br from-blue-300 via-cyan-300 to-purple-300 border-2 border-blue-200 text-white shadow-lg';
      textClass = 'font-extrabold text-white';
    } else {
      // Normal day - colorful base
      bgClass = theme === 'dark'
        ? ' bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-200 border-2 border-gray-500/50 hover:shadow-lg hover:scale-105'
        : ' bg-gradient-to-br from-white via-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 text-gray-800 border-2 border-blue-200 hover:shadow-2xl hover:scale-105';
    }

    if (isHoliday && !isStart && !isEnd) {
      bgClass += theme === 'dark'
        ? ' ring-2 ring-yellow-400/80 shadow-lg'
        : ' ring-2 ring-yellow-400 shadow-lg';
    }

    return `${baseClass}${bgClass} ${textClass}`;
  };

  // Color scheme for each day of the week
  const dayColors = [
    { bg: 'from-red-400 to-red-500', label: 'Sunday' },      // Sunday
    { bg: 'from-blue-400 to-blue-500', label: 'Monday' },     // Monday
    { bg: 'from-cyan-400 to-cyan-500', label: 'Tuesday' },    // Tuesday
    { bg: 'from-green-400 to-green-500', label: 'Wednesday' }, // Wednesday
    { bg: 'from-yellow-400 to-yellow-500', label: 'Thursday' }, // Thursday
    { bg: 'from-purple-400 to-purple-500', label: 'Friday' },  // Friday
    { bg: 'from-pink-400 to-pink-500', label: 'Saturday' }    // Saturday
  ];

  // Month-based color scheme for the header
  const monthColors = [
    'from-purple-300 to-blue-300',
    'from-pink-300 to-red-300',
    'from-cyan-300 to-blue-300',
    'from-pink-300 to-purple-300',
    'from-yellow-300 to-orange-300',
    'from-teal-300 to-green-300',
    'from-orange-300 to-pink-300',
    'from-amber-300 to-orange-300',
    'from-purple-300 to-blue-300',
    'from-orange-300 to-red-300',
    'from-red-300 to-orange-300',
    'from-purple-300 to-pink-300',
  ];

  return (
    <div className={`rounded-2xl shadow-2xl p-6 md:p-8 border-2 animate-slide-in-bottom ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-800 to-gray-700/80 border-gray-600' 
        : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
    }`}>
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {dayColors.map((dayColor, index) => (
          <div
            key={index}
            className={`text-center font-black py-3 rounded-lg text-white bg-gradient-to-br ${
              dayColor.bg
            } shadow-md transform hover:scale-110 transition-transform duration-200`}
          >
            <div className="text-sm md:text-base">{dayColor.label}</div>
          </div>
        ))}
      </div>

      {/* Calendar days grid */}
      <div className="grid grid-cols-7 gap-2 md:gap-3">
        {days.map((day, index) => {
          const content = getDateContent(day);
          const isStart = isStartDate(day);
          const isEnd = isEndDate(day);
          const inRange = isDateInRange(day);
          const columnIndex = index % 7;
          const isSunday = columnIndex === 0;

          return (
            <div
              key={index}
              onClick={() => day && onDateClick(new Date(year, month, day))}
              className={`min-h-[70px] md:min-h-[100px] flex flex-col justify-between ${getDayClasses(day)} ${
                day ? 'active:scale-95 group' : ''
              }`}
            >
              {day ? (
                <>
                  <div className="flex justify-between items-start">
                    <span className="text-xl md:text-2xl font-black">{day}</span>
                    {content.isHoliday && (
                      <div title={content.isHoliday} className="animate-pulse">
                        <AlertCircle className="w-5 h-5 text-yellow-300 drop-shadow" />
                      </div>
                    )}
                  </div>
                  
                  {/* Range selection indicators and contest label */}
                  <div className="flex justify-between items-end gap-1">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        {isStart && <div className="w-3 h-3 bg-white rounded-full shadow-md" />}
                        {isEnd && <div className="w-3 h-3 bg-white rounded-full shadow-md" />}
                      </div>
                      {isSunday && (
                        <div className={`text-xs font-bold px-2 py-1 rounded-lg ${
                          isStart || isEnd
                            ? 'bg-white/40 text-white'
                            : theme === 'dark'
                            ? 'bg-red-500/50 text-white drop-shadow'
                            : 'bg-red-300 text-red-900'
                        }`}>
                          contest
                        </div>
                      )}
                    </div>
                    
                    {/* Note indicator */}
                    {content.hasNote && (
                      <div className={`text-xs px-2 py-1 rounded-lg font-bold truncate max-w-[80px] ${
                        isStart || isEnd
                          ? 'bg-white/30 text-white'
                          : theme === 'dark'
                          ? 'bg-orange-400/50 text-orange-100 drop-shadow'
                          : 'bg-orange-200 text-orange-800'
                      }`}>
                        {content.hasNote.length > 15 ? content.hasNote.substring(0, 12) + '...' : content.hasNote}
                      </div>
                    )}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
