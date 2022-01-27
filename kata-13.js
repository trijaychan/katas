const talkingCalendar = function(date) {
  const months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));
  
  let suffix;

  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
  return months[month - 2] + ' ' + day + suffix + ', ' + year;
};