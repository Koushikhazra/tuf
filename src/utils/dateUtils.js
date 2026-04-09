// Date utility functions
export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// US Federal Holidays 2024-2025 (can be customized)
export const HOLIDAYS = {
  '2024-01-01': 'New Year\'s Day',
  '2024-01-15': 'MLK Jr. Day',
  '2024-02-19': 'Presidents\' Day',
  '2024-03-10': 'Daylight Saving Time',
  '2024-03-29': 'Good Friday',
  '2024-05-27': 'Memorial Day',
  '2024-06-19': 'Juneteenth',
  '2024-07-04': 'Independence Day',
  '2024-09-02': 'Labor Day',
  '2024-10-14': 'Columbus Day',
  '2024-11-11': 'Veterans Day',
  '2024-11-28': 'Thanksgiving',
  '2024-12-25': 'Christmas',
  '2025-01-01': 'New Year\'s Day',
  '2025-01-20': 'MLK Jr. Day',
  '2025-02-17': 'Presidents\' Day',
  '2025-03-09': 'Daylight Saving Time',
  '2025-04-20': 'Easter',
  '2025-05-26': 'Memorial Day',
  '2025-06-19': 'Juneteenth',
  '2025-07-04': 'Independence Day',
  '2025-09-01': 'Labor Day',
  '2025-10-13': 'Columbus Day',
  '2025-11-11': 'Veterans Day',
  '2025-11-27': 'Thanksgiving',
  '2025-12-25': 'Christmas',
};

