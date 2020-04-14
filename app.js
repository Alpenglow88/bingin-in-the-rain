const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const films = require('./films.json')
const randomFilm = films[ Math.floor(Math.random() * films.length) ]
const randomFilmTitle= randomFilm['film']['title']
const package = require('./package.json')
const version = package.version

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view cache', false);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})

app.get('/', function (req, res) {
  res.render('index', { version: version })
})

app.get('/films', function (req, res) {
  res.render('films', { version: version })
})

app.get('/genres', function (req, res) {
  res.render('genres', { version: version })
})

app.get('/random-film', function (req, res) {
  res.render('waiting', { version: version })
  // res.render(`html_film_views/${randomFilmTitle}`, { version: version })
})

app.get('/waiting', function (req, res) {
  res.render('waiting', { version: version })
})

app.get('/films-number', function (req, res) {
  res.render('alphabetical_views/number', { version: version })
})

app.get('/films-A', function (req, res) {
  res.render('alphabetical_views/a', { version: version })
})

app.get('/films-B', function (req, res) {
  res.render('alphabetical_views/b', { version: version })
})

app.get('/films-C', function (req, res) {
  res.render('alphabetical_views/c', { version: version })
})

app.get('/films-D', function (req, res) {
  res.render('alphabetical_views/d', { version: version })
})

app.get('/films-E', function (req, res) {
  res.render('alphabetical_views/e', { version: version })
})

app.get('/films-F', function (req, res) {
  res.render('alphabetical_views/f', { version: version })
})

app.get('/films-G', function (req, res) {
  res.render('alphabetical_views/g', { version: version })
})

app.get('/films-H', function (req, res) {
  res.render('alphabetical_views/h', { version: version })
})

app.get('/films-I', function (req, res) {
  res.render('alphabetical_views/i', { version: version })
})

app.get('/films-J', function (req, res) {
  res.render('alphabetical_views/j', { version: version })
})

app.get('/films-K', function (req, res) {
  res.render('alphabetical_views/k', { version: version })
})

app.get('/films-L', function (req, res) {
  res.render('alphabetical_views/l', { version: version })
})

app.get('/films-M', function (req, res) {
  res.render('alphabetical_views/m', { version: version })
})

app.get('/films-N', function (req, res) {
  res.render('alphabetical_views/n', { version: version })
})

app.get('/films-O', function (req, res) {
  res.render('alphabetical_views/o', { version: version })
})

app.get('/films-P', function (req, res) {
  res.render('alphabetical_views/p', { version: version })
})

app.get('/films-Q', function (req, res) {
  res.render('alphabetical_views/q', { version: version })
})

app.get('/films-R', function (req, res) {
  res.render('alphabetical_views/r', { version: version })
})

app.get('/films-S', function (req, res) {
  res.render('alphabetical_views/s', { version: version })
})

app.get('/films-T', function (req, res) {
  res.render('alphabetical_views/t', { version: version })
})

app.get('/films-U', function (req, res) {
  res.render('alphabetical_views/u', { version: version })
})

app.get('/films-V', function (req, res) {
  res.render('alphabetical_views/v', { version: version })
})

app.get('/films-W', function (req, res) {
  res.render('alphabetical_views/w', { version: version })
})

app.get('/films-X', function (req, res) {
  res.render('alphabetical_views/x', { version: version })
})

app.get('/films-Y', function (req, res) {
  res.render('alphabetical_views/y', { version: version })
})

app.get('/films-Z', function (req, res) {
  res.render('alphabetical_views/z', { version: version })
})

app.get('/genre-action', function (req, res) {
  res.render('genre_views/action', { version: version })
})

app.get('/genre-adventure', function (req, res) {
  res.render('genre_views/adventure', { version: version })
})

app.get('/genre-animation', function (req, res) {
  res.render('genre_views/animation', { version: version })
})

app.get('/genre-comedy', function (req, res) {
  res.render('genre_views/comedy', { version: version })
})

app.get('/genre-crime', function (req, res) {
  res.render('genre_views/crime', { version: version })
})

app.get('/genre-documentary', function (req, res) {
  res.render('genre_views/documentary', { version: version })
})

app.get('/genre-drama', function (req, res) {
  res.render('genre_views/drama', { version: version })
})

app.get('/genre-family', function (req, res) {
  res.render('genre_views/family', { version: version })
})

app.get('/genre-fantasy', function (req, res) {
  res.render('genre_views/fantasy', { version: version })
})

app.get('/genre-history', function (req, res) {
  res.render('genre_views/history', { version: version })
})

app.get('/genre-horror', function (req, res) {
  res.render('genre_views/horror', { version: version })
})

app.get('/genre-music', function (req, res) {
  res.render('genre_views/music', { version: version })
})

app.get('/genre-mystery', function (req, res) {
  res.render('genre_views/mystery', { version: version })
})

app.get('/genre-romance', function (req, res) {
  res.render('genre_views/romance', { version: version })
})

app.get('/genre-science-fiction', function (req, res) {
  res.render('genre_views/science-fiction', { version: version })
})

