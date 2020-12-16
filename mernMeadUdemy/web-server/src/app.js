const path = require('path');
const express = require('express');
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const app = express();


//define paths for express config
const publicDirPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine and views 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Coby Burckard'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Coby Burckard'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Coby Burckard',
    message: 'get help here'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'help article not found',
    name: 'Coby Burckard'
  })
})

//API
app.get('/weather', (req, res) => {
  //checking for address 
  const { address } = req.query
  if (!address) {
    return res.send({
      error: 'must provide an address'
    })
  }

  geocode.addressToLL(address, (error, data) => {
    if (error) {
      return res.send({
        error: `unable to locate ${ address }`
      })
    }

    weather.forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        res.send({
          error: 'unable to retrieve forecast data'
        })
        return;
      }

      res.send({
        location: data.location,
        forecastData,
        address
      })
    });
  });
});

//404
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'page not found',
    name: 'Coby Burckard'
  })
})

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