// Month-based color themes for visual appeal
export const MONTH_THEMES = {
  0: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', name: 'Lavender Dreams', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(102,126,234,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(118,75,162,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/><circle cx=%22100%22 cy=%22100%22 r=%2250%22 fill=%22white%22 opacity=%220.1%22/><circle cx=%221100%22 cy=%22500%22 r=%2280%22 fill=%22white%22 opacity=%220.1%22/></svg>")' },
  1: { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', name: 'Love Story', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(240,147,251,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(245,87,108,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/><path d=%22M600 300 Q700 250 750 300 Q700 350 600 400 Q500 350 550 300 Z%22 fill=%22white%22 opacity=%220.15%22/></svg>")' },
  2: { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', name: 'Spring Wake', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(79,172,254,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(0,242,254,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/><circle cx=%22200%22 cy=%22200%22 r=%2240%22 fill=%22white%22 opacity=%220.1%22/><circle cx=%221000%22 cy=%22400%22 r=%2260%22 fill=%22white%22 opacity=%220.1%22/></svg>")' },
  3: { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', name: 'Fresh Mint', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(67,233,123,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(56,249,215,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  4: { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', name: 'Warm Bloom', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(250,112,154,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(254,225,64,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  5: { bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', name: 'Summer Night', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(48,207,208,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(51,8,103,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  6: { bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', name: 'Beach Days', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(168,237,234,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(254,214,227,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  7: { bg: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)', name: 'Golden Hour', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(255,154,86,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(255,106,136,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  8: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', name: 'Starry Night', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(102,126,234,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(118,75,162,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  9: { bg: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)', name: 'Autumn Gold', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(245,175,25,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(241,39,17,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  10: { bg: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)', name: 'Harvest Moon', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(235,51,73,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(244,92,67,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
  11: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', name: 'Winter Magic', bgImage: 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><linearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgba(102,126,234,0.3)%22/><stop offset=%22100%25%22 style=%22stop-color:rgba(118,75,162,0.3)%22/></linearGradient></defs><rect fill=%22url(%23g)%22 width=%221200%22 height=%22600%22/></svg>")' },
};

// Student coding events and contests
export const STUDENT_EVENTS = {
  '2024-01-15': { type: 'contest', title: 'CodeChef Monthly', topic: 'Competitive Programming' },
  '2024-01-20': { type: 'topic', title: 'Learn React Basics', topic: 'Frontend Development' },
  '2024-02-14': { type: 'contest', title: 'LeetCode Contest', topic: 'DSA Challenges' },
  '2024-02-28': { type: 'topic', title: 'Database Design', topic: 'Backend' },
  '2024-03-10': { type: 'contest', title: 'HackerRank Challenge', topic: 'Problem Solving' },
  '2024-03-25': { type: 'topic', title: 'JavaScript Async', topic: 'Web Development' },
  '2024-04-05': { type: 'contest', title: 'Codeforces Div 2', topic: 'Algorithms' },
  '2024-04-20': { type: 'topic', title: 'API Design Best Practices', topic: 'Backend' },
  '2024-05-01': { type: 'contest', title: 'Google Kickstart', topic: 'Competitive' },
  '2024-05-15': { type: 'topic', title: 'CSS Grid & Flexbox', topic: 'Frontend' },
  '2024-06-07': { type: 'contest', title: 'AtCoder Contest', topic: 'Math Problems' },
  '2024-06-22': { type: 'topic', title: 'Node.js Advanced', topic: 'Backend' },
  '2024-07-10': { type: 'contest', title: 'Facebook Hacker Cup', topic: 'Competitive' },
  '2024-07-25': { type: 'topic', title: 'Git & Version Control', topic: 'DevOps' },
  '2024-08-05': { type: 'contest', title: 'August Code Challenge', topic: 'General' },
  '2024-08-20': { type: 'topic', title: 'Docker Basics', topic: 'DevOps' },
  '2024-09-01': { type: 'contest', title: 'September Contest', topic: 'Algorithms' },
  '2024-09-15': { type: 'topic', title: 'Microservices Architecture', topic: 'Backend' },
  '2024-10-08': { type: 'contest', title: 'October Clash', topic: 'Quick Challenges' },
  '2024-10-22': { type: 'topic', title: 'Testing & QA', topic: 'Quality Assurance' },
  '2024-11-05': { type: 'contest', title: 'November Contest', topic: 'Data Structures' },
  '2024-11-20': { type: 'topic', title: 'Cloud Computing', topic: 'AWS/Cloud' },
  '2024-12-10': { type: 'contest', title: 'Year-end Challenge', topic: 'All Topics' },
  '2024-12-25': { type: 'topic', title: 'Holiday Project Ideas', topic: 'Projects' },
  '2025-01-10': { type: 'contest', title: 'New Year CodeChef', topic: 'DSA' },
  '2025-01-25': { type: 'topic', title: 'Machine Learning Intro', topic: 'AI/ML' },
  '2025-02-08': { type: 'contest', title: 'February Challenge', topic: 'General' },
  '2025-02-22': { type: 'topic', title: 'Web Security', topic: 'Security' },
  '2025-03-07': { type: 'contest', title: 'March Contest', topic: 'Advanced DSA' },
  '2025-03-20': { type: 'topic', title: 'Python Advanced', topic: 'Python' },
};

/**
 * Get the number of days in a month
 */
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Get the day of week for the first day of a month (0-6, Sunday-Saturday)
 */
export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

/**
 * Format date to YYYY-MM-DD string
 */
export const formatDateToString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Parse date string YYYY-MM-DD to Date object
 */
export const parseStringToDate = (dateString) => {
  if (!dateString) return null;
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

/**
 * Check if a date is between two dates (inclusive)
 */
export const isDateBetween = (date, startDate, endDate) => {
  const dateTime = new Date(date).getTime();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return dateTime >= start && dateTime <= end;
};

/**
 * Check if two dates are the same
 */
export const isSameDate = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * Get today's date
 */
export const getToday = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
};

/**
 * Get the week number of a date
 */
export const getWeekNumber = (date) => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
};

/**
 * Get array of dates in a range
 */
export const getDateRange = (startDate, endDate) => {
  const dates = [];
  const currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

/**
 * Get a readable date format
 */
export const getReadableDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
