import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { Router, Switch, Route } from "react-router-dom";

import { daysOfWeekRoutesArr } from "config";

import { ErrorHandler } from "context/ErrorHandler";
import { Progress } from "components";

// Route Components
const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("components/WeatherForecast/WeatherForecast")),
  },
  {
    exact: true,
    path: daysOfWeekRoutesArr,
    component: lazy(() => import("components/Hourly/Hourly")),
  },
  {
    component: lazy(() => import("components/ErrorPage/ErrorPage")),
  },
];

const Routes = ({ history, Layout }) => (
  <>
    <Suspense fallback={<Progress />}>
      <Router history={history}>
        <ErrorHandler>
          <Layout.Toolbar />
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </ErrorHandler>
      </Router>
    </Suspense>
  </>
);

Routes.propTypes = {
  history: PropTypes.object,
  Layout: PropTypes.any,
};

export default Routes;
