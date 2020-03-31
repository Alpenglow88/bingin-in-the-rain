const films = require('../films.json')
const fs = require('fs');
const numberOfFilms = films.length

const path = './views/films.ejs'

try {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
  }
} catch(err) {
  console.error(err)
}

const topChunkText =`<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Bingin' Film List</title>
    <link rel="stylesheet" type="text/css" href="/css/film_list_style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>

    <div class="heading" data_test_automation_id="main_heading">
        <h1>Available Screenings</h1>
    </div>
    <div class="container">
        <a>#</a>
        <a> - </a>
        <a>A</a>
        <a> - </a>
        <a>B</a>
        <a> - </a>
        <a>C</a>
        <a> - </a>
        <a>D</a>
        <a> - </a>
        <a>E</a>
        <a> - </a>
        <a>F</a>
        <a> - </a>
        <a>G</a>
        <a> - </a>
        <a>H</a>
        <a> - </a>
        <a>I</a>
        <a> - </a>
        <a>J</a>
        <a> - </a>
        <a>K</a>
        <a> - </a>
        <a>L</a>
        <a> - </a>
        <a>M</a>
        <a> - </a>
        <a>N</a>
        <a> - </a>
        <a>O</a>
        <a> - </a>
        <a>P</a>
        <a> - </a>
        <a>Q</a>
        <a> - </a>
        <a>R</a>
        <a> - </a>
        <a>S</a>
        <a> - </a>
        <a>T</a>
        <a> - </a>
        <a>U</a>
        <a> - </a>
        <a>V</a>
        <a> - </a>
        <a>W</a>
        <a> - </a>
        <a>X</a>
        <a> - </a>
        <a>Y</a>
        <a> - </a>
        <a>Z</a>
    </div>
</head>

<body>
<main>
`

fs.appendFile('views/films.ejs', topChunkText, function (err) {
  if (err) throw err;
  console.log('Top chunk text added');
});