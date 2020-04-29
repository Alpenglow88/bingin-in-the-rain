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

app.get('/genres', function (req, res) {
  res.render('genres', { version: version })
})

app.get('/random-film', function (req, res) {
  res.render('random-film', { version: version })
})

app.get('/waiting', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/report-bug', function (req, res) {
  res.render('report-bug', { version: version })
})

app.get('/film-request', function (req, res) {
  res.render('film-request', { version: version })
})

app.get('/films-number', function (req, res) {
  res.render('alphabetical_views/number', { version: version })
})

app.get('/films-A', function (req, res) {
  res.render('alphabetical_views/a', { version: version })
})

app.get('/films-B', function (req, res) {
  res.render('alphabetical_views/b', { version: version })
})

app.get('/films-C', function (req, res) {
  res.render('alphabetical_views/c', { version: version })
})

app.get('/films-D', function (req, res) {
  res.render('alphabetical_views/d', { version: version })
})

app.get('/films-E', function (req, res) {
  res.render('alphabetical_views/e', { version: version })
})

app.get('/films-F', function (req, res) {
  res.render('alphabetical_views/f', { version: version })
})

app.get('/films-G', function (req, res) {
  res.render('alphabetical_views/g', { version: version })
})

app.get('/films-H', function (req, res) {
  res.render('alphabetical_views/h', { version: version })
})

app.get('/films-I', function (req, res) {
  res.render('alphabetical_views/i', { version: version })
})

app.get('/films-J', function (req, res) {
  res.render('alphabetical_views/j', { version: version })
})

app.get('/films-K', function (req, res) {
  res.render('alphabetical_views/k', { version: version })
})

app.get('/films-L', function (req, res) {
  res.render('alphabetical_views/l', { version: version })
})

app.get('/films-M', function (req, res) {
  res.render('alphabetical_views/m', { version: version })
})

app.get('/films-N', function (req, res) {
  res.render('alphabetical_views/n', { version: version })
})

app.get('/films-O', function (req, res) {
  res.render('alphabetical_views/o', { version: version })
})

app.get('/films-P', function (req, res) {
  res.render('alphabetical_views/p', { version: version })
})

app.get('/films-Q', function (req, res) {
  res.render('alphabetical_views/q', { version: version })
})

app.get('/films-R', function (req, res) {
  res.render('alphabetical_views/r', { version: version })
})

app.get('/films-S', function (req, res) {
  res.render('alphabetical_views/s', { version: version })
})

app.get('/films-T', function (req, res) {
  res.render('alphabetical_views/t', { version: version })
})

app.get('/films-U', function (req, res) {
  res.render('alphabetical_views/u', { version: version })
})

app.get('/films-V', function (req, res) {
  res.render('alphabetical_views/v', { version: version })
})

app.get('/films-W', function (req, res) {
  res.render('alphabetical_views/w', { version: version })
})

app.get('/films-X', function (req, res) {
  res.render('alphabetical_views/x', { version: version })
})

app.get('/films-Y', function (req, res) {
  res.render('alphabetical_views/y', { version: version })
})

app.get('/films-Z', function (req, res) {
  res.render('alphabetical_views/z', { version: version })
})

app.get('/genre-action', function (req, res) {
  res.render('genre_views/action', { version: version })
})

app.get('/genre-adventure', function (req, res) {
  res.render('genre_views/adventure', { version: version })
})

app.get('/genre-animation', function (req, res) {
  res.render('genre_views/animation', { version: version })
})

app.get('/genre-comedy', function (req, res) {
  res.render('genre_views/comedy', { version: version })
})

app.get('/genre-crime', function (req, res) {
  res.render('genre_views/crime', { version: version })
})

app.get('/genre-documentary', function (req, res) {
  res.render('genre_views/documentary', { version: version })
})

app.get('/genre-drama', function (req, res) {
  res.render('genre_views/drama', { version: version })
})

app.get('/genre-family', function (req, res) {
  res.render('genre_views/family', { version: version })
})

app.get('/genre-fantasy', function (req, res) {
  res.render('genre_views/fantasy', { version: version })
})

app.get('/genre-history', function (req, res) {
  res.render('genre_views/history', { version: version })
})

app.get('/genre-horror', function (req, res) {
  res.render('genre_views/horror', { version: version })
})

app.get('/genre-music', function (req, res) {
  res.render('genre_views/music', { version: version })
})

app.get('/genre-mystery', function (req, res) {
  res.render('genre_views/mystery', { version: version })
})

app.get('/genre-romance', function (req, res) {
  res.render('genre_views/romance', { version: version })
})

app.get('/genre-science-fiction', function (req, res) {
  res.render('genre_views/science-fiction', { version: version })
})

app.get('/genre-thriller', function (req, res) {
  res.render('genre_views/thriller', { version: version })
})

app.get('/genre-war', function (req, res) {
  res.render('genre_views/war', { version: version })
})

app.get('/genre-western', function (req, res) {
  res.render('genre_views/western', { version: version })
})


app.get("/1917", function (req, res) {res.render("html_film_views/1917", { version: version })})

app.get("/Apocalypto", function (req, res) {res.render("html_film_views/Apocalypto", { version: version })})
app.get("/Angel-A", function (req, res) {res.render("html_film_views/Angel-A", { version: version })})


app.get("/Gankutsuou:TheCountofMonteCristo", function (req, res) {res.render("html_film_views/Gankutsuou:TheCountofMonteCristo", { version: version })})


app.get("/Parasite", function (req, res) {res.render("html_film_views/Parasite", { version: version })})



app.get("/GoodnightMommy", function (req, res) {res.render("html_film_views/GoodnightMommy", { version: version })})






app.get("/JurassicWorld", function (req, res) {res.render("html_film_views/JurassicWorld", { version: version })})



app.get("/Kesari", function (req, res) {res.render("html_film_views/Kesari", { version: version })})


app.get("/KingdomofHeaven", function (req, res) {res.render("html_film_views/KingdomofHeaven", { version: version })})

app.get("/JurassicWorld:FallenKingdom", function (req, res) {res.render("html_film_views/JurassicWorld:FallenKingdom", { version: version })})
app.get("/Onward", function (req, res) {res.render("html_film_views/Onward", { version: version })})


app.get("/ItChapterTwo", function (req, res) {res.render("html_film_views/ItChapterTwo", { version: version })})


app.get("/TeAta", function (req, res) {res.render("html_film_views/TeAta", { version: version })})


app.get("/TheAssassinationofJesseJamesbytheCowardRobertFord", function (req, res) {res.render("html_film_views/TheAssassinationofJesseJamesbytheCowardRobertFord", { version: version })})


app.get("/TheBreadwinner", function (req, res) {res.render("html_film_views/TheBreadwinner", { version: version })})


app.get("/TheDarjeelingLimited", function (req, res) {res.render("html_film_views/TheDarjeelingLimited", { version: version })})


app.get("/TheGreatestShowman", function (req, res) {res.render("html_film_views/TheGreatestShowman", { version: version })})


app.get("/StarWars", function (req, res) {res.render("html_film_views/StarWars", { version: version })})

app.get("/TheHobbit:AnUnexpectedJourney", function (req, res) {res.render("html_film_views/TheHobbit:AnUnexpectedJourney", { version: version })})

