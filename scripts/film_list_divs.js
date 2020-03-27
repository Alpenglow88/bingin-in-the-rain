const films = require('../films.json')
const fs = require('fs');
const numberOfFilms = films.length

for (var i = 0; i < numberOfFilms; i++) {
  const filmTitle = films[i]['film']['title']
  const filmOverview = films[i]['film']['overview']
  const imageUrl = films[i]['film']['imageUrl']
  const imdbScore = films[i]['film']['imdbScore']
  const trailerLink = films[i]['film']['trailerLink']

  let divText = `
    <div data_test_automation_id="film_container">
        <div class="container">
            <ul style="text-align:center;">
                <a target="_blank" href="${trailerLink}"<div style="text-align:center;"
                    data_test_automation_id="film_one_image"> <img alt="Image 1" width="300" height="500"
                        src="${imageUrl}"</div>
                </a>
            </ul>
        </div>

        <div class="container">
            <ul>
                <h2 style="text-align:center;" data_test_automation_id="film_title_one">${filmTitle}
                </h2>
                <h3 style="text-align:center;" data_test_automation_id="film_title_one">IMdB score ${imdbScore}
                </h3>
            </ul>
        </div>

        <div class="body-wide" data_test_automation_id="film_overview_one" <p>${filmOverview}</p>
        </div>
    </div>
    `
fs.appendFileSync('views/films.ejs', divText, function (err) {
  if (err) throw err;
});
}
console.log(`Div text added`);
