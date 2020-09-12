import { weatherIconURL } from "config";

export const getWeatherIcon = ({ icon }) => `${weatherIconURL}/${icon}@2x.png`;
