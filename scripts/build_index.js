const randomFilmListingsRaw = require('.././randomFilmRouting.json')
const randomFilmListings = JSON.stringify(randomFilmListingsRaw)
const fs = require('fs')

localRandomFilm = "`http://localhost:3000/${randomFilm}`"
prodRandomFilm = "`https://rgcinema.herokuapp.com/${randomFilm}`"

indexHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Bingin in the rain</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <header class="header sticky sticky--top js-header">
      <div class="grid">
  
          <nav class="navigation">
              <ul class="navigation__list navigation__list--inline">
                  <li class="navigation__item"><a href="/" data_test_automation_id="header_home_button" class="is-active">Home</a></li>
                  <li class="navigation__item"><a href="/films" data_test_automation_id="header_screenings_button">Screenings</a></li>
                  <li class="navigation__item"><a href="/genres" data_test_automation_id="header_genres_button">Genres</a></li>
                  <li class="navigation__item"><a href="/random-film" data_test_automation_id="header_random_button">Random Film</a></li>
                  <li class="navigation__item"><a href="/film-request" data_test_automation_id="header_random_button">Request a Film</a></li>
              </ul>
              
          </nav>
          
      
      </div>  </header>
      
      <main>

    <div class="heading" data_test_automation_id="main_heading">
      <h1>Bingin' in the rain</h1>
      <p class="centre"> Welcome to the Rowley Gardens cinema</p>
    </div>


    <div class="container">
      <fieldset>
        <form action="/films">
          <input data_test_automation_id="enter_film_list_button" type="submit" class="ghost-button" value="Click for available screenings" href="/films">
        </form>
      </fieldset>
    </div>

    <div class="container">
      <br />
      Can't find what you want here? Have you tried Netflix, Disney+ or Amazon Prime?
      <br />
      <br />
    </div>

    <div class="container">
      <fieldset>
        <!-- <form action="/random-film"> -->
          <input data_test_automation_id="random_film_list_button" type="submit" class="ghost-button" onclick="randomFilm()" value="Not sure what to watch - try this?" href="/random-film">
          <!-- <input name="randomFilm" id="randomFilm"> -->
        </form>
      </fieldset>
    </div>
<script>

// var randomFilmRouting = require('.././randomFilmRouting.json')
var randomFilmRouting = ${randomFilmListings}


function randomFilm() {
  const randomFilm = randomFilmRouting[ Math.floor(Math.random() * randomFilmRouting.length) ]
  // window.open(${localRandomFilm})
  window.open(${prodRandomFilm})
}
</script>

    </div>

  </main>

  <footer>
    <%- include("./partials/footer") %>
  </footer>
  
  </body>
</html>`

// console.log(index_html)

fs.writeFile('./views/index.ejs', indexHtml, function (err) {
  if (err) throw err;
});