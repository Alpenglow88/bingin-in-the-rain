const films = require('./films.json')
const fs = require('fs')
const numberOfFilms = films.length

function generateFilmGenres (indexValue) {
  const numberOfGenres = films[indexValue]['film']['numberOfGenres']
  const genres = films[indexValue]['film']['genres']

  let genreList = ''
  for (var x = 0; x < numberOfGenres; x++) {
    genreList += `<a> - </a>`
    genreList += '\n'
    genreList += `<a>${genres[x]}</a>`
    genreList += '\n'
    genreList += `<a> - </a>`
    genreList += '\n'
  }
  return genreList
}

function generateFilmHtml(filmTitle, filmOverview, imageUrl, imdbScore, trailerLink, genreList ) {
  let filmHtml = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Bingin' Film List</title>
    <link rel="stylesheet" type="text/css" href="/css/film_list_style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>

    <div class="heading" data_test_automation_id="main_heading">
        <h1>Why not check out...?</h1>
    </div>
</head>

<body>
   <div data_test_automation_id="film_container">
    <div class="container">
        <ul style="text-align:center;">
            <a target="_blank" href="${trailerLink}" <div style="text-align:center;"
                data_test_automation_id="film_one_image"> <img alt="Image 1" width="300" height="500" src="${imageUrl}"
                    </div>
            </a>
        </ul>
    </div>

    <div class="container">
        <ul>
            <h2 style="text-align:center;" data_test_automation_id="film_title_one">${filmTitle}
            </h2>
            <p> </p>
            <h3 style="text-align:center;" data_test_automation_id="film_title_one">IMdB score ${imdbScore}
            </h3>
            <p> </p>
        </ul>
    </div>

    <div class="container">

        ${genreList}
        <p> </p>
    </div>

    <div class="body-wide" data_test_automation_id="film_overview_one" <p>${filmOverview}</p>
    </div>
</div>
<div=class="container">
    <h1 class="body-wide" data_test_automation_id="film_overview_one" <p>
        ------------------------------------------------------</p>
    </h1>
    </div>
    </body>

</html>
  `

  return filmHtml
}

for (var i = 0; i < numberOfFilms; i++) {
  const filmTitle = films[i]['film']['title']
  const filmOverview = films[i]['film']['overview']
  const imageUrl = films[i]['film']['imageUrl']
  const imdbScore = films[i]['film']['imdbScore']
  const trailerLink = films[i]['film']['trailerLink']

  const genreList = generateFilmGenres(i)

fs.writeFile(`views/html_film_views/${filmTitle}.ejs`, generateFilmHtml(filmTitle, filmOverview, imageUrl, imdbScore, trailerLink, genreList), function (err) {
  if (err) throw err;
});
}
