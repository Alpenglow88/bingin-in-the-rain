const randomFilmListingsRaw = require('.././randomFilmRouting.json')
const randomFilmListings = JSON.stringify(randomFilmListingsRaw)
const fs = require('fs')

localRandomFilm = "`http://localhost:3000/${randomFilm}`"
prodRandomFilm = "`https://rgcinema.herokuapp.com/${randomFilm}`"

randomFilmHtml = `<!DOCTYPE html>
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
                  <li class="navigation__item"><a href="/" data_test_automation_id="header_home_button">Home</a></li>
                  <li class="navigation__item"><a href="/films" data_test_automation_id="header_screenings_button">Screenings</a></li>
                  <li class="navigation__item"><a href="/genres" data_test_automation_id="header_genres_button">Genres</a></li>
                  <li class="navigation__item"><a href="/random-film" data_test_automation_id="header_random_button" class="is-active">Random Film</a></li>
                  <li class="navigation__item"><a href="/film-request" data_test_automation_id="header_random_button">Request a Film</a></li>
              </ul>
          </nav>
          
      
      </div>  </header>
      
      <main>

    <div class="heading" data_test_automation_id="main_heading">
      <p class="centre"> Can't choose what to watch? Let us suggest something...</p>
    </div>


    <div class="container">
      <br />
      Click the button below to open a new tab with a randomly suggested film
      <br />
      <br />
    </div>

    <div class="container">
      <fieldset>
          <input data_test_automation_id="random_film_list_button" type="submit" class="ghost-button" onclick="randomFilm()" value="Random Film Please" href="/random-film">
        </form>
      </fieldset>
    </div>

<script>

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

fs.writeFile('./views/random-film.ejs', randomFilmHtml, function (err) {
  if (err) throw err;
});