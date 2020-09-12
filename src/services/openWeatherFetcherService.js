export const openWeatherFetcherService = (url) => {
  let response = {
    data: [],
    error: "",
    status: 0,
  };

  if (!url) {
    return response;
  }

  return fetch(url).then(async (res) => {
    if (res.status >= 400 && res.status <= 499) {
      response.error = res.statusText;
      response.status = res.status;
    }

    if (res.status === 200) {
      const data = await res.json();

      // Readings every 3 hours for 5 days is 40 readings in total.
      response.data = data.list.filter((reading) =>
        // Filter the API response to be daily only.
        reading.dt_txt.includes("18:00:00")
      );
    }

    return response;
  });
};
