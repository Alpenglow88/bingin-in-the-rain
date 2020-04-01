const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const films = require('./films.json')
const randomFilm = films[ Math.floor(Math.random() * films.length) ]
const randomFilmTitle= randomFilm['film']['title']

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view cache', false);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})

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

app.get('/waiting', function (req, res) {
  res.render('waiting')
})

app.get('/films-number', function (req, res) {
  res.render('waiting')
})

app.get('/films-A', function (req, res) {
  res.render('waiting')
})

app.get('/films-B', function (req, res) {
  res.render('waiting')
})

app.get('/films-C', function (req, res) {
  res.render('waiting')
})

app.get('/films-D', function (req, res) {
  res.render('waiting')
})

app.get('/films-E', function (req, res) {
  res.render('waiting')
})

app.get('/films-F', function (req, res) {
  res.render('waiting')
})

app.get('/films-G', function (req, res) {
  res.render('waiting')
})

app.get('/films-H', function (req, res) {
  res.render('waiting')
})

app.get('/films-I', function (req, res) {
  res.render('waiting')
})

app.get('/films-J', function (req, res) {
  res.render('waiting')
})

app.get('/films-K', function (req, res) {
  res.render('waiting')
})

app.get('/films-L', function (req, res) {
  res.render('waiting')
})

app.get('/films-M', function (req, res) {
  res.render('waiting')
})

app.get('/films-N', function (req, res) {
  res.render('waiting')
})

app.get('/films-O', function (req, res) {
  res.render('waiting')
})

app.get('/films-P', function (req, res) {
  res.render('waiting')
})

app.get('/films-Q', function (req, res) {
  res.render('waiting')
})

app.get('/films-R', function (req, res) {
  res.render('waiting')
})

app.get('/films-S', function (req, res) {
  res.render('waiting')
})

app.get('/films-T', function (req, res) {
  res.render('waiting')
})

app.get('/films-U', function (req, res) {
  res.render('waiting')
})

app.get('/films-V', function (req, res) {
  res.render('waiting')
})

app.get('/films-W', function (req, res) {
  res.render('waiting')
})

app.get('/films-X', function (req, res) {
  res.render('waiting')
})

app.get('/films-Y', function (req, res) {
  res.render('waiting')
})

app.get('/films-Z', function (req, res) {
  res.render('waiting')
})




app.get("/KingdomofHeaven", function (req, res) {res.render("html_film_views/KingdomofHeaven")})


app.get("/Onward", function (req, res) {res.render("html_film_views/Onward")})


app.get("/StarWars", function (req, res) {res.render("html_film_views/StarWars")})


app.get("/TheAssassinationofJesseJamesbytheCowardRobertFord", function (req, res) {res.render("html_film_views/TheAssassinationofJesseJamesbytheCowardRobertFord")})

app.get("/1917", function (req, res) {res.render("html_film_views/1917")})


app.get("/ItChapterTwo", function (req, res) {res.render("html_film_views/ItChapterTwo")})
app.get("/TheDarjeelingLimited", function (req, res) {res.render("html_film_views/TheDarjeelingLimited")})

app.get("/TheGreatestShowman", function (req, res) {res.render("html_film_views/TheGreatestShowman")})




app.get("/TheHobbit:AnUnexpectedJourney", function (req, res) {res.render("html_film_views/TheHobbit:AnUnexpectedJourney")})
