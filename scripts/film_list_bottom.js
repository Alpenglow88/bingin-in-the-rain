const films = require('../films.json')
const fs = require('fs');
const numberOfFilms = films.length


const bottomChunkText =`</main>
  <footer>
    <%- include("./partials/footer") %>
  </footer>
</body>

</html>
`

fs.appendFile('views/films.ejs', bottomChunkText, function (err) {
  if (err) throw err;
  console.log('Bottom chunk text added');
});