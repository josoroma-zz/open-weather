import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import _get from "lodash.get";

import { convertToDegrees, getDayOfWeek } from "utils";

const Graph = ({ days }) => {
  const data = days.map((day) => {
    return {
      description: day.weather[0].description,
      day: getDayOfWeek({ timestamp: _get(day, "dt", "") }),
      temperature: day.main["temp"],
    };
  });

  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3f51b5" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <Tooltip
          wrapperStyle={{ top: 25 }}
          separator=" "
          formatter={(value, name) => [
            convertToDegrees({ number: value }),
            name,
          ]}
        />
        <XAxis dataKey="day" hide={true} />
        <Line name=" " dataKey="temperature" fill="url(#colorValue)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

Graph.propTypes = {
  days: PropTypes.array.isRequired,
};

export default Graph;
