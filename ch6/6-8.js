export function readingsOutsideRange(station, range) {
  return station.readings.filter(
    // (r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling
    // (r) => r.temp < range.min || r.temp > range.max
    (r) => !range.contains(r.temp)
  );
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

export class NumberRage {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const operationPlan = new NumberRage(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);
