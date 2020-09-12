import React, { Suspense, lazy } from "react";

import { Progress } from "components";

const WeatherForecastLazy = lazy(() => import("./WeatherForecast.lazy"));

const WeatherForecast = () => (
  // Progress Component contains `data-testid="id-request-progress"`
  <Suspense fallback={<Progress />}>
    <div data-testid="id-weather-forecast-lazy">
      <WeatherForecastLazy />
    </div>
  </Suspense>
);

export default WeatherForecast;
