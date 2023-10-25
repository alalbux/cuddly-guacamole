function timeConversion(s) {
    var hour = parseInt(s.slice(0, 2));
    if (s.slice(8, 10) == "PM" && hour != 12) hour += 12;
    if (s.slice(8, 10) == "AM" && hour == 12) hour = 0;    
    return `${hour < 10 ? '0' : ''}${hour}:${s.slice(3, 5)}:${s.slice(6, 8)}`;
  }
  