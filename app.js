const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const films = require('./films.json')
const randomFilm = films[ Math.floor(Math.random() * films.length) ]
const randomFilmTitle= randomFilm['film']['title']
const package = require('./package.json')
const version = package.version

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view cache', false);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})

app.get('/', function (req, res) {
  res.render('index', { version: version })
})

app.get('/films', function (req, res) {
  res.render('films', { version: version })
})

app.get('/random-film', function (req, res) {
  res.render('waiting', { version: version })
  // res.render(`html_film_views/${randomFilmTitle}`, { version: version })
})

app.get('/waiting', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-number', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-A', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-B', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-C', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-D', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-E', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-F', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-G', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-H', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-I', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-J', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-K', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-L', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-M', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-N', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-O', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-P', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-Q', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-R', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-S', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-T', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-U', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-V', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-W', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-X', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-Y', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-Z', function (req, res) {
  res.render('waiting', { version: version })
})

app.get("/1917", function (req, res) {res.render("html_film_views/1917", { version: version })})


app.get("/ItChapterTwo", function (req, res) {res.render("html_film_views/ItChapterTwo", { version: version })})

app.get("/JurassicWorld", function (req, res) {res.render("html_film_views/JurassicWorld", { version: version })})



app.get("/KingdomofHeaven", function (req, res) {res.render("html_film_views/KingdomofHeaven", { version: version })})


app.get("/Onward", function (req, res) {res.render("html_film_views/Onward", { version: version })})


app.get("/StarWars", function (req, res) {res.render("html_film_views/StarWars", { version: version })})


app.get("/TheAssassinationofJesseJamesbytheCowardRobertFord", function (req, res) {res.render("html_film_views/TheAssassinationofJesseJamesbytheCowardRobertFord", { version: version })})


app.get("/TheDarjeelingLimited", function (req, res) {res.render("html_film_views/TheDarjeelingLimited", { version: version })})


app.get("/TheGreatestShowman", function (req, res) {res.render("html_film_views/TheGreatestShowman", { version: version })})


app.get("/TheHobbit:AnUnexpectedJourney", function (req, res) {res.render("html_film_views/TheHobbit:AnUnexpectedJourney", { version: version })})



app.get("/JurassicWorld:FallenKingdom", function (req, res) {res.render("html_film_views/JurassicWorld:FallenKingdom", { version: version })})
