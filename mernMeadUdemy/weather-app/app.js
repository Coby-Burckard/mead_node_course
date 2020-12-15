const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const address = process.argv[2];

if (!address) {
  console.log('no location passed');
  return;
}

geocode.addressToLL(process.argv[2], (error, data) => {
  if (error) {
    console.log('error', error);
    return;
  }

  weather.forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      console.log('error', error);
      return;
    }
    console.log(data.location);
    console.log('data', forecastData);
  });
});
