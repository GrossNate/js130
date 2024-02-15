/**
 * @typedef {Object} DayInfo
 * @property {Date} date
 * @property {number} weekday
 * @property {String[]} schedules
 */
class Schedule {
  /** @type {Array<DayInfo>} */
  #days = [];
  constructor(year, month) {
    for (
      let day = new Date(year, month - 1, 1);
      day < new Date(year, month, 1);
      day.setDate(day.getDate() + 1)
    ) {
      this.#days.push({
        date: new Date(day),
        weekday: new Date(day).getDay(),
        schedules: [],
      });
    }
    for (let i = 0; i < 7; i += 1) {
      this.#days
        .filter(({ weekday }) => weekday === i)
        .forEach((day, index, array) => {
          if (index === 0) day.schedules.push("first");
          if (index === 1) day.schedules.push("second");
          if (index === 2) day.schedules.push("third");
          if (index === 3) day.schedules.push("fourth");
          if (index === 4) day.schedules.push("fifth");
          if (index === array.length - 1) day.schedules.push("last");
        });
    }
    this.#days.forEach((day) => {
      if ([13, 14, 15, 16, 17, 18, 19].includes(day.date.getDate())) {
        day.schedules.push("teenth");
      }
    });
    console.log(this.#days);
  }
  /**
   * @param {number} weekday Day of the week, 0 is Sunday.
   * @param {string} schedule Schedule identifier - "first", "second", etc.
   * @return {Date}
   */
  getScheduleDate(weekday, schedule) {
    let foundDays = this.#days.filter((day) =>
        day.weekday === weekday && day.schedules.includes(schedule)
      );
    if (foundDays.length === 0) return null;
    return new Date(foundDays[0].date);
  }
}

class Meetup {
  #schedule;

  constructor(year, month) {
    this.#schedule = new Schedule(year, month);
  }

  static #WEEKDAYS = {
    "sunday": 0,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
  }

  day(weekdayStr, schedule) {
    return this.#schedule.getScheduleDate(
      Meetup.#WEEKDAYS[weekdayStr.toLowerCase()],
      schedule.toLowerCase(),
    );
  }
}

module.exports = Meetup;