app.get('/genre-thriller', function (req, res) {
  res.render('genre_views/thriller', { version: version })
})

app.get('/genre-war', function (req, res) {
  res.render('genre_views/war', { version: version })
})

app.get('/genre-western', function (req, res) {
  res.render('genre_views/western', { version: version })
})

app.get("/1917", function (req, res) {res.render("html_film_views/1917", { version: version })})


app.get("/28DaysLater", function (req, res) {res.render("html_film_views/28DaysLater", { version: version })})


app.get("/303", function (req, res) {res.render("html_film_views/303", { version: version })})


app.get("/7DaysinEntebbe", function (req, res) {res.render("html_film_views/7DaysinEntebbe", { version: version })})


app.get("/ACureforWellness", function (req, res) {res.render("html_film_views/ACureforWellness", { version: version })})


app.get("/AHistoryofViolence", function (req, res) {res.render("html_film_views/AHistoryofViolence", { version: version })})


app.get("/AQuietPlace", function (req, res) {res.render("html_film_views/AQuietPlace", { version: version })})


app.get("/Abominable", function (req, res) {res.render("html_film_views/Abominable", { version: version })})


app.get("/Alien", function (req, res) {res.render("html_film_views/Alien", { version: version })})


app.get("/Alien:Covenant", function (req, res) {res.render("html_film_views/Alien:Covenant", { version: version })})


app.get("/Alien³", function (req, res) {res.render("html_film_views/Alien³", { version: version })})


app.get("/Aliens", function (req, res) {res.render("html_film_views/Aliens", { version: version })})


app.get("/Allied", function (req, res) {res.render("html_film_views/Allied", { version: version })})



app.get("/AlongwiththeGods:TheTwoWorlds", function (req, res) {res.render("html_film_views/AlongwiththeGods:TheTwoWorlds", { version: version })})

app.get("/Anomalisa", function (req, res) {res.render("html_film_views/Anomalisa", { version: version })})


app.get("/Anthropoid", function (req, res) {res.render("html_film_views/Anthropoid", { version: version })})


app.get("/ApocalypseNow", function (req, res) {res.render("html_film_views/ApocalypseNow", { version: version })})


app.get("/Apollo11", function (req, res) {res.render("html_film_views/Apollo11", { version: version })})


app.get("/Arctic", function (req, res) {res.render("html_film_views/Arctic", { version: version })})

app.get("/Arrival", function (req, res) {res.render("html_film_views/Arrival", { version: version })})



app.get("/BartonFink", function (req, res) {res.render("html_film_views/BartonFink", { version: version })})


app.get("/BigHero6", function (req, res) {res.render("html_film_views/BigHero6", { version: version })})


app.get("/BirdsofPrey(andtheFantabulousEmancipationofOneHarleyQuinn)", function (req, res) {res.render("html_film_views/BirdsofPrey(andtheFantabulousEmancipationofOneHarleyQuinn)", { version: version })})


app.get("/BlacKkKlansman", function (req, res) {res.render("html_film_views/BlacKkKlansman", { version: version })})


app.get("/BlackHawkDown", function (req, res) {res.render("html_film_views/BlackHawkDown", { version: version })})


app.get("/BlackSwan", function (req, res) {res.render("html_film_views/BlackSwan", { version: version })})


app.get("/BladeRunner", function (req, res) {res.render("html_film_views/BladeRunner", { version: version })})


app.get("/BladeRunner2049", function (req, res) {res.render("html_film_views/BladeRunner2049", { version: version })})


app.get("/BlueMyMind", function (req, res) {res.render("html_film_views/BlueMyMind", { version: version })})


app.get("/BoneTomahawk", function (req, res) {res.render("html_film_views/BoneTomahawk", { version: version })})


app.get("/Boyhood", function (req, res) {res.render("html_film_views/Boyhood", { version: version })})


app.get("/BurnAfterReading", function (req, res) {res.render("html_film_views/BurnAfterReading", { version: version })})


app.get("/Calvary", function (req, res) {res.render("html_film_views/Calvary", { version: version })})


app.get("/CaptainFantastic", function (req, res) {res.render("html_film_views/CaptainFantastic", { version: version })})


app.get("/Casablanca", function (req, res) {res.render("html_film_views/Casablanca", { version: version })})


app.get("/CasinoRoyale", function (req, res) {res.render("html_film_views/CasinoRoyale", { version: version })})


app.get("/CloudywithaChanceofMeatballs", function (req, res) {res.render("html_film_views/CloudywithaChanceofMeatballs", { version: version })})


app.get("/CloudywithaChanceofMeatballs2", function (req, res) {res.render("html_film_views/CloudywithaChanceofMeatballs2", { version: version })})


app.get("/ComeAsYouAre", function (req, res) {res.render("html_film_views/ComeAsYouAre", { version: version })})


app.get("/ConfessionsofaDangerousMind", function (req, res) {res.render("html_film_views/ConfessionsofaDangerousMind", { version: version })})


