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
</head>

<body>
`

fs.appendFile('views/films.ejs', topChunkText, function (err) {
  if (err) throw err;
  console.log('Top chunk text added');
});