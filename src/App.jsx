import React, { useState, useEffect, useMemo } from 'react';
import { useCalendarNotes, useDateRange, useTheme, useMonthMemo } from './hooks/useCalendar';
import { getDateRange, formatDateToString, getToday } from './utils/dateUtils';
import MonthDisplay from './components/MonthDisplay';
import CalendarGrid from './components/CalendarGrid';
import NotesSection from './components/NotesSection';
import DateSelector from './components/DateSelector';
import ThemeToggle from './components/ThemeToggle';
import { Settings, Download, Trash2 } from 'lucide-react';

function App() {
  const [currentDate, setCurrentDate] = useState(getToday());
  const [showSettings, setShowSettings] = useState(false);
  const [monthMemo, setMonthMemo] = useState('');

  // Use custom hooks
  const calendar = useCalendarNotes();
  const dateRange = useDateRange();
  const theme = useTheme();
  const monthMemoHook = useMonthMemo();

  // Load memo for current month
  useEffect(() => {
    const memo = monthMemoHook.getMonthMemo(currentDate.getMonth(), currentDate.getFullYear());
    setMonthMemo(memo);
  }, [currentDate.getMonth(), currentDate.getFullYear()]);

  // Generate selected date range for styling
  const selectedRange = useMemo(() => {
    if (dateRange.startDate && dateRange.endDate) {
      return getDateRange(dateRange.startDate, dateRange.endDate)
        .map(date => formatDateToString(date));
    }
    return [];
  }, [dateRange.startDate, dateRange.endDate]);

  // Handle month navigation
  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Handle date selection
  const handleDateClick = (date) => {
    dateRange.selectDateRange(date);
  };

  // Handle date note change
  const handleDateNoteChange = (dateString, noteText) => {
    calendar.addDateNote(dateString, noteText);
  };

  // Handle memo change
  const handleMemoChange = (memoText) => {
    setMonthMemo(memoText);
    monthMemoHook.updateMonthMemo(currentDate.getMonth(), currentDate.getFullYear(), memoText);
  };

  // Export data
  const handleExport = () => {
    const data = {
      notes: calendar.notes,
      generalNotes: calendar.generalNotes,
      dateRange: dateRange.startDate && dateRange.endDate ? {
        start: formatDateToString(dateRange.startDate),
        end: formatDateToString(dateRange.endDate),
      } : null,
      exportedAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `calendar-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Clear all data
  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all calendar data? This cannot be undone.')) {
      calendar.saveCalendarNotes({}, '');
      dateRange.clearDateRange();
    }
  };

  // Show loading state
  if (calendar.isLoading || dateRange.isLoading || theme.isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-purple-300 rounded-full animate-spin mb-4 mx-auto" />
          <p className="text-white text-lg font-semibold">Loading calendar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full transition-colors duration-500 ${
      theme.isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`} style={{ backgroundAttachment: 'fixed' }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Enhanced Header with theme toggle */}
        <div className={`rounded-3xl p-6 md:p-8 mb-8 shadow-2xl border-2 backdrop-blur-sm transition-all duration-300 ${
          theme.isDark
            ? 'bg-gradient-to-br from-gray-800 via-gray-750 to-gray-700 border-gray-600'
            : 'bg-gradient-to-br from-white via-blue-50 to-purple-50 border-gray-200'
        }`}>
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-5xl md:text-6xl p-3 rounded-2xl ${
                  theme.isDark
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                    : 'bg-gradient-to-br from-blue-400 to-purple-400'
                } shadow-lg`}>
                  📅
                </div>
                <div>
                  <h1 className={`text-4xl md:text-5xl font-black ${
                    theme.isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Wall Calendar
                  </h1>
                  <p className={`text-base md:text-lg font-semibold ${
                    theme.isDark ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    Plan • Select • Organize
                  </p>
                </div>
              </div>
              <p className={`text-sm md:text-base leading-relaxed max-w-md ${
                theme.isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Create beautiful month plans, select date ranges, add personal notes and organize your life
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <ThemeToggle theme={theme.theme} onToggle={theme.toggleTheme} />
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-bold flex items-center gap-2 ${
                  theme.isDark
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                    : 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                }`}
                title="Settings"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className={`rounded-2xl p-6 mb-8 border-l-4 animate-slide-up shadow-lg ${
            theme.isDark
              ? 'bg-gradient-to-br from-gray-750/80 to-gray-700/80 border-blue-500 text-white'
              : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border-blue-500 text-gray-900'
          }`}>
            <h3 className={`text-2xl font-black mb-4 flex items-center gap-2 ${
              theme.isDark ? 'text-white' : 'text-gray-900'
            }`}>⚙️ Settings & Actions</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleExport}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 ${
                  theme.isDark
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                    : 'bg-gradient-to-br from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                }`}
              >
                <Download className="w-5 h-5" />
                Export Data
              </button>
              <button
                onClick={handleClearData}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 ${
                  theme.isDark
                    ? 'bg-gradient-to-br from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700'
                    : 'bg-gradient-to-br from-red-500 to-rose-500 text-white hover:from-red-600 hover:to-rose-600'
                }`}
              >
                <Trash2 className="w-5 h-5" />
                Clear All Data
              </button>
            </div>
          </div>
        )}

        {/* Month Display with Navigation */}
        <div className="animate-slide-in-top" key={`month-${currentDate.getMonth()}-${currentDate.getFullYear()}`}>
          <MonthDisplay
            month={currentDate.getMonth()}
            year={currentDate.getFullYear()}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            theme={theme.theme}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 animate-slide-in-bottom" key={`content-${currentDate.getMonth()}-${currentDate.getFullYear()}`}>
          {/* Left Column - Calendar */}
          <div className="lg:col-span-2 space-y-6">

            {/* Date Selector Info */}
            {(dateRange.startDate || dateRange.endDate) && (
              <DateSelector
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onClear={dateRange.clearDateRange}
                theme={theme.theme}
              />
            )}

            {/* Calendar Grid */}
            <CalendarGrid
              month={currentDate.getMonth()}
              year={currentDate.getFullYear()}
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              selectedRange={selectedRange}
              onDateClick={handleDateClick}
              getDateNote={calendar.getDateNote}
              theme={theme.theme}
            />

            {/* Instructions for mobile */}
            <div className={`lg:hidden p-4 rounded-lg border-l-4 ${
              theme.isDark
                ? 'bg-gray-700/50 border-purple-500 text-gray-300'
                : 'bg-purple-50 border-purple-500 text-purple-900'
            }`}>
              <p className="text-sm font-semibold mb-2">📱 Mobile Instructions:</p>
              <ul className="text-sm space-y-1 opacity-80">
                <li>• Tap a date to start your selection</li>
                <li>• Tap another date to complete the range</li>
                <li>• Scroll down to add notes</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Notes */}
          <div className="animate-slide-up">
            <NotesSection
              month={currentDate.getMonth()}
              year={currentDate.getFullYear()}
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              generalNotes={calendar.generalNotes}
              onGeneralNotesChange={calendar.updateGeneralNotes}
              onDateNoteChange={handleDateNoteChange}
              getDateNote={calendar.getDateNote}
              theme={theme.theme}
            />
          </div>
        </div>

        {/* Month Memo Section Below Calendar */}
        <div className={`rounded-2xl p-6 md:p-8 mb-8 border-2 shadow-lg animate-slide-in-bottom ${
          theme.isDark
            ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/50 text-white'
            : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50 border-purple-400/50 text-gray-900'
        }`}>
          <h3 className={`text-2xl font-black mb-4 flex items-center gap-2 ${
            theme.isDark ? 'text-purple-200' : 'text-purple-700'
          }`}>
            📊 {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentDate.getMonth()]} Progress
          </h3>

          <textarea
            value={monthMemo}
            onChange={(e) => handleMemoChange(e.target.value)}
            placeholder="💡 Example: 76 problems solved, rank 5, completed 3 projects..."
            className={`w-full h-32 p-4 rounded-xl border-2 resize-none focus:outline-none transition-all duration-300 font-medium text-lg ${
              theme.isDark
                ? 'bg-gray-700/50 border-gray-500 text-white placeholder-gray-400 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/30'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30'
            }`}
          />

          <p className={`text-sm mt-3 font-semibold ${
            theme.isDark ? 'text-purple-300' : 'text-purple-600'
          }`}>
            📈 Track your achievements: problems solved, rating, projects completed, contest rankings, or any progress metrics
          </p>
        </div>

        {/* Footer */}
        <div className={`mt-12 pt-6 border-t text-center text-sm ${
          theme.isDark
            ? 'border-gray-700 text-gray-400'
            : 'border-gray-200 text-gray-600'
        }`}>
          
        </div>
      </main>
    </div>
  );
}

export default App;