app.get("/DarkPhoenix", function (req, res) {res.render("html_film_views/DarkPhoenix", { version: version })})


app.get("/DarkWaters", function (req, res) {res.render("html_film_views/DarkWaters", { version: version })})


app.get("/DawnoftheDead", function (req, res) {res.render("html_film_views/DawnoftheDead", { version: version })})


app.get("/DayoftheDead", function (req, res) {res.render("html_film_views/DayoftheDead", { version: version })})


app.get("/DeadMan'sShoes", function (req, res) {res.render("html_film_views/DeadMan'sShoes", { version: version })})


app.get("/Deadpool", function (req, res) {res.render("html_film_views/Deadpool", { version: version })})


app.get("/Deadpool2", function (req, res) {res.render("html_film_views/Deadpool2", { version: version })})


app.get("/Deadwood:TheMovie", function (req, res) {res.render("html_film_views/Deadwood:TheMovie", { version: version })})


app.get("/Delinquent", function (req, res) {res.render("html_film_views/Delinquent", { version: version })})


app.get("/DespicableMe2", function (req, res) {res.render("html_film_views/DespicableMe2", { version: version })})


app.get("/DespicableMe3", function (req, res) {res.render("html_film_views/DespicableMe3", { version: version })})


app.get("/Don'tCallMeBigfoot", function (req, res) {res.render("html_film_views/Don'tCallMeBigfoot", { version: version })})


app.get("/Don'tWorry,HeWon'tGetFaronFoot", function (req, res) {res.render("html_film_views/Don'tWorry,HeWon'tGetFaronFoot", { version: version })})


app.get("/Downsizing", function (req, res) {res.render("html_film_views/Downsizing", { version: version })})


app.get("/EasternPromises", function (req, res) {res.render("html_film_views/EasternPromises", { version: version })})


app.get("/EscapefromPretoria", function (req, res) {res.render("html_film_views/EscapefromPretoria", { version: version })})


app.get("/EvilDeadII", function (req, res) {res.render("html_film_views/EvilDeadII", { version: version })})


app.get("/ExMachina", function (req, res) {res.render("html_film_views/ExMachina", { version: version })})


app.get("/Excalibur", function (req, res) {res.render("html_film_views/Excalibur", { version: version })})


app.get("/ExtremelyWicked,ShockinglyEvilandVile", function (req, res) {res.render("html_film_views/ExtremelyWicked,ShockinglyEvilandVile", { version: version })})


app.get("/FantasticBeastsandWheretoFindThem", function (req, res) {res.render("html_film_views/FantasticBeastsandWheretoFindThem", { version: version })})


app.get("/FantasticBeasts:TheCrimesofGrindelwald", function (req, res) {res.render("html_film_views/FantasticBeasts:TheCrimesofGrindelwald", { version: version })})


app.get("/Fences", function (req, res) {res.render("html_film_views/Fences", { version: version })})


app.get("/FightClub", function (req, res) {res.render("html_film_views/FightClub", { version: version })})


app.get("/FirstMan", function (req, res) {res.render("html_film_views/FirstMan", { version: version })})


app.get("/FreeSolo", function (req, res) {res.render("html_film_views/FreeSolo", { version: version })})


app.get("/FreeStateofJones", function (req, res) {res.render("html_film_views/FreeStateofJones", { version: version })})


app.get("/GalaxyQuest", function (req, res) {res.render("html_film_views/GalaxyQuest", { version: version })})


app.get("/GardenState", function (req, res) {res.render("html_film_views/GardenState", { version: version })})


app.get("/Gattaca", function (req, res) {res.render("html_film_views/Gattaca", { version: version })})


app.get("/GetOut", function (req, res) {res.render("html_film_views/GetOut", { version: version })})


app.get("/Gifted", function (req, res) {res.render("html_film_views/Gifted", { version: version })})


app.get("/Gladiator", function (req, res) {res.render("html_film_views/Gladiator", { version: version })})


app.get("/Glass", function (req, res) {res.render("html_film_views/Glass", { version: version })})


app.get("/God'sOwnCountry", function (req, res) {res.render("html_film_views/God'sOwnCountry", { version: version })})


app.get("/GreenBook", function (req, res) {res.render("html_film_views/GreenBook", { version: version })})


app.get("/Gremlins", function (req, res) {res.render("html_film_views/Gremlins", { version: version })})


app.get("/GunsAkimbo", function (req, res) {res.render("html_film_views/GunsAkimbo", { version: version })})


app.get("/HacksawRidge", function (req, res) {res.render("html_film_views/HacksawRidge", { version: version })})


app.get("/Hail,Caesar!", function (req, res) {res.render("html_film_views/Hail,Caesar!", { version: version })})


app.get("/HarryPotterandtheDeathlyHallows:Part2", function (req, res) {res.render("html_film_views/HarryPotterandtheDeathlyHallows:Part2", { version: version })})


app.get("/HarryPotterandtheChamberofSecrets", function (req, res) {res.render("html_film_views/HarryPotterandtheChamberofSecrets", { version: version })})


