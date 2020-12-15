const request = require('request');

const addressToLL = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiY29ieXNiIiwiYSI6ImNrZW02NGZ6dTAwamsycW1hMzI5OXJxbmUifQ.2e-T9_mA7KNmz3fyLFKnmg&limit=1';

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback(error, undefined);
    } else if (res.body.features.length === 0) {
      callback('unable to find results for input', undefined);
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = {
  addressToLL: addressToLL,
};
