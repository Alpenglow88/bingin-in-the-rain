const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const films = require('./films.json');

const numberOfFilms = films.length

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/films', function (req, res) {
  res.render('films', {filmList: films, filmCount: numberOfFilms});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});