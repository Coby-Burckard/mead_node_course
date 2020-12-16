const path = require('path');
const express = require('express');
const hbs = require('hbs')

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

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'hello',
    location: 'mn',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    message: 'help article not found',
    name: 'Coby Burckard'
  })
})

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
