const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'hbs')

const publicDirPath = path.join(__dirname, '../public/');
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
    message: 'get help here'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'hello',
    location: 'mn',
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
