// 3:55 - 4:20
//

class Clock {
  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    return this.hours.toString().padStart(2, "0") + ":" +
      this.minutes.toString().padStart(2, "0");
  }

  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  add(minutes) {
    let newHours = this.hours;
    let newMinutes = this.minutes;
    newMinutes += minutes;
    while (newMinutes > 59) {
      newHours += 1;
      newMinutes -= 60;
    }
    newHours = newHours % 24;
    return new Clock(newHours, newMinutes);
  }

  subtract(minutes) {
    let newHours = this.hours;
    let newMinutes = this.minutes;
    newMinutes -= minutes;
    while (newMinutes < 0) {
      newHours -= 1;
      newMinutes += 60;
    }
    while (newHours < 0) {
      newHours += 24;
    }
    return new Clock(newHours, newMinutes);
  }

  isEqual(clock) {
    return this.hours === clock.hours && this.minutes === clock.minutes;
  }
}

module.exports = Clock;
