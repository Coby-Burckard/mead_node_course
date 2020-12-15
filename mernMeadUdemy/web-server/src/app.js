const path = require('path');

const express = require('express');

const app = express();

const publicDirPath = path.join(__dirname, '../public/');
app.use(express.static(publicDirPath));

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'hello',
    location: 'mn',
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
