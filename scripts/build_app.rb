# frozen_string_literal: true

app_main = "const PORT = process.env.PORT || 3000
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
"
File.delete('./app.js') if File.exist?('./app.js')

File.write('./app.js', app_main)
