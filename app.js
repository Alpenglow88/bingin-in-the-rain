const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const films = require('./films.json');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/films', function (req, res) {
  res.render('films');
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})