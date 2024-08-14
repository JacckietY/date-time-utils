// date-time-utils.js

class DateTimeUtils {
  
    // Format a date object into a string (YYYY-MM-DD)
    static formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    // Get the current date and time in ISO format
    static getCurrentDateTimeISO() {
      return new Date().toISOString();
    }
  
    // Get the difference between two dates in days
    static dateDiffInDays(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    }
  
    // Convert a date to a relative time string (e.g., "5 minutes ago")
    static timeAgo(date) {
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);
  
      let interval = Math.floor(seconds / 31536000);
      if (interval > 1) return `${interval} years ago`;
  
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) return `${interval} months ago`;
  
      interval = Math.floor(seconds / 86400);
      if (interval > 1) return `${interval} days ago`;
  
      interval = Math.floor(seconds / 3600);
      if (interval > 1) return `${interval} hours ago`;
  
      interval = Math.floor(seconds / 60);
      if (interval > 1) return `${interval} minutes ago`;
  
      return `${seconds} seconds ago`;
    }
  
    // Convert a time string (e.g., "14:30") to minutes since midnight
    static timeToMinutes(timeStr) {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    }
  
    // Add days to a date
    static addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
  }
  
  module.exports = DateTimeUtils;
  