app.get("/HarryPotterandtheDeathlyHallows:Part1", function (req, res) {res.render("html_film_views/HarryPotterandtheDeathlyHallows:Part1", { version: version })})


app.get("/HarryPotterandtheGobletofFire", function (req, res) {res.render("html_film_views/HarryPotterandtheGobletofFire", { version: version })})


app.get("/HarryPotterandtheHalf-BloodPrince", function (req, res) {res.render("html_film_views/HarryPotterandtheHalf-BloodPrince", { version: version })})


app.get("/HarryPotterandtheOrderofthePhoenix", function (req, res) {res.render("html_film_views/HarryPotterandtheOrderofthePhoenix", { version: version })})


app.get("/HarryPotterandthePrisonerofAzkaban", function (req, res) {res.render("html_film_views/HarryPotterandthePrisonerofAzkaban", { version: version })})


app.get("/HarryPotterandthePhilosopher'sStone", function (req, res) {res.render("html_film_views/HarryPotterandthePhilosopher'sStone", { version: version })})

app.get("/Harvey", function (req, res) {res.render("html_film_views/Harvey", { version: version })})



app.get("/He'sOutThere", function (req, res) {res.render("html_film_views/He'sOutThere", { version: version })})


app.get("/HellorHighWater", function (req, res) {res.render("html_film_views/HellorHighWater", { version: version })})


app.get("/Her", function (req, res) {res.render("html_film_views/Her", { version: version })})


app.get("/HiddenFigures", function (req, res) {res.render("html_film_views/HiddenFigures", { version: version })})


app.get("/HighLife", function (req, res) {res.render("html_film_views/HighLife", { version: version })})


app.get("/HotelRwanda", function (req, res) {res.render("html_film_views/HotelRwanda", { version: version })})


app.get("/Houseof1000Corpses", function (req, res) {res.render("html_film_views/Houseof1000Corpses", { version: version })})


app.get("/HowtoTrainYourDragon", function (req, res) {res.render("html_film_views/HowtoTrainYourDragon", { version: version })})


app.get("/HowtoTrainYourDragon2", function (req, res) {res.render("html_film_views/HowtoTrainYourDragon2", { version: version })})


app.get("/HuntfortheWilderpeople", function (req, res) {res.render("html_film_views/HuntfortheWilderpeople", { version: version })})


app.get("/IAmNotaSerialKiller", function (req, res) {res.render("html_film_views/IAmNotaSerialKiller", { version: version })})


app.get("/IAmNotaWitch", function (req, res) {res.render("html_film_views/IAmNotaWitch", { version: version })})


app.get("/I,DanielBlake", function (req, res) {res.render("html_film_views/I,DanielBlake", { version: version })})


app.get("/IKillGiants", function (req, res) {res.render("html_film_views/IKillGiants", { version: version })})



app.get("/I'mNotThere", function (req, res) {res.render("html_film_views/I'mNotThere", { version: version })})

app.get("/IfBealeStreetCouldTalk", function (req, res) {res.render("html_film_views/IfBealeStreetCouldTalk", { version: version })})


app.get("/InBruges", function (req, res) {res.render("html_film_views/InBruges", { version: version })})


app.get("/InaValleyofViolence", function (req, res) {res.render("html_film_views/InaValleyofViolence", { version: version })})


app.get("/InherentVice", function (req, res) {res.render("html_film_views/InherentVice", { version: version })})


app.get("/InsideLlewynDavis", function (req, res) {res.render("html_film_views/InsideLlewynDavis", { version: version })})


app.get("/Interstellar", function (req, res) {res.render("html_film_views/Interstellar", { version: version })})


app.get("/IntotheWild", function (req, res) {res.render("html_film_views/IntotheWild", { version: version })})


app.get("/Invictus", function (req, res) {res.render("html_film_views/Invictus", { version: version })})

app.get("/IsleofDogs", function (req, res) {res.render("html_film_views/IsleofDogs", { version: version })})



app.get("/It", function (req, res) {res.render("html_film_views/It", { version: version })})


app.get("/ItChapterTwo", function (req, res) {res.render("html_film_views/ItChapterTwo", { version: version })})


app.get("/ItFollows", function (req, res) {res.render("html_film_views/ItFollows", { version: version })})


app.get("/QuantumofSolace", function (req, res) {res.render("html_film_views/QuantumofSolace", { version: version })})


app.get("/JasonandtheArgonauts", function (req, res) {res.render("html_film_views/JasonandtheArgonauts", { version: version })})


app.get("/JohnWick", function (req, res) {res.render("html_film_views/JohnWick", { version: version })})


app.get("/JohnWick:Chapter2", function (req, res) {res.render("html_film_views/JohnWick:Chapter2", { version: version })})


app.get("/JohnWick:Chapter3-Parabellum", function (req, res) {res.render("html_film_views/JohnWick:Chapter3-Parabellum", { version: version })})


app.get("/JojoRabbit", function (req, res) {res.render("html_film_views/JojoRabbit", { version: version })})


