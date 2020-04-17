const films = require('../films.json')
const fs = require('fs')
const numberOfFilms = films.length

function generateFilmGenres (indexValue) {
  const numberOfGenres = films[indexValue]['film']['numberOfGenres']
  const genres = films[indexValue]['film']['genres']

  let genreList = ''
  for (var x = 0; x < numberOfGenres; x++) {
    downcase = genres[x].toLowerCase()
if (genres[x] === "Science Fiction") {
    genreList += `<a> - </a>`
    genreList += '\n'
    genreList += `<a action="/genre-${downcase}" href="/genre-${downcase}">Science-Fiction</a>`
    genreList += '\n'
    genreList += `<a> - </a>`
    genreList += '\n'
} else {
    genreList += `<a> - </a>`
    genreList += '\n'
    genreList += `<a action="/genre-${downcase}" href="/genre-${downcase}">${genres[x]}</a>`
    genreList += '\n'
    genreList += `<a> - </a>`
    genreList += '\n'
}
  }
  return genreList
}

function generateFilmHtml(filmTitle, filmOverview, imageUrl, imdbScore, trailerLink, genreList, htmlTitle, original_language, release_date, director, watchOn, lead_actors, supporting_actors ) {
  let filmHtml = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Screenings</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>

<body>
    <header class="header sticky sticky--top js-header">
        <div class="grid">

            <nav class="navigation">
                <ul class="navigation__list navigation__list--inline">
                  <li class="navigation__item"><a href="/" data_test_automation_id="header_home_button">Home</a></li>
                  <li class="navigation__item"><a href="/films" data_test_automation_id="header_screenings_button" class="is-active">Screenings</a></li>
                  <li class="navigation__item"><a href="/genres" data_test_automation_id="header_genres_button">Genres</a></li>
                  <li class="navigation__item"><a href="/random-film" data_test_automation_id="header_random_button">Random Film</a></li>                  <li class="navigation__item"><a href="/film-request" data_test_automation_id="header_random_button">Request a Film</a></li>
                </ul>
            </nav>

        </div>
    </header>

    <main>
        <div class="heading" data_test_automation_id="main_heading">
            <h1>${filmTitle}</h1>
        </div>

        <div data_test_automation_id="film_container">
            <div class="container">
                <ul style="text-align:center;">
                    <a target="_blank" href="${trailerLink}" <div style="text-align:center;"
                        data_test_automation_id="film_one_image"> <img alt="Image 1" width="300" height="500"
                            src="${imageUrl}" </div>
                    </a>
                </ul>
            </div>

            <div class="container">
                <ul>
                    <h3 style="text-align:center;" data_test_automation_id="film_title_one">IMdB score ${imdbScore}
                    </h3>
                    <h4 style="text-align:center;" data_test_automation_id="film_title_one">Screening Room: ${watchOn}
                    </h4>
                    <p> </p>
                </ul>
            </div>

            <div class="container">

                ${genreList}
                <p> </p>
                </div>

            <h2 class="container" <p>Overview</p></h2>
            <div class="container" <p>${filmOverview}</p>
            </div>
            <h2 class="container" <p>Release Date</p></h2>
            <div class="container" <p>${release_date}</p>
            </div>
            <h2 class="container" <p>Languages</p></h2>
            <div class="container" <p>${original_language}</p>
            </div>
            <h2 class="container" <p>Director</p></h2>
            <div class="container" <p>${director}</p>
            </div>
            <h2 class="container" <p>Lead Actors</p></h2>
            <div class="container" <p>${lead_actors}</p>
            </div>
            <h2 class="container" <p>Supporting Actors</p></h2>
            <div class="container" <p>${supporting_actors}</p>

    </main>
      <footer>
    <%- include("../partials/footer") %>
  </footer>
</body>

</html>
  `

  return filmHtml
}

fs.appendFile('./htmlFilmList.json', "[", function (err) {
  if (err) throw err;
});

for (var i = 0; i < numberOfFilms; i++) {
  const filmTitle = films[i]['film']['title']
  const filmOverview = films[i]['film']['overview']
  const imageUrl = films[i]['film']['imageUrl']
  const imdbScore = films[i]['film']['imdbScore']
  const trailerLink = films[i]['film']['trailerLink']
  const original_language = films[i]['film']['original_language']
  const release_date = films[i]['film']['release_date']
  const director = films[i]['film']['director']
  const watchOn = films[i]['film']['watchOn']
  const lead_actors = films[i]['film']['lead_actors']
  const supporting_actors = films[i]['film']['supporting_actors']

  const genreList = generateFilmGenres(i)

const htmlTitle = filmTitle.replace(/\s/g, '')

fs.writeFile(`./views/html_film_views/${htmlTitle}.ejs`, generateFilmHtml(filmTitle, filmOverview, imageUrl, imdbScore, trailerLink, genreList, htmlTitle, original_language, release_date, director, watchOn, lead_actors, supporting_actors), function (err) {
  if (err) throw err;
});

const filmRoute = `app.get("/${htmlTitle}", function (req, res) {res.render("html_film_views/${htmlTitle}", { version: version })})
`

fs.appendFile('./app.js', "\n", function (err) {
  if (err) throw err;
});

fs.appendFile('./app.js', filmRoute, function (err) {
  if (err) throw err;
});

fs.appendFile('./app.js', "\n", function (err) {
  if (err) throw err;
});

}