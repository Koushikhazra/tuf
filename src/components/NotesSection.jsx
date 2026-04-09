import React, { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { formatDateToString, getReadableDate } from '../utils/dateUtils';

const NotesSection = ({
  month,
  year,
  startDate,
  endDate,
  generalNotes,
  onGeneralNotesChange,
  onDateNoteChange,
  getDateNote,
  theme,
}) => {
  const [expandedDate, setExpandedDate] = useState(null);
  const [dateNotes, setDateNotes] = useState({});

  // Get all dates in range to show notes for
  const getDatesList = () => {
    if (!startDate || !endDate) return [];
    const dates = [];
    const currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const datesInRange = getDatesList();

  const handleDateNoteChange = (dateString, text) => {
    setDateNotes(prev => ({
      ...prev,
      [dateString]: text,
    }));
    onDateNoteChange(dateString, text);
  };

  const handleClearDateNote = (dateString) => {
    setDateNotes(prev => {
      const updated = { ...prev };
      delete updated[dateString];
      return updated;
    });
    onDateNoteChange(dateString, '');
  };

  const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ][month];

  return (
    <div className={`rounded-2xl shadow-2xl p-6 md:p-8 border-2 animate-slide-up ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-800 to-gray-700/80 border-gray-600'
        : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
    }`}>
      {/* General Notes Section */}
      <div className="mb-8">
        <h3 className={`text-xl md:text-2xl font-black mb-4 flex items-center gap-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          <span>📝</span>
          <span>{monthName} {year} Notes</span>
        </h3>

        <textarea
          value={generalNotes}
          onChange={(e) => onGeneralNotesChange(e.target.value)}
          placeholder="📋 Tip: Write contests, coding goals, learning targets, interview prep plans, or project deadlines for this month..."
          className={`w-full h-32 md:h-40 p-4 rounded-xl border-2 resize-none focus:outline-none transition-all duration-300 font-medium ${
            theme === 'dark'
              ? 'bg-gray-700/50 border-gray-500 text-white placeholder-gray-400 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-500/30'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/30'
          }`}
        />

        <p className={`text-xs mt-3 font-semibold ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
         </p>
      </div>

      {/* Date Range Notes */}
      {datesInRange.length > 0 && (
        <div>
          <h4 className={`text-lg md:text-xl font-black mb-4 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span>📅</span>
            <span>Selected Dates Notes</span>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
              theme === 'dark'
                ? 'bg-blue-900/40 text-blue-200'
                : 'bg-blue-100 text-blue-700'
            }`}>
              {datesInRange.length}
            </span>
          </h4>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {datesInRange.map((date) => {
              const dateString = formatDateToString(date);
              const dateNote = getDateNote(dateString) || dateNotes[dateString] || '';
              const isExpanded = expandedDate === dateString;

              return (
                <div
                  key={dateString}
                  className={`rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50 hover:border-blue-500/50'
                      : 'bg-blue-50/50 border-gray-300 hover:bg-blue-100/50 hover:border-blue-400'
                  }`}
                >
                  {/* Date Header */}
                  <button
                    onClick={() => setExpandedDate(isExpanded ? null : dateString)}
                    className={`w-full px-4 py-3 flex items-center justify-between font-bold transition-all ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700/50 active:bg-gray-600'
                        : 'hover:bg-blue-100/50 active:bg-blue-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-lg">📌</span>
                      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        {getReadableDate(date)}
                      </span>
                      {dateNote && (
                        <span className={`text-xs font-black px-2 py-1 rounded-full ${
                          theme === 'dark'
                            ? 'bg-green-900/40 text-green-200'
                            : 'bg-green-200 text-green-700'
                        }`}>
                          Has note
                        </span>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`} />
                    )}
                  </button>

                  {/* Expandable Note Area */}
                  {isExpanded && (
                    <div className={`px-4 py-3 border-t-2 ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}>
                      <textarea
                        value={dateNote}
                        onChange={(e) => handleDateNoteChange(dateString, e.target.value)}
                        placeholder="💻 Contest name, coding task, interview prep, or project status..."
                        className={`w-full h-24 p-3 rounded-lg border-2 resize-none focus:outline-none transition-all duration-300 text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-gray-700/70 border-gray-500 text-white placeholder-gray-400 focus:border-blue-400 focus:shadow-md focus:shadow-blue-500/20'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:shadow-md focus:shadow-blue-500/20'
                        }`}
                      />

                      {dateNote && (
                        <button
                          onClick={() => handleClearDateNote(dateString)}
                          className={`mt-2 w-full px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                            theme === 'dark'
                              ? 'bg-red-900/40 text-red-200 hover:bg-red-900/60 active:scale-95'
                              : 'bg-red-100 text-red-700 hover:bg-red-200 active:scale-95'
                          }`}
                        >
                          <Trash2 className="w-4 h-4" />
                          Clear Note
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State */}
      {datesInRange.length === 0 && (
        <div className={`text-center py-8 rounded-xl border-2 border-dashed ${
          theme === 'dark'
            ? 'bg-gray-700/20 border-gray-600 text-gray-400'
            : 'bg-gray-100/50 border-gray-300 text-gray-500'
        }`}>
          <Plus className="w-8 h-8 mx-auto mb-2 opacity-60" />
          <p className="font-bold">No dates selected yet</p>
          <p className="text-sm mt-1">Select a date range in the calendar to add notes</p>
        </div>
      )}
    </div>
  );
};

export default NotesSection;
