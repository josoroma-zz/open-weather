import React from "react";
import Container from "@material-ui/core/Container";
import _get from "lodash.get";
import useSWR from "swr";

import { openWeatherMapAPI } from "config";
import { openWeatherFetcherService } from "services";

import { ContentMessage } from "components";

import useStyles from "./Hourly.lazy.style";

const HourlyLazy = () => {
  const classes = useStyles();

  const { data } = useSWR(openWeatherMapAPI.hourly, openWeatherFetcherService, {
    suspense: true,
  });

  const response = {
    status: _get(data, "status", 200),
    data: _get(data, "data", []),
    error: _get(data, "error", ""),
  };

  if (response.status !== 200 && response.error !== "") {
    return (
      <div data-testid="id-hourly-response-error">
        <ContentMessage
          type="message"
          title={`${response.error} - ${response.status}`}
          description="Hourly Forecast is unavailable in the free plan."
        />
      </div>
    );
  }

  if (response.data && response.data.length === 0) {
    return (
      <div data-testid="id-hourly-no-search-results">
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
      data-testid="id-hourly-container"
      className={classes.root}
      maxWidth="md"
    >
      Hourly Forecast is unavailable in the free plan.
    </Container>
  );
};

export default HourlyLazy;
