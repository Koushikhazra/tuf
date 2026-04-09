import { useState, useEffect, useCallback } from 'react';
import { 
  getNotes, 
  saveNotes, 
  getDateRange, 
  saveDateRange,
  getTheme,
  saveTheme,
  getMemo,
  saveMemo,
} from '../utils/storage';
import { formatDateToString, parseStringToDate, isSameDate } from '../utils/dateUtils';

/**
 * Hook for managing calendar notes
 */
export const useCalendarNotes = () => {
  const initialNotes = getNotes();
  const [notes, setNotes] = useState(() => {
    const { general, ...dateNotes } = initialNotes;
    return dateNotes;
  });
  const [generalNotes, setGeneralNotes] = useState(initialNotes.general || '');
  const [isLoading, setIsLoading] = useState(false);

  // Save notes to localStorage
  const saveCalendarNotes = useCallback((allNotes, general) => {
    const updated = { ...allNotes, general };
    setNotes(allNotes);
    setGeneralNotes(general);
    saveNotes(updated);
  }, []);

  // Add or update a note for a specific date
  const addDateNote = useCallback((dateString, noteText) => {
    setNotes(prev => ({
      ...prev,
      [dateString]: noteText || undefined,
    }));
    const updated = { ...notes, [dateString]: noteText, general: generalNotes };
    saveNotes(updated);
  }, [notes, generalNotes]);

  // Get note for a specific date
  const getDateNote = useCallback((dateString) => {
    return notes[dateString] || '';
  }, [notes]);

  // Update general notes
  const updateGeneralNotes = useCallback((text) => {
    setGeneralNotes(text);
    saveCalendarNotes(notes, text);
  }, [notes, saveCalendarNotes]);

  return {
    notes,
    generalNotes,
    addDateNote,
    getDateNote,
    updateGeneralNotes,
    saveCalendarNotes,
    isLoading,
  };
};

/**
 * Hook for managing date range selection
 */
export const useDateRange = () => {
  const savedRange = getDateRange();
  const [startDate, setStartDate] = useState(() => {
    return savedRange && savedRange.startDate ? parseStringToDate(savedRange.startDate) : null;
  });
  const [endDate, setEndDate] = useState(() => {
    return savedRange && savedRange.endDate ? parseStringToDate(savedRange.endDate) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  // Select or update date range
  const selectDateRange = useCallback((date) => {
    if (!startDate || (startDate && endDate)) {
      // Start new selection
      setStartDate(date);
      setEndDate(null);
      saveDateRange(formatDateToString(date), formatDateToString(date));
    } else if (startDate && !endDate) {
      // Complete selection
      const start = date < startDate ? date : startDate;
      const end = date > startDate ? date : startDate;
      setStartDate(start);
      setEndDate(end);
      saveDateRange(formatDateToString(start), formatDateToString(end));
    }
  }, [startDate, endDate]);

  // Clear date range
  const clearDateRange = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    saveDateRange(null, null);
  }, []);

  // Check if date is in range
  const isInRange = useCallback((date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  }, [startDate, endDate]);

  // Check if date is start date
  const isStartDate = useCallback((date) => {
    return startDate && isSameDate(date, startDate);
  }, [startDate]);

  // Check if date is end date
  const isEndDate = useCallback((date) => {
    return endDate && isSameDate(date, endDate);
  }, [endDate]);

  return {
    startDate,
    endDate,
    selectDateRange,
    clearDateRange,
    isInRange,
    isStartDate,
    isEndDate,
    isLoading,
  };
};

/**
 * Hook for managing theme
 */
export const useTheme = () => {
  const savedTheme = getTheme();
  const [theme, setTheme] = useState(savedTheme);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      saveTheme(newTheme);
      return newTheme;
    });
  }, []);

  // Set specific theme
  const setThemedMode = useCallback((newTheme) => {
    setTheme(newTheme);
    saveTheme(newTheme);
  }, []);

  return {
    theme,
    toggleTheme,
    setThemedMode,
    isLoading,
    isDark: theme === 'dark',
  };
};

/**
 * Hook for managing month memos
 */
export const useMonthMemo = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Get memo for a specific month
  const getMonthMemo = useCallback((month, year) => {
    const monthKey = `${year}-${month}`;
    return getMemo(monthKey);
  }, []);

  // Update memo for a specific month
  const updateMonthMemo = useCallback((month, year, memoText) => {
    const monthKey = `${year}-${month}`;
    saveMemo(monthKey, memoText);
  }, []);

  return {
    getMonthMemo,
    updateMonthMemo,
    isLoading,
  };
};
