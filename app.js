const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const films = require('./films.json');

const numberOfFilms = films.length

const filmTitle1 = films[0]["film"]["title"]
const filmOverview1 = films[0]["film"]["overview"]
const imageUrl1 = films[0]["film"]["imageUrl"]
const imdbScore1 = films[0]["film"]["imdbScore"]
const trailerLink1 = films[0]["film"]["trailerLink"]

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/films', function (req, res) {
  res.render('films', {filmList: films, filmCount: numberOfFilms, filmTitle1: filmTitle1, filmOverview1: filmOverview1, imageUrl1: imageUrl1, imdbScore1: imdbScore1, trailerLink1: trailerLink1});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});