app.get("/Joker", function (req, res) {res.render("html_film_views/Joker", { version: version })})


app.get("/Jumanji:TheNextLevel", function (req, res) {res.render("html_film_views/Jumanji:TheNextLevel", { version: version })})


app.get("/Jumanji:WelcometotheJungle", function (req, res) {res.render("html_film_views/Jumanji:WelcometotheJungle", { version: version })})



app.get("/Jungle", function (req, res) {res.render("html_film_views/Jungle", { version: version })})

app.get("/JurassicPark", function (req, res) {res.render("html_film_views/JurassicPark", { version: version })})


app.get("/JurassicWorld", function (req, res) {res.render("html_film_views/JurassicWorld", { version: version })})


app.get("/JurassicWorld:FallenKingdom", function (req, res) {res.render("html_film_views/JurassicWorld:FallenKingdom", { version: version })})


app.get("/KingdomofHeaven", function (req, res) {res.render("html_film_views/KingdomofHeaven", { version: version })})


app.get("/Kite", function (req, res) {res.render("html_film_views/Kite", { version: version })})


app.get("/Knivesout", function (req, res) {res.render("html_film_views/Knivesout", { version: version })})


app.get("/KungFuPanda2", function (req, res) {res.render("html_film_views/KungFuPanda2", { version: version })})


app.get("/KungFuPanda3", function (req, res) {res.render("html_film_views/KungFuPanda3", { version: version })})


app.get("/Kuso", function (req, res) {res.render("html_film_views/Kuso", { version: version })})


app.get("/LadyBird", function (req, res) {res.render("html_film_views/LadyBird", { version: version })})


app.get("/LeanonPete", function (req, res) {res.render("html_film_views/LeanonPete", { version: version })})


app.get("/LeaveNoTrace", function (req, res) {res.render("html_film_views/LeaveNoTrace", { version: version })})


app.get("/Léon:TheProfessional", function (req, res) {res.render("html_film_views/Léon:TheProfessional", { version: version })})


app.get("/Lincoln", function (req, res) {res.render("html_film_views/Lincoln", { version: version })})


app.get("/Locke", function (req, res) {res.render("html_film_views/Locke", { version: version })})


app.get("/Logan", function (req, res) {res.render("html_film_views/Logan", { version: version })})


app.get("/LordsofDogtown", function (req, res) {res.render("html_film_views/LordsofDogtown", { version: version })})


app.get("/MakingWaves:TheArtofCinematicSound", function (req, res) {res.render("html_film_views/MakingWaves:TheArtofCinematicSound", { version: version })})


app.get("/ManchesterbytheSea", function (req, res) {res.render("html_film_views/ManchesterbytheSea", { version: version })})


app.get("/Mandela:LongWalktoFreedom", function (req, res) {res.render("html_film_views/Mandela:LongWalktoFreedom", { version: version })})


app.get("/McQueen", function (req, res) {res.render("html_film_views/McQueen", { version: version })})


app.get("/MeetMeinSt.Louis", function (req, res) {res.render("html_film_views/MeetMeinSt.Louis", { version: version })})


app.get("/Melancholia", function (req, res) {res.render("html_film_views/Melancholia", { version: version })})


app.get("/mid90s", function (req, res) {res.render("html_film_views/mid90s", { version: version })})


app.get("/MidnightSpecial", function (req, res) {res.render("html_film_views/MidnightSpecial", { version: version })})


app.get("/Monos", function (req, res) {res.render("html_film_views/Monos", { version: version })})


app.get("/Moon", function (req, res) {res.render("html_film_views/Moon", { version: version })})


app.get("/Moonlight", function (req, res) {res.render("html_film_views/Moonlight", { version: version })})


app.get("/MoonriseKingdom", function (req, res) {res.render("html_film_views/MoonriseKingdom", { version: version })})


app.get("/Mud", function (req, res) {res.render("html_film_views/Mud", { version: version })})


app.get("/MulhollandDr.", function (req, res) {res.render("html_film_views/MulhollandDr.", { version: version })})


app.get("/MurderontheOrientExpress", function (req, res) {res.render("html_film_views/MurderontheOrientExpress", { version: version })})


app.get("/Nebraska", function (req, res) {res.render("html_film_views/Nebraska", { version: version })})


app.get("/NeverSurrender:AGalaxyQuestDocumentary", function (req, res) {res.render("html_film_views/NeverSurrender:AGalaxyQuestDocumentary", { version: version })})


app.get("/NotesonBlindness", function (req, res) {res.render("html_film_views/NotesonBlindness", { version: version })})


app.get("/OBrother,WhereArtThou?", function (req, res) {res.render("html_film_views/OBrother,WhereArtThou?", { version: version })})

app.get("/OfficeSpace", function (req, res) {res.render("html_film_views/OfficeSpace", { version: version })})



app.get("/OnceWereWarriors", function (req, res) {res.render("html_film_views/OnceWereWarriors", { version: version })})


app.get("/OneHourPhoto", function (req, res) {res.render("html_film_views/OneHourPhoto", { version: version })})


