const request = require('request');

const forecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0a94ea7739096c65f230375767bab9bf&query=${long},${lat}`;

  console.log(url);

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback(error);
    } else if (res.body.error) {
      callback('unable to find location');
    } else {
      callback(
        undefined,
        `It is ${res.body.current.temperature}C outside and the weather is ${res.body.current.weather_descriptions[0]}`
      );
    }
  });
};

module.exports = {
  forecast: forecast,
};
