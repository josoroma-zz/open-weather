import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Redirect, useHistory } from "react-router-dom";
import _get from "lodash.get";
import useSWR from "swr";
import { v4 as uuid } from "uuid";

import { openWeatherMapAPI } from "config";
import { openWeatherFetcherService } from "services";

import { ContentMessage, Graph, DailyCard } from "components";

import useStyles from "./WeatherForecast.lazy.style";

const WeatherForecastLazy = () => {
  const classes = useStyles();
  const history = useHistory();

  const { data } = useSWR(openWeatherMapAPI.weekly, openWeatherFetcherService, {
    suspense: true,
  });

  const response = {
    status: _get(data, "status", 200),
    data: _get(data, "data", []),
    error: _get(data, "error", ""),
  };

  if (response.status !== 200 && response.error !== "") {
    return (
      <div data-testid="id-weather-forecast-response-error">
        <Redirect
          to={{
            pathname: history.location.pathname,
            dailyData: { status: response.status, error: response.error },
          }}
        />
      </div>
    );
  }

  if (response.data && response.data.length === 0) {
    return (
      <div data-testid="id-weather-forecast-no-search-results">
        <ContentMessage
          type="message"
          title="No Results Found!"
          description="Let's ask again."
        />
      </div>
    );
  }

  return (
    <Container
      data-testid="id-weather-forecast-container"
      className={classes.root}
    >
      <Grid container justify="center">
        {response.data.map((day) => (
          <DailyCard
            // Key
            key={uuid()}
            // Rest of the Props
            day={day}
          />
        ))}
      </Grid>
      <Grid container justify="center">
        <Grid className={classes.graph} item>
          <Graph days={response.data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherForecastLazy;
