/**
 * Storage utility for managing localStorage
 */

const STORAGE_KEYS = {
  NOTES: 'calendar_notes',
  DATE_RANGE: 'calendar_date_range',
  THEME: 'calendar_theme',
  MEMOS: 'calendar_memos',
};

/**
 * Save notes to localStorage
 */
export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes:', error);
  }
};

/**
 * Get notes from localStorage
 */
export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEYS.NOTES);
    return notes ? JSON.parse(notes) : {};
  } catch (error) {
    console.error('Error getting notes:', error);
    return {};
  }
};

/**
 * Save date range to localStorage
 */
export const saveDateRange = (startDate, endDate) => {
  try {
    localStorage.setItem(STORAGE_KEYS.DATE_RANGE, JSON.stringify({ startDate, endDate }));
  } catch (error) {
    console.error('Error saving date range:', error);
  }
};

/**
 * Get date range from localStorage
 */
export const getDateRange = () => {
  try {
    const range = localStorage.getItem(STORAGE_KEYS.DATE_RANGE);
    return range ? JSON.parse(range) : null;
  } catch (error) {
    console.error('Error getting date range:', error);
    return null;
  }
};

/**
 * Save theme to localStorage
 */
export const saveTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (error) {
    console.error('Error saving theme:', error);
  }
};

/**
 * Get theme from localStorage
 */
export const getTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  } catch (error) {
    console.error('Error getting theme:', error);
    return 'dark';
  }
};

/**
 * Save memo for a specific month
 */
export const saveMemo = (monthKey, memoText) => {
  try {
    const memos = JSON.parse(localStorage.getItem(STORAGE_KEYS.MEMOS) || '{}');
    memos[monthKey] = memoText;
    localStorage.setItem(STORAGE_KEYS.MEMOS, JSON.stringify(memos));
  } catch (error) {
    console.error('Error saving memo:', error);
  }
};

/**
 * Get memo for a specific month
 */
export const getMemo = (monthKey) => {
  try {
    const memos = JSON.parse(localStorage.getItem(STORAGE_KEYS.MEMOS) || '{}');
    return memos[monthKey] || '';
  } catch (error) {
    console.error('Error getting memo:', error);
    return '';
  }
};

/**
 * Clear all calendar data
 */
export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing data:', error);
  }
};

/**
 * Export all calendar data
 */
export const exportData = () => {
  return {
    notes: getNotes(),
    dateRange: getDateRange(),
    theme: getTheme(),
  };
};

/**
 * Import calendar data
 */
export const importData = (data) => {
  try {
    if (data.notes) saveNotes(data.notes);
    if (data.dateRange) saveDateRange(data.dateRange.startDate, data.dateRange.endDate);
    if (data.theme) saveTheme(data.theme);
  } catch (error) {
    console.error('Error importing data:', error);
  }
};