app.get("/OneMoreTimewithFeeling", function (req, res) {res.render("html_film_views/OneMoreTimewithFeeling", { version: version })})


app.get("/Onward", function (req, res) {res.render("html_film_views/Onward", { version: version })})


app.get("/Passengers", function (req, res) {res.render("html_film_views/Passengers", { version: version })})


app.get("/Paterson", function (req, res) {res.render("html_film_views/Paterson", { version: version })})


app.get("/PenguinsofMadagascar", function (req, res) {res.render("html_film_views/PenguinsofMadagascar", { version: version })})


app.get("/PhantomThread", function (req, res) {res.render("html_film_views/PhantomThread", { version: version })})


app.get("/Pi", function (req, res) {res.render("html_film_views/Pi", { version: version })})


app.get("/Pleasantville", function (req, res) {res.render("html_film_views/Pleasantville", { version: version })})


app.get("/Predator", function (req, res) {res.render("html_film_views/Predator", { version: version })})


app.get("/Prometheus", function (req, res) {res.render("html_film_views/Prometheus", { version: version })})


app.get("/Psycho", function (req, res) {res.render("html_film_views/Psycho", { version: version })})


app.get("/Queen&Slim", function (req, res) {res.render("html_film_views/Queen&Slim", { version: version })})


app.get("/QueenofKatwe", function (req, res) {res.render("html_film_views/QueenofKatwe", { version: version })})


app.get("/ReadyPlayerOne", function (req, res) {res.render("html_film_views/ReadyPlayerOne", { version: version })})


app.get("/ReservoirDogs", function (req, res) {res.render("html_film_views/ReservoirDogs", { version: version })})


app.get("/RichardJewell", function (req, res) {res.render("html_film_views/RichardJewell", { version: version })})


app.get("/RidewiththeDevil", function (req, res) {res.render("html_film_views/RidewiththeDevil", { version: version })})


app.get("/SafetyNotGuaranteed", function (req, res) {res.render("html_film_views/SafetyNotGuaranteed", { version: version })})


app.get("/Selma", function (req, res) {res.render("html_film_views/Selma", { version: version })})


app.get("/SherlockHolmes", function (req, res) {res.render("html_film_views/SherlockHolmes", { version: version })})


app.get("/SherlockHolmes:AGameofShadows", function (req, res) {res.render("html_film_views/SherlockHolmes:AGameofShadows", { version: version })})


app.get("/Sherpa", function (req, res) {res.render("html_film_views/Sherpa", { version: version })})


app.get("/Shoplifters", function (req, res) {res.render("html_film_views/Shoplifters", { version: version })})


app.get("/ShutterIsland", function (req, res) {res.render("html_film_views/ShutterIsland", { version: version })})


app.get("/Silence", function (req, res) {res.render("html_film_views/Silence", { version: version })})


app.get("/Skyfall", function (req, res) {res.render("html_film_views/Skyfall", { version: version })})


app.get("/SlowWest", function (req, res) {res.render("html_film_views/SlowWest", { version: version })})


app.get("/Solaris", function (req, res) {res.render("html_film_views/Solaris", { version: version })})


app.get("/SongoftheSea", function (req, res) {res.render("html_film_views/SongoftheSea", { version: version })})


app.get("/SorrytoBotherYou", function (req, res) {res.render("html_film_views/SorrytoBotherYou", { version: version })})


app.get("/Spectre", function (req, res) {res.render("html_film_views/Spectre", { version: version })})
app.get("/SorryWeMissedYou", function (req, res) {res.render("html_film_views/SorryWeMissedYou", { version: version })})


app.get("/Spider-Man:FarfromHome", function (req, res) {res.render("html_film_views/Spider-Man:FarfromHome", { version: version })})


app.get("/Spider-Man:IntotheSpider-Verse", function (req, res) {res.render("html_film_views/Spider-Man:IntotheSpider-Verse", { version: version })})




app.get("/Split", function (req, res) {res.render("html_film_views/Split", { version: version })})


app.get("/StillAlice", function (req, res) {res.render("html_film_views/StillAlice", { version: version })})


app.get("/SuicideSquad", function (req, res) {res.render("html_film_views/SuicideSquad", { version: version })})


app.get("/SweetCountry", function (req, res) {res.render("html_film_views/SweetCountry", { version: version })})


app.get("/The13thWarrior", function (req, res) {res.render("html_film_views/The13thWarrior", { version: version })})


app.get("/TheAssassinationofJesseJamesbytheCowardRobertFord", function (req, res) {res.render("html_film_views/TheAssassinationofJesseJamesbytheCowardRobertFord", { version: version })})


app.get("/TheBestExoticMarigoldHotel", function (req, res) {res.render("html_film_views/TheBestExoticMarigoldHotel", { version: version })})


app.get("/TheBoyintheStripedPyjamas", function (req, res) {res.render("html_film_views/TheBoyintheStripedPyjamas", { version: version })})


