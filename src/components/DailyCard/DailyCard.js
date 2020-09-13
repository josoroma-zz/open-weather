import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import _get from "lodash.get";

import { convertToDegrees, getDayOfWeek, getWeatherIcon } from "utils";

import useStyles from "./DailyCard.style";

const DailyCard = ({ day }) => {
  const classes = useStyles();

  // https://openweathermap.org/forecast5
  const data = {
    id: _get(day, "id", 0),
    dayOfWeek: getDayOfWeek({ timestamp: _get(day, "dt", "") }),
    description: _get(day, "weather[0].description", ""),
    iconURL: getWeatherIcon({ icon: _get(day, "weather[0].icon", "") }),
    tempMax: _get(day, "main.temp_max", 0),
    tempMin: _get(day, "main.temp_min", 0),
  };

  return (
    <Link
      // Key
      key={data.id}
      // Rest of the Props
      className={classes.link}
      to={`${data.dayOfWeek}`}
    >
      <Card className={classes.root}>
        <CardHeader
          title={data.dayOfWeek}
          classes={{ root: classes.header, title: classes.title }}
        />
        <CardContent className={classes.content}>
          <Grid container justify="center">
            <Grid item className={classes.iconIMG} align="center" xs={12}>
              <img
                src={data.iconURL}
                alt={data.description}
                width="100"
                height="100"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                {convertToDegrees({ number: data.tempMin })}
              </Typography>
            </Grid>
            <Grid item align="right" xs={6}>
              <Typography variant="body2">
                {convertToDegrees({ number: data.tempMax })}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

DailyCard.propTypes = {
  day: PropTypes.object.isRequired,
};

export default DailyCard;
