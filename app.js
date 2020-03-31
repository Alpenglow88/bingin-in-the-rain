const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const films = require('./films.json')
const randomFilm = films[ Math.floor(Math.random() * films.length) ]
const randomFilmTitle= randomFilm["film"]["title"]

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view cache', false);

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/films', function (req, res) {
  res.render('films')
})

app.get('/random-film', function (req, res) {
  res.render('waiting')
  // res.render(`html_film_views/${randomFilmTitle}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})