app.get("/TheBreadwinner", function (req, res) {res.render("html_film_views/TheBreadwinner", { version: version })})


app.get("/TheChroniclesofNarnia:TheVoyageoftheDawnTreader", function (req, res) {res.render("html_film_views/TheChroniclesofNarnia:TheVoyageoftheDawnTreader", { version: version })})


app.get("/TheDarjeelingLimited", function (req, res) {res.render("html_film_views/TheDarjeelingLimited", { version: version })})


app.get("/TheDarkHorse", function (req, res) {res.render("html_film_views/TheDarkHorse", { version: version })})


app.get("/TheDarkTower", function (req, res) {res.render("html_film_views/TheDarkTower", { version: version })})


app.get("/TheDayShallCome", function (req, res) {res.render("html_film_views/TheDayShallCome", { version: version })})


app.get("/TheDeadDon'tDie", function (req, res) {res.render("html_film_views/TheDeadDon'tDie", { version: version })})


app.get("/TheDeathofStalin", function (req, res) {res.render("html_film_views/TheDeathofStalin", { version: version })})


app.get("/TheDevil'sRejects", function (req, res) {res.render("html_film_views/TheDevil'sRejects", { version: version })})


app.get("/TheEvilDead", function (req, res) {res.render("html_film_views/TheEvilDead", { version: version })})


app.get("/TheFloridaProject", function (req, res) {res.render("html_film_views/TheFloridaProject", { version: version })})


app.get("/TheFounder", function (req, res) {res.render("html_film_views/TheFounder", { version: version })})


app.get("/TheFrontRunner", function (req, res) {res.render("html_film_views/TheFrontRunner", { version: version })})


app.get("/TheGirlontheTrain", function (req, res) {res.render("html_film_views/TheGirlontheTrain", { version: version })})


app.get("/TheGiver", function (req, res) {res.render("html_film_views/TheGiver", { version: version })})


app.get("/TheGrandBudapestHotel", function (req, res) {res.render("html_film_views/TheGrandBudapestHotel", { version: version })})


app.get("/TheGreatGatsby", function (req, res) {res.render("html_film_views/TheGreatGatsby", { version: version })})


app.get("/TheGreatestShowman", function (req, res) {res.render("html_film_views/TheGreatestShowman", { version: version })})


app.get("/TheHatefulEight", function (req, res) {res.render("html_film_views/TheHatefulEight", { version: version })})


app.get("/TheHero", function (req, res) {res.render("html_film_views/TheHero", { version: version })})


app.get("/TheHobbit:AnUnexpectedJourney", function (req, res) {res.render("html_film_views/TheHobbit:AnUnexpectedJourney", { version: version })})


app.get("/TheHobbit:TheBattleoftheFiveArmies", function (req, res) {res.render("html_film_views/TheHobbit:TheBattleoftheFiveArmies", { version: version })})


app.get("/TheHobbit:TheDesolationofSmaug", function (req, res) {res.render("html_film_views/TheHobbit:TheDesolationofSmaug", { version: version })})


app.get("/TheImitationGame", function (req, res) {res.render("html_film_views/TheImitationGame", { version: version })})


app.get("/TheLegoBatmanMovie", function (req, res) {res.render("html_film_views/TheLegoBatmanMovie", { version: version })})


app.get("/TheLastoftheMohicans", function (req, res) {res.render("html_film_views/TheLastoftheMohicans", { version: version })})


app.get("/TheLegoMovie", function (req, res) {res.render("html_film_views/TheLegoMovie", { version: version })})


app.get("/TheLegoMovie2:TheSecondPart", function (req, res) {res.render("html_film_views/TheLegoMovie2:TheSecondPart", { version: version })})


app.get("/TheLivesofOthers", function (req, res) {res.render("html_film_views/TheLivesofOthers", { version: version })})


app.get("/TheLobster", function (req, res) {res.render("html_film_views/TheLobster", { version: version })})


