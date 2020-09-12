import React, { Suspense, lazy } from "react";

import { Progress } from "components";

const HourlyLazy = lazy(() => import("./Hourly.lazy"));

const Hourly = () => (
  // Progress Component contains `data-testid="id-request-progress"`
  <Suspense fallback={<Progress />}>
    <div data-testid="id-hourly-lazy">
      <HourlyLazy />
    </div>
  </Suspense>
);

export default Hourly;
