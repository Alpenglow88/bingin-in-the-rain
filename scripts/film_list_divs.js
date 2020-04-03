const films = require('../films.json')
const fs = require('fs')
const numberOfFilms = films.length

function generateFilmGenres (indexValue) {
  const numberOfGenres = films[indexValue]['film']['numberOfGenres']
  const genres = films[indexValue]['film']['genres']

  let genreList = ''
  for (var x = 0; x < numberOfGenres; x++) {
    downcase = genres[x].toLowerCase()
    genreList += `<a> - </a>`
    genreList += '\n'
    genreList += `<a action="/genre-${downcase}" href="/genre-${downcase}">${genres[x]}</a>`
    genreList += '\n'
    genreList += `<a> - </a>`
    genreList += '\n'
  }
  return genreList
}

for (var i = 0; i < numberOfFilms; i++) {
  const filmTitle = films[i]['film']['title']
  const filmOverview = films[i]['film']['overview']
  const imageUrl = films[i]['film']['imageUrl']
  const imdbScore = films[i]['film']['imdbScore']
  const trailerLink = films[i]['film']['trailerLink']
  const original_language = films[i]['film']['original_language']
  const release_date = films[i]['film']['release_date']

  const initial = filmTitle.charAt(0);

  const genreList = generateFilmGenres(i)
  
  const htmlTitle = filmTitle.replace(/\s/g, '')

  let divText = `
   <div data_test_automation_id="film_container">
    <div class="container">
        <ul style="text-align:center;">
            <a target="_blank" href="${trailerLink}" <div style="text-align:center;"
                data_test_automation_id="film_one_image" Title="Click to view trailer"> <img alt="Image 1" width="300"
                    height="500" src="${imageUrl}" </div>
            </a>
        </ul>
    </div>

    <div class="container">
        <ul>
            <h2 style="text-align:center;" data_test_automation_id="film_title_one">${filmTitle}
            </h2>
            ${original_language}
            <p> </p>
        </ul>
    </div>

    <div class="container">

        ${genreList}
        <p> </p>
    </div>
</div>
<div class="container">
    <ul>
        <form action="/${htmlTitle}">
            <input type="submit" class="ghost-button" value="More Information" href="/${htmlTitle}">
        </form>
    </ul>
    <h2 style="text-align:center;" class="body-wide" <p>
        ------------------------------------------------------</p>
    </h2>
</div>
    `
  fs.appendFileSync('views/films.ejs', divText, function (err) {
    if (err) throw err
  })

if (isNaN(initial) === false)
fs.appendFile('views/alphabetical_views/number.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'A')
fs.appendFile('views/alphabetical_views/a.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'B')
fs.appendFile('views/alphabetical_views/b.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'C')
fs.appendFile('views/alphabetical_views/c.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'D')
fs.appendFile('views/alphabetical_views/d.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'E')
fs.appendFile('views/alphabetical_views/e.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'F')
fs.appendFile('views/alphabetical_views/f.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'G')
fs.appendFile('views/alphabetical_views/g.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'H')
fs.appendFile('views/alphabetical_views/h.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'I')
fs.appendFile('views/alphabetical_views/i.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'J')
fs.appendFile('views/alphabetical_views/j.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'K')
fs.appendFile('views/alphabetical_views/k.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'L')
fs.appendFile('views/alphabetical_views/l.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'M')
fs.appendFile('views/alphabetical_views/m.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'N')
fs.appendFile('views/alphabetical_views/n.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'O')
fs.appendFile('views/alphabetical_views/o.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'P')
fs.appendFile('views/alphabetical_views/p.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'Q')
fs.appendFile('views/alphabetical_views/q.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'R')
fs.appendFile('views/alphabetical_views/r.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'S')
fs.appendFile('views/alphabetical_views/s.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'T')
fs.appendFile('views/alphabetical_views/t.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'U')
fs.appendFile('views/alphabetical_views/u.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'V')
fs.appendFile('views/alphabetical_views/v.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'W')
fs.appendFile('views/alphabetical_views/w.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'X')
fs.appendFile('views/alphabetical_views/x.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'Y')
fs.appendFile('views/alphabetical_views/y.ejs', divText, function (err) {
  if (err) throw err
})

if (initial === 'Z')
fs.appendFile('views/alphabetical_views/z.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Action"))
fs.appendFile('views/genre_views/action.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Adventure"))
fs.appendFile('views/genre_views/adventure.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Animation"))
fs.appendFile('views/genre_views/animation.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Comedy"))
fs.appendFile('views/genre_views/comedy.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Crime"))
fs.appendFile('views/genre_views/crime.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Documentary"))
fs.appendFile('views/genre_views/documentary.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Drama"))
fs.appendFile('views/genre_views/drama.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Family"))
fs.appendFile('views/genre_views/family.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Fantasy"))
fs.appendFile('views/genre_views/fantasy.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("History"))
fs.appendFile('views/genre_views/history.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Horror"))
fs.appendFile('views/genre_views/horror.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Music"))
fs.appendFile('views/genre_views/music.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Mystery"))
fs.appendFile('views/genre_views/mystery.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Romance"))
fs.appendFile('views/genre_views/romance.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Science Fiction"))
fs.appendFile('views/genre_views/science-fiction.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Thriller"))
fs.appendFile('views/genre_views/thriller.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("War"))
fs.appendFile('views/genre_views/war.ejs', divText, function (err) {
  if (err) throw err
})

if (genreList.includes("Western"))
fs.appendFile('views/genre_views/western.ejs', divText, function (err) {
  if (err) throw err
})

}


