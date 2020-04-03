const films = require('../films.json')
const fs = require('fs')
const numberOfFilms = films.length

const bottomChunkText = `</main>
  <footer>
    <%- include("./partials/footer") %>
  </footer>
</body>

</html>
`

const alphabeticalBottomChunkText = `</main>
  <footer>
    <%- include("../partials/footer") %>
  </footer>
</body>

</html>
`

fs.appendFile('views/films.ejs', bottomChunkText, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/number.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/a.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/b.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/c.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/d.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/e.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/f.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/g.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/h.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/i.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/j.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/k.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/l.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/m.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/n.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/o.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/p.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/q.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/r.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/s.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/t.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/u.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/v.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/w.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/x.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/y.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/z.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/action.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/adventure.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/animation.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/comedy.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/crime.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/documentary.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/drama.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/family.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/fantasy.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/history.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/horror.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/music.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/mystery.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/romance.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/science-fiction.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/thriller.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/war.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/genre_views/western.ejs', alphabeticalBottomChunkText, function (
  err
) {
  if (err) throw err
})