app.get("/TheLordoftheRings:TheFellowshipoftheRing", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheFellowshipoftheRing", { version: version })})


app.get("/TheLordoftheRings:TheReturnoftheKing", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheReturnoftheKing", { version: version })})


app.get("/TheLordoftheRings:TheTwoTowers", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheTwoTowers", { version: version })})


app.get("/TheLordsofSalem", function (req, res) {res.render("html_film_views/TheLordsofSalem", { version: version })})


app.get("/TheLostCityofZ", function (req, res) {res.render("html_film_views/TheLostCityofZ", { version: version })})


app.get("/TheMagnificentSeven", function (req, res) {res.render("html_film_views/TheMagnificentSeven", { version: version })})


app.get("/TheManWhoKilledHitlerandThentheBigfoot", function (req, res) {res.render("html_film_views/TheManWhoKilledHitlerandThentheBigfoot", { version: version })})


app.get("/TheManWhoWouldBeKing", function (req, res) {res.render("html_film_views/TheManWhoWouldBeKing", { version: version })})


app.get("/TheMartian", function (req, res) {res.render("html_film_views/TheMartian", { version: version })})


app.get("/TheMatrix", function (req, res) {res.render("html_film_views/TheMatrix", { version: version })})


app.get("/TheMatrixReloaded", function (req, res) {res.render("html_film_views/TheMatrixReloaded", { version: version })})


app.get("/TheMatrixRevolutions", function (req, res) {res.render("html_film_views/TheMatrixRevolutions", { version: version })})


app.get("/TheMenWhoStareatGoats", function (req, res) {res.render("html_film_views/TheMenWhoStareatGoats", { version: version })})


app.get("/TheNeonDemon", function (req, res) {res.render("html_film_views/TheNeonDemon", { version: version })})


app.get("/TheOneILove", function (req, res) {res.render("html_film_views/TheOneILove", { version: version })})


app.get("/TheOsloDiaries", function (req, res) {res.render("html_film_views/TheOsloDiaries", { version: version })})


app.get("/ThePeanutButterFalcon", function (req, res) {res.render("html_film_views/ThePeanutButterFalcon", { version: version })})


app.get("/ThePerfectStorm", function (req, res) {res.render("html_film_views/ThePerfectStorm", { version: version })})


app.get("/TheRevenant", function (req, res) {res.render("html_film_views/TheRevenant", { version: version })})


app.get("/TheSignal", function (req, res) {res.render("html_film_views/TheSignal", { version: version })})


app.get("/TheSkeletonTwins", function (req, res) {res.render("html_film_views/TheSkeletonTwins", { version: version })})


app.get("/TheTheoryofEverything", function (req, res) {res.render("html_film_views/TheTheoryofEverything", { version: version })})


app.get("/TheThing", function (req, res) {res.render("html_film_views/TheThing", { version: version })})


app.get("/TheThing", function (req, res) {res.render("html_film_views/TheThing", { version: version })})


app.get("/TheTreeofLife", function (req, res) {res.render("html_film_views/TheTreeofLife", { version: version })})


app.get("/TheUsualSuspects", function (req, res) {res.render("html_film_views/TheUsualSuspects", { version: version })})


app.get("/TheVoices", function (req, res) {res.render("html_film_views/TheVoices", { version: version })})


app.get("/TheWitch", function (req, res) {res.render("html_film_views/TheWitch", { version: version })})


app.get("/TheZeroTheorem", function (req, res) {res.render("html_film_views/TheZeroTheorem", { version: version })})


app.get("/ThreeBillboardsOutsideEbbing,Missouri", function (req, res) {res.render("html_film_views/ThreeBillboardsOutsideEbbing,Missouri", { version: version })})


app.get("/TrespassAgainstUs", function (req, res) {res.render("html_film_views/TrespassAgainstUs", { version: version })})


app.get("/UndertheSkin", function (req, res) {res.render("html_film_views/UndertheSkin", { version: version })})


app.get("/Upgrade", function (req, res) {res.render("html_film_views/Upgrade", { version: version })})

app.get("/Us", function (req, res) {res.render("html_film_views/Us", { version: version })})



app.get("/VforVendetta", function (req, res) {res.render("html_film_views/VforVendetta", { version: version })})


app.get("/Venom", function (req, res) {res.render("html_film_views/Venom", { version: version })})


app.get("/ViewfromaBlueMoon", function (req, res) {res.render("html_film_views/ViewfromaBlueMoon", { version: version })})


app.get("/WalktheLine", function (req, res) {res.render("html_film_views/WalktheLine", { version: version })})


app.get("/WetheAnimals", function (req, res) {res.render("html_film_views/WetheAnimals", { version: version })})


app.get("/WhaleRider", function (req, res) {res.render("html_film_views/WhaleRider", { version: version })})


app.get("/Wild", function (req, res) {res.render("html_film_views/Wild", { version: version })})


app.get("/WillyWonka&theChocolateFactory", function (req, res) {res.render("html_film_views/WillyWonka&theChocolateFactory", { version: version })})


app.get("/Wilson", function (req, res) {res.render("html_film_views/Wilson", { version: version })})


app.get("/WonderWoman", function (req, res) {res.render("html_film_views/WonderWoman", { version: version })})


app.get("/WorldWarZ", function (req, res) {res.render("html_film_views/WorldWarZ", { version: version })})


app.get("/X-Men:Apocalypse", function (req, res) {res.render("html_film_views/X-Men:Apocalypse", { version: version })})


app.get("/X-Men:DaysofFuturePast", function (req, res) {res.render("html_film_views/X-Men:DaysofFuturePast", { version: version })})


app.get("/Yardie", function (req, res) {res.render("html_film_views/Yardie", { version: version })})


app.get("/ZackandMiriMakeaPorno", function (req, res) {res.render("html_film_views/ZackandMiriMakeaPorno", { version: version })})


app.get("/Zombieland", function (req, res) {res.render("html_film_views/Zombieland", { version: version })})


app.get("/Zootopia", function (req, res) {res.render("html_film_views/Zootopia", { version: version })})


app.get("/Zulu", function (req, res) {res.render("html_film_views/Zulu", { version: version })})

