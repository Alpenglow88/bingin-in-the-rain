const films = require('../films.json')
const fs = require('fs')
const numberOfFilms = films.length

const bottomChunkText = `</main>
  <footer>
    <%- include("../partials/footer") %>
  </footer>
</body>

</html>
`

fs.appendFile('views/films.ejs', bottomChunkText, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/number.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/a.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/b.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/c.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/d.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/e.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/f.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/g.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/h.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/i.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/j.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/k.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/l.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/m.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/n.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/o.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/p.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/q.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/r.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/s.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/t.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/u.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/v.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/w.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/x.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/y.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/z.ejs', bottomChunkText, function (
  err
) {
  if (err) throw err
})
