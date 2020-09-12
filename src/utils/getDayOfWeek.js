import { daysOfWeekArr } from "config";

export const getDayOfWeek = ({ timestamp }) => {
  const a = new Date(timestamp * 1000);
  return daysOfWeekArr[a.getDay()];
};
