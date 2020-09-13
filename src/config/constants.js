/**
 * https://openweathermap.org/forecast5
 *
 * https://samples.openweathermap.org/data/2.5/forecast?zip={CITY,us}&appid={KEY}
 */

const zipCode = 10101;

export const openWeatherMapAPI = {
  weekly: `${process.env.REACT_APP_API_URL}/?zip=${zipCode},us&units=imperial&appid=${process.env.REACT_APP_API_KEY}`,
  hourly: `${process.env.REACT_APP_API_URL}/hourly?zip=${zipCode},us&appid=${process.env.REACT_APP_API_KEY}`,
};

export const daysOfWeekArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const daysOfWeekRoutesArr = [
  "/sun",
  "/mon",
  "/tue",
  "/wed",
  "/thu",
  "/fri",
  "/sat",
];

export const weatherIconURL = "http://openweathermap.org/img/wn";
