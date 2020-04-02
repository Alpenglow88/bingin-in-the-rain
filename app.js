const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const films = require('./films.json')
const randomFilm = films[ Math.floor(Math.random() * films.length) ]
const randomFilmTitle= randomFilm['film']['title']

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view cache', false);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/films', function (req, res) {
  res.render('films')
})

app.get('/random-film', function (req, res) {
  res.render('waiting')
  // res.render(`html_film_views/${randomFilmTitle}`)
})

app.get('/waiting', function (req, res) {
  res.render('waiting')
})

app.get('/films-number', function (req, res) {
  res.render('waiting')
})

app.get('/films-A', function (req, res) {
  res.render('waiting')
})

app.get('/films-B', function (req, res) {
  res.render('waiting')
})

app.get('/films-C', function (req, res) {
  res.render('waiting')
})

app.get('/films-D', function (req, res) {
  res.render('waiting')
})

app.get('/films-E', function (req, res) {
  res.render('waiting')
})

app.get('/films-F', function (req, res) {
  res.render('waiting')
})

app.get('/films-G', function (req, res) {
  res.render('waiting')
})

app.get('/films-H', function (req, res) {
  res.render('waiting')
})

app.get('/films-I', function (req, res) {
  res.render('waiting')
})

app.get('/films-J', function (req, res) {
  res.render('waiting')
})

app.get('/films-K', function (req, res) {
  res.render('waiting')
})

app.get('/films-L', function (req, res) {
  res.render('waiting')
})

app.get('/films-M', function (req, res) {
  res.render('waiting')
})

app.get('/films-N', function (req, res) {
  res.render('waiting')
})

app.get('/films-O', function (req, res) {
  res.render('waiting')
})

app.get('/films-P', function (req, res) {
  res.render('waiting')
})

app.get('/films-Q', function (req, res) {
  res.render('waiting')
})

app.get('/films-R', function (req, res) {
  res.render('waiting')
})

app.get('/films-S', function (req, res) {
  res.render('waiting')
})

app.get('/films-T', function (req, res) {
  res.render('waiting')
})

app.get('/films-U', function (req, res) {
  res.render('waiting')
})

app.get('/films-V', function (req, res) {
  res.render('waiting')
})

app.get('/films-W', function (req, res) {
  res.render('waiting')
})

app.get('/films-X', function (req, res) {
  res.render('waiting')
})

app.get('/films-Y', function (req, res) {
  res.render('waiting')
})

app.get('/films-Z', function (req, res) {
  res.render('waiting')
})

app.get("/1917", function (req, res) {res.render("html_film_views/1917")})


app.get("/28DaysLater", function (req, res) {res.render("html_film_views/28DaysLater")})


app.get("/303", function (req, res) {res.render("html_film_views/303")})


app.get("/7DaysinEntebbe", function (req, res) {res.render("html_film_views/7DaysinEntebbe")})


app.get("/ACureforWellness", function (req, res) {res.render("html_film_views/ACureforWellness")})


app.get("/AHistoryofViolence", function (req, res) {res.render("html_film_views/AHistoryofViolence")})


app.get("/AQuietPlace", function (req, res) {res.render("html_film_views/AQuietPlace")})


app.get("/Abominable", function (req, res) {res.render("html_film_views/Abominable")})


app.get("/Alien", function (req, res) {res.render("html_film_views/Alien")})


app.get("/Aliens", function (req, res) {res.render("html_film_views/Aliens")})


app.get("/Alien:Covenant", function (req, res) {res.render("html_film_views/Alien:Covenant")})


app.get("/Aliens", function (req, res) {res.render("html_film_views/Aliens")})


app.get("/Allied", function (req, res) {res.render("html_film_views/Allied")})


app.get("/AlongwiththeGods:TheTwoWorlds", function (req, res) {res.render("html_film_views/AlongwiththeGods:TheTwoWorlds")})


app.get("/Anomalisa", function (req, res) {res.render("html_film_views/Anomalisa")})


app.get("/Anthropoid", function (req, res) {res.render("html_film_views/Anthropoid")})


app.get("/ApocalypseNowRedux", function (req, res) {res.render("html_film_views/ApocalypseNowRedux")})


app.get("/Apollo11", function (req, res) {res.render("html_film_views/Apollo11")})


app.get("/Arctic", function (req, res) {res.render("html_film_views/Arctic")})


app.get("/Arrival", function (req, res) {res.render("html_film_views/Arrival")})


app.get("/BartonFink", function (req, res) {res.render("html_film_views/BartonFink")})


app.get("/BigHero6", function (req, res) {res.render("html_film_views/BigHero6")})


app.get("/birdman", function (req, res) {res.render("html_film_views/birdman")})


app.get("/BirdsofPrey(andtheFantabulousEmancipationofOneHarleyQuinn)", function (req, res) {res.render("html_film_views/BirdsofPrey(andtheFantabulousEmancipationofOneHarleyQuinn)")})


app.get("/BlacKkKlansman", function (req, res) {res.render("html_film_views/BlacKkKlansman")})


app.get("/BlackHawkDown", function (req, res) {res.render("html_film_views/BlackHawkDown")})


app.get("/BlackSwan", function (req, res) {res.render("html_film_views/BlackSwan")})


app.get("/BladeRunner", function (req, res) {res.render("html_film_views/BladeRunner")})


app.get("/BladeRunner2049", function (req, res) {res.render("html_film_views/BladeRunner2049")})


app.get("/BlueMyMind", function (req, res) {res.render("html_film_views/BlueMyMind")})


app.get("/BoneTomahawk", function (req, res) {res.render("html_film_views/BoneTomahawk")})


app.get("/Boyhood", function (req, res) {res.render("html_film_views/Boyhood")})


app.get("/BurnAfterReading", function (req, res) {res.render("html_film_views/BurnAfterReading")})


app.get("/Calvary", function (req, res) {res.render("html_film_views/Calvary")})


app.get("/CaptainFantastic", function (req, res) {res.render("html_film_views/CaptainFantastic")})



app.get("/Casablanca", function (req, res) {res.render("html_film_views/Casablanca")})

app.get("/CasinoRoyale", function (req, res) {res.render("html_film_views/CasinoRoyale")})


app.get("/CloudywithaChanceofMeatballs", function (req, res) {res.render("html_film_views/CloudywithaChanceofMeatballs")})


app.get("/CloudywithaChanceofMeatballs2", function (req, res) {res.render("html_film_views/CloudywithaChanceofMeatballs2")})



app.get("/ComeAsYouAre", function (req, res) {res.render("html_film_views/ComeAsYouAre")})

app.get("/ConfessionsofaDangerousMind", function (req, res) {res.render("html_film_views/ConfessionsofaDangerousMind")})


app.get("/DarkPhoenix", function (req, res) {res.render("html_film_views/DarkPhoenix")})


app.get("/DarkWaters", function (req, res) {res.render("html_film_views/DarkWaters")})


app.get("/DawnoftheDead", function (req, res) {res.render("html_film_views/DawnoftheDead")})


app.get("/DayoftheDead", function (req, res) {res.render("html_film_views/DayoftheDead")})


app.get("/DeadMan'sShoes", function (req, res) {res.render("html_film_views/DeadMan'sShoes")})


app.get("/Deadpool", function (req, res) {res.render("html_film_views/Deadpool")})


app.get("/Deadpool2", function (req, res) {res.render("html_film_views/Deadpool2")})


app.get("/Deadwood:TheMovie", function (req, res) {res.render("html_film_views/Deadwood:TheMovie")})


app.get("/Delinquent", function (req, res) {res.render("html_film_views/Delinquent")})


app.get("/DespicableMe2", function (req, res) {res.render("html_film_views/DespicableMe2")})


app.get("/DespicableMe3", function (req, res) {res.render("html_film_views/DespicableMe3")})


app.get("/Don'tWorry,HeWon'tGetFaronFoot", function (req, res) {res.render("html_film_views/Don'tWorry,HeWon'tGetFaronFoot")})


app.get("/Downsizing", function (req, res) {res.render("html_film_views/Downsizing")})

app.get("/EasternPromises", function (req, res) {res.render("html_film_views/EasternPromises")})



app.get("/EscapefromPretoria", function (req, res) {res.render("html_film_views/EscapefromPretoria")})



app.get("/EvilDeadII", function (req, res) {res.render("html_film_views/EvilDeadII")})

app.get("/ExMachina", function (req, res) {res.render("html_film_views/ExMachina")})


app.get("/Excalibur", function (req, res) {res.render("html_film_views/Excalibur")})


app.get("/ExtremelyWicked,ShockinglyEvilandVile", function (req, res) {res.render("html_film_views/ExtremelyWicked,ShockinglyEvilandVile")})


app.get("/FantasticBeastsandWheretoFindThem", function (req, res) {res.render("html_film_views/FantasticBeastsandWheretoFindThem")})


app.get("/FantasticBeasts:TheCrimesofGrindelwald", function (req, res) {res.render("html_film_views/FantasticBeasts:TheCrimesofGrindelwald")})


app.get("/Fences", function (req, res) {res.render("html_film_views/Fences")})


app.get("/FightClub", function (req, res) {res.render("html_film_views/FightClub")})


app.get("/FirstMan", function (req, res) {res.render("html_film_views/FirstMan")})


app.get("/FreeSolo", function (req, res) {res.render("html_film_views/FreeSolo")})


app.get("/FreeStateofJones", function (req, res) {res.render("html_film_views/FreeStateofJones")})


app.get("/GalaxyQuest", function (req, res) {res.render("html_film_views/GalaxyQuest")})


app.get("/GardenState", function (req, res) {res.render("html_film_views/GardenState")})


app.get("/Gattaca", function (req, res) {res.render("html_film_views/Gattaca")})




app.get("/GetOut", function (req, res) {res.render("html_film_views/GetOut")})
app.get("/Gifted", function (req, res) {res.render("html_film_views/Gifted")})


app.get("/Gladiator", function (req, res) {res.render("html_film_views/Gladiator")})


app.get("/Glass", function (req, res) {res.render("html_film_views/Glass")})


app.get("/God'sOwnCountry", function (req, res) {res.render("html_film_views/God'sOwnCountry")})


app.get("/GreenBook", function (req, res) {res.render("html_film_views/GreenBook")})


app.get("/Gremlins", function (req, res) {res.render("html_film_views/Gremlins")})


app.get("/GunsAkimbo", function (req, res) {res.render("html_film_views/GunsAkimbo")})


app.get("/HacksawRidge", function (req, res) {res.render("html_film_views/HacksawRidge")})


app.get("/Hail,Caesar!", function (req, res) {res.render("html_film_views/Hail,Caesar!")})


app.get("/HarryPotterandtheDeathlyHallows:Part2", function (req, res) {res.render("html_film_views/HarryPotterandtheDeathlyHallows:Part2")})


app.get("/HarryPotterandtheChamberofSecrets", function (req, res) {res.render("html_film_views/HarryPotterandtheChamberofSecrets")})


app.get("/HarryPotterandtheDeathlyHallows:Part1", function (req, res) {res.render("html_film_views/HarryPotterandtheDeathlyHallows:Part1")})


app.get("/HarryPotterandtheGobletofFire", function (req, res) {res.render("html_film_views/HarryPotterandtheGobletofFire")})


app.get("/HarryPotterandtheHalf-BloodPrince", function (req, res) {res.render("html_film_views/HarryPotterandtheHalf-BloodPrince")})


app.get("/HarryPotterandtheOrderofthePhoenix", function (req, res) {res.render("html_film_views/HarryPotterandtheOrderofthePhoenix")})


app.get("/HarryPotterandthePrisonerofAzkaban", function (req, res) {res.render("html_film_views/HarryPotterandthePrisonerofAzkaban")})


app.get("/HarryPotterandthePhilosopher'sStone", function (req, res) {res.render("html_film_views/HarryPotterandthePhilosopher'sStone")})



app.get("/Harvey", function (req, res) {res.render("html_film_views/Harvey")})

app.get("/He'sOutThere", function (req, res) {res.render("html_film_views/He'sOutThere")})


app.get("/HellorHighWater", function (req, res) {res.render("html_film_views/HellorHighWater")})



app.get("/Her", function (req, res) {res.render("html_film_views/Her")})
app.get("/HiddenFigures", function (req, res) {res.render("html_film_views/HiddenFigures")})



app.get("/HighLife", function (req, res) {res.render("html_film_views/HighLife")})


app.get("/HotelRwanda", function (req, res) {res.render("html_film_views/HotelRwanda")})


app.get("/Houseof1000Corpses", function (req, res) {res.render("html_film_views/Houseof1000Corpses")})


app.get("/HowtoTrainYourDragon", function (req, res) {res.render("html_film_views/HowtoTrainYourDragon")})

app.get("/HowtoTrainYourDragon2", function (req, res) {res.render("html_film_views/HowtoTrainYourDragon2")})



app.get("/HuntfortheWilderpeople", function (req, res) {res.render("html_film_views/HuntfortheWilderpeople")})


app.get("/IAmNotaSerialKiller", function (req, res) {res.render("html_film_views/IAmNotaSerialKiller")})


app.get("/IAmNotaWitch", function (req, res) {res.render("html_film_views/IAmNotaWitch")})


app.get("/I,DanielBlake", function (req, res) {res.render("html_film_views/I,DanielBlake")})


app.get("/IKillGiants", function (req, res) {res.render("html_film_views/IKillGiants")})


app.get("/I'mNotThere", function (req, res) {res.render("html_film_views/I'mNotThere")})


app.get("/IfBealeStreetCouldTalk", function (req, res) {res.render("html_film_views/IfBealeStreetCouldTalk")})


app.get("/InBruges", function (req, res) {res.render("html_film_views/InBruges")})


app.get("/InaValleyofViolence", function (req, res) {res.render("html_film_views/InaValleyofViolence")})


app.get("/InherentVice", function (req, res) {res.render("html_film_views/InherentVice")})


app.get("/InsideLlewynDavis", function (req, res) {res.render("html_film_views/InsideLlewynDavis")})


app.get("/Interstellar", function (req, res) {res.render("html_film_views/Interstellar")})


app.get("/IntotheWild", function (req, res) {res.render("html_film_views/IntotheWild")})


app.get("/Invictus", function (req, res) {res.render("html_film_views/Invictus")})


app.get("/IsleofDogs", function (req, res) {res.render("html_film_views/IsleofDogs")})


app.get("/It", function (req, res) {res.render("html_film_views/It")})


app.get("/ItChapterTwo", function (req, res) {res.render("html_film_views/ItChapterTwo")})


app.get("/ItFollows", function (req, res) {res.render("html_film_views/ItFollows")})

app.get("/QuantumofSolace", function (req, res) {res.render("html_film_views/QuantumofSolace")})



app.get("/JasonandtheArgonauts", function (req, res) {res.render("html_film_views/JasonandtheArgonauts")})


app.get("/JohnWick", function (req, res) {res.render("html_film_views/JohnWick")})


app.get("/JohnWick:Chapter2", function (req, res) {res.render("html_film_views/JohnWick:Chapter2")})


app.get("/JohnWick:Chapter3-Parabellum", function (req, res) {res.render("html_film_views/JohnWick:Chapter3-Parabellum")})


app.get("/JojoRabbit", function (req, res) {res.render("html_film_views/JojoRabbit")})


app.get("/Joker", function (req, res) {res.render("html_film_views/Joker")})


app.get("/Jumanji:TheNextLevel", function (req, res) {res.render("html_film_views/Jumanji:TheNextLevel")})


app.get("/Jumanji:WelcometotheJungle", function (req, res) {res.render("html_film_views/Jumanji:WelcometotheJungle")})


app.get("/Jungle", function (req, res) {res.render("html_film_views/Jungle")})


app.get("/JurassicPark", function (req, res) {res.render("html_film_views/JurassicPark")})


app.get("/JurassicWorld:FallenKingdom", function (req, res) {res.render("html_film_views/JurassicWorld:FallenKingdom")})


app.get("/JurassicWorld:FallenKingdom", function (req, res) {res.render("html_film_views/JurassicWorld:FallenKingdom")})


app.get("/KingdomofHeaven", function (req, res) {res.render("html_film_views/KingdomofHeaven")})


app.get("/Kite", function (req, res) {res.render("html_film_views/Kite")})


app.get("/Knivesout", function (req, res) {res.render("html_film_views/Knivesout")})


app.get("/KungFuPanda2", function (req, res) {res.render("html_film_views/KungFuPanda2")})


app.get("/KungFuPanda3", function (req, res) {res.render("html_film_views/KungFuPanda3")})

app.get("/Kuso", function (req, res) {res.render("html_film_views/Kuso")})



app.get("/LadyBird", function (req, res) {res.render("html_film_views/LadyBird")})


app.get("/LeanonPete", function (req, res) {res.render("html_film_views/LeanonPete")})

app.get("/LeaveNoTrace", function (req, res) {res.render("html_film_views/LeaveNoTrace")})



app.get("/Léon:TheProfessional", function (req, res) {res.render("html_film_views/Léon:TheProfessional")})


app.get("/Lincoln", function (req, res) {res.render("html_film_views/Lincoln")})


app.get("/Locke", function (req, res) {res.render("html_film_views/Locke")})


app.get("/Logan", function (req, res) {res.render("html_film_views/Logan")})


app.get("/LordsofDogtown", function (req, res) {res.render("html_film_views/LordsofDogtown")})


app.get("/MakingWaves:TheArtofCinematicSound", function (req, res) {res.render("html_film_views/MakingWaves:TheArtofCinematicSound")})


app.get("/ManchesterbytheSea", function (req, res) {res.render("html_film_views/ManchesterbytheSea")})


app.get("/Mandela:LongWalktoFreedom", function (req, res) {res.render("html_film_views/Mandela:LongWalktoFreedom")})


app.get("/McQueen", function (req, res) {res.render("html_film_views/McQueen")})


app.get("/MeetMeinSt.Louis", function (req, res) {res.render("html_film_views/MeetMeinSt.Louis")})


app.get("/Melancholia", function (req, res) {res.render("html_film_views/Melancholia")})


app.get("/mid90s", function (req, res) {res.render("html_film_views/mid90s")})


app.get("/MidnightSpecial", function (req, res) {res.render("html_film_views/MidnightSpecial")})


app.get("/Monos", function (req, res) {res.render("html_film_views/Monos")})


app.get("/Moon", function (req, res) {res.render("html_film_views/Moon")})


app.get("/Moonlight", function (req, res) {res.render("html_film_views/Moonlight")})


app.get("/MoonriseKingdom", function (req, res) {res.render("html_film_views/MoonriseKingdom")})


app.get("/MulhollandDr.", function (req, res) {res.render("html_film_views/MulhollandDr.")})



app.get("/Mud", function (req, res) {res.render("html_film_views/Mud")})

app.get("/MurderontheOrientExpress", function (req, res) {res.render("html_film_views/MurderontheOrientExpress")})


app.get("/Nebraska", function (req, res) {res.render("html_film_views/Nebraska")})


app.get("/NeverSurrender:AGalaxyQuestDocumentary", function (req, res) {res.render("html_film_views/NeverSurrender:AGalaxyQuestDocumentary")})


app.get("/NotesonBlindness", function (req, res) {res.render("html_film_views/NotesonBlindness")})


app.get("/OBrother,WhereArtThou?", function (req, res) {res.render("html_film_views/OBrother,WhereArtThou?")})


app.get("/OfficeSpace", function (req, res) {res.render("html_film_views/OfficeSpace")})


app.get("/OnceWereWarriors", function (req, res) {res.render("html_film_views/OnceWereWarriors")})


app.get("/OneHourPhoto", function (req, res) {res.render("html_film_views/OneHourPhoto")})


app.get("/OneMoreTimewithFeeling", function (req, res) {res.render("html_film_views/OneMoreTimewithFeeling")})


app.get("/Onward", function (req, res) {res.render("html_film_views/Onward")})


app.get("/Passengers", function (req, res) {res.render("html_film_views/Passengers")})


app.get("/Paterson", function (req, res) {res.render("html_film_views/Paterson")})


app.get("/PenguinsofMadagascar", function (req, res) {res.render("html_film_views/PenguinsofMadagascar")})


app.get("/PhantomThread", function (req, res) {res.render("html_film_views/PhantomThread")})


app.get("/Pi", function (req, res) {res.render("html_film_views/Pi")})


app.get("/Pleasantville", function (req, res) {res.render("html_film_views/Pleasantville")})


app.get("/Predator", function (req, res) {res.render("html_film_views/Predator")})


app.get("/Prometheus", function (req, res) {res.render("html_film_views/Prometheus")})


app.get("/Psycho", function (req, res) {res.render("html_film_views/Psycho")})


app.get("/Queen&Slim", function (req, res) {res.render("html_film_views/Queen&Slim")})


app.get("/QueenofKatwe", function (req, res) {res.render("html_film_views/QueenofKatwe")})


app.get("/ReadyPlayerOne", function (req, res) {res.render("html_film_views/ReadyPlayerOne")})


app.get("/ReservoirDogs", function (req, res) {res.render("html_film_views/ReservoirDogs")})


app.get("/RichardJewell", function (req, res) {res.render("html_film_views/RichardJewell")})


app.get("/RidewiththeDevil", function (req, res) {res.render("html_film_views/RidewiththeDevil")})


app.get("/SafetyNotGuaranteed", function (req, res) {res.render("html_film_views/SafetyNotGuaranteed")})


app.get("/Selma", function (req, res) {res.render("html_film_views/Selma")})


app.get("/SherlockHolmes", function (req, res) {res.render("html_film_views/SherlockHolmes")})


app.get("/SherlockHolmes:AGameofShadows", function (req, res) {res.render("html_film_views/SherlockHolmes:AGameofShadows")})


app.get("/Sherpa", function (req, res) {res.render("html_film_views/Sherpa")})


app.get("/Shoplifters", function (req, res) {res.render("html_film_views/Shoplifters")})


app.get("/ShutterIsland", function (req, res) {res.render("html_film_views/ShutterIsland")})


app.get("/Silence", function (req, res) {res.render("html_film_views/Silence")})


app.get("/Skyfall", function (req, res) {res.render("html_film_views/Skyfall")})


app.get("/SlowWest", function (req, res) {res.render("html_film_views/SlowWest")})


app.get("/Solaris", function (req, res) {res.render("html_film_views/Solaris")})


app.get("/SongoftheSea", function (req, res) {res.render("html_film_views/SongoftheSea")})


app.get("/SorrytoBotherYou", function (req, res) {res.render("html_film_views/SorrytoBotherYou")})


app.get("/SorryWeMissedYou", function (req, res) {res.render("html_film_views/SorryWeMissedYou")})


app.get("/Spectre", function (req, res) {res.render("html_film_views/Spectre")})


app.get("/Spider-Man:FarfromHome", function (req, res) {res.render("html_film_views/Spider-Man:FarfromHome")})


app.get("/Spider-Man:IntotheSpider-Verse", function (req, res) {res.render("html_film_views/Spider-Man:IntotheSpider-Verse")})


app.get("/Split", function (req, res) {res.render("html_film_views/Split")})


app.get("/StillAlice", function (req, res) {res.render("html_film_views/StillAlice")})


app.get("/SuicideSquad", function (req, res) {res.render("html_film_views/SuicideSquad")})


app.get("/SweetCountry", function (req, res) {res.render("html_film_views/SweetCountry")})


app.get("/The13thWarrior", function (req, res) {res.render("html_film_views/The13thWarrior")})


app.get("/TheAssassinationofJesseJamesbytheCowardRobertFord", function (req, res) {res.render("html_film_views/TheAssassinationofJesseJamesbytheCowardRobertFord")})


app.get("/TheBestExoticMarigoldHotel", function (req, res) {res.render("html_film_views/TheBestExoticMarigoldHotel")})


app.get("/TheBoyintheStripedPyjamas", function (req, res) {res.render("html_film_views/TheBoyintheStripedPyjamas")})


app.get("/TheBreadwinner", function (req, res) {res.render("html_film_views/TheBreadwinner")})


app.get("/TheChroniclesofNarnia:TheVoyageoftheDawnTreader", function (req, res) {res.render("html_film_views/TheChroniclesofNarnia:TheVoyageoftheDawnTreader")})


app.get("/TheDarjeelingLimited", function (req, res) {res.render("html_film_views/TheDarjeelingLimited")})


app.get("/TheDarkHorse", function (req, res) {res.render("html_film_views/TheDarkHorse")})


app.get("/TheDarkTower", function (req, res) {res.render("html_film_views/TheDarkTower")})


app.get("/TheDayShallCome", function (req, res) {res.render("html_film_views/TheDayShallCome")})


app.get("/TheDeadDon'tDie", function (req, res) {res.render("html_film_views/TheDeadDon'tDie")})


app.get("/TheDeathofStalin", function (req, res) {res.render("html_film_views/TheDeathofStalin")})


app.get("/TheDevil'sRejects", function (req, res) {res.render("html_film_views/TheDevil'sRejects")})


app.get("/TheEvilDead", function (req, res) {res.render("html_film_views/TheEvilDead")})


app.get("/TheFloridaProject", function (req, res) {res.render("html_film_views/TheFloridaProject")})


app.get("/TheFounder", function (req, res) {res.render("html_film_views/TheFounder")})

app.get("/TheFrontRunner", function (req, res) {res.render("html_film_views/TheFrontRunner")})



app.get("/TheGirlontheTrain", function (req, res) {res.render("html_film_views/TheGirlontheTrain")})


app.get("/TheGiver", function (req, res) {res.render("html_film_views/TheGiver")})


app.get("/TheGrandBudapestHotel", function (req, res) {res.render("html_film_views/TheGrandBudapestHotel")})


app.get("/TheGreatGatsby", function (req, res) {res.render("html_film_views/TheGreatGatsby")})


app.get("/TheGreatestShowman", function (req, res) {res.render("html_film_views/TheGreatestShowman")})


app.get("/TheHatefulEight", function (req, res) {res.render("html_film_views/TheHatefulEight")})


app.get("/TheHero", function (req, res) {res.render("html_film_views/TheHero")})


app.get("/TheHobbit:AnUnexpectedJourney", function (req, res) {res.render("html_film_views/TheHobbit:AnUnexpectedJourney")})


app.get("/TheHobbit:TheBattleoftheFiveArmies", function (req, res) {res.render("html_film_views/TheHobbit:TheBattleoftheFiveArmies")})


app.get("/TheHobbit:TheDesolationofSmaug", function (req, res) {res.render("html_film_views/TheHobbit:TheDesolationofSmaug")})


app.get("/TheImitationGame", function (req, res) {res.render("html_film_views/TheImitationGame")})


app.get("/TheLegoBatmanMovie", function (req, res) {res.render("html_film_views/TheLegoBatmanMovie")})


app.get("/TheLastoftheMohicans", function (req, res) {res.render("html_film_views/TheLastoftheMohicans")})


app.get("/TheLegoMovie", function (req, res) {res.render("html_film_views/TheLegoMovie")})


app.get("/TheLegoMovie2:TheSecondPart", function (req, res) {res.render("html_film_views/TheLegoMovie2:TheSecondPart")})


app.get("/TheLivesofOthers", function (req, res) {res.render("html_film_views/TheLivesofOthers")})


app.get("/TheLobster", function (req, res) {res.render("html_film_views/TheLobster")})


app.get("/TheLordoftheRings:TheFellowshipoftheRing", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheFellowshipoftheRing")})


app.get("/TheLordoftheRings:TheReturnoftheKing", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheReturnoftheKing")})


app.get("/TheLordoftheRings:TheTwoTowers", function (req, res) {res.render("html_film_views/TheLordoftheRings:TheTwoTowers")})

app.get("/TheLordsofSalem", function (req, res) {res.render("html_film_views/TheLordsofSalem")})



app.get("/TheLostCityofZ", function (req, res) {res.render("html_film_views/TheLostCityofZ")})


app.get("/TheMagnificentSeven", function (req, res) {res.render("html_film_views/TheMagnificentSeven")})


app.get("/TheManWhoKilledHitlerandThentheBigfoot", function (req, res) {res.render("html_film_views/TheManWhoKilledHitlerandThentheBigfoot")})


app.get("/TheManWhoWouldBeKing", function (req, res) {res.render("html_film_views/TheManWhoWouldBeKing")})


app.get("/TheMartian", function (req, res) {res.render("html_film_views/TheMartian")})


app.get("/TheMatrix", function (req, res) {res.render("html_film_views/TheMatrix")})


app.get("/TheMatrixReloaded", function (req, res) {res.render("html_film_views/TheMatrixReloaded")})


app.get("/TheMatrixRevolutions", function (req, res) {res.render("html_film_views/TheMatrixRevolutions")})


app.get("/TheMenWhoStareatGoats", function (req, res) {res.render("html_film_views/TheMenWhoStareatGoats")})


app.get("/TheNeonDemon", function (req, res) {res.render("html_film_views/TheNeonDemon")})


app.get("/TheOneILove", function (req, res) {res.render("html_film_views/TheOneILove")})


app.get("/TheOsloDiaries", function (req, res) {res.render("html_film_views/TheOsloDiaries")})


app.get("/ThePeanutButterFalcon", function (req, res) {res.render("html_film_views/ThePeanutButterFalcon")})


app.get("/ThePerfectStorm", function (req, res) {res.render("html_film_views/ThePerfectStorm")})


app.get("/TheRevenant", function (req, res) {res.render("html_film_views/TheRevenant")})


app.get("/TheSignal", function (req, res) {res.render("html_film_views/TheSignal")})


app.get("/TheSkeletonTwins", function (req, res) {res.render("html_film_views/TheSkeletonTwins")})


app.get("/TheTheoryofEverything", function (req, res) {res.render("html_film_views/TheTheoryofEverything")})


app.get("/TheThing", function (req, res) {res.render("html_film_views/TheThing")})


app.get("/TheThing", function (req, res) {res.render("html_film_views/TheThing")})


app.get("/TheTreeofLife", function (req, res) {res.render("html_film_views/TheTreeofLife")})


app.get("/TheUsualSuspects", function (req, res) {res.render("html_film_views/TheUsualSuspects")})


app.get("/TheVoices", function (req, res) {res.render("html_film_views/TheVoices")})


app.get("/TheWitch", function (req, res) {res.render("html_film_views/TheWitch")})


app.get("/TheZeroTheorem", function (req, res) {res.render("html_film_views/TheZeroTheorem")})


app.get("/ThreeBillboardsOutsideEbbing,Missouri", function (req, res) {res.render("html_film_views/ThreeBillboardsOutsideEbbing,Missouri")})


app.get("/TrespassAgainstUs", function (req, res) {res.render("html_film_views/TrespassAgainstUs")})


app.get("/UndertheSkin", function (req, res) {res.render("html_film_views/UndertheSkin")})


app.get("/Upgrade", function (req, res) {res.render("html_film_views/Upgrade")})


app.get("/Us", function (req, res) {res.render("html_film_views/Us")})


app.get("/VforVendetta", function (req, res) {res.render("html_film_views/VforVendetta")})


app.get("/Venom", function (req, res) {res.render("html_film_views/Venom")})


app.get("/ViewfromaBlueMoon", function (req, res) {res.render("html_film_views/ViewfromaBlueMoon")})


app.get("/WalktheLine", function (req, res) {res.render("html_film_views/WalktheLine")})


app.get("/WetheAnimals", function (req, res) {res.render("html_film_views/WetheAnimals")})


app.get("/WhaleRider", function (req, res) {res.render("html_film_views/WhaleRider")})


app.get("/Wild", function (req, res) {res.render("html_film_views/Wild")})


app.get("/WillyWonka&theChocolateFactory", function (req, res) {res.render("html_film_views/WillyWonka&theChocolateFactory")})


app.get("/Wilson", function (req, res) {res.render("html_film_views/Wilson")})



app.get("/WonderWoman", function (req, res) {res.render("html_film_views/WonderWoman")})

app.get("/WorldWarZ", function (req, res) {res.render("html_film_views/WorldWarZ")})


app.get("/X-Men:Apocalypse", function (req, res) {res.render("html_film_views/X-Men:Apocalypse")})


app.get("/X-Men:DaysofFuturePast", function (req, res) {res.render("html_film_views/X-Men:DaysofFuturePast")})


app.get("/Yardie", function (req, res) {res.render("html_film_views/Yardie")})


app.get("/ZackandMiriMakeaPorno", function (req, res) {res.render("html_film_views/ZackandMiriMakeaPorno")})


app.get("/Zombieland", function (req, res) {res.render("html_film_views/Zombieland")})


app.get("/Zootopia", function (req, res) {res.render("html_film_views/Zootopia")})


app.get("/Zulu", function (req, res) {res.render("html_film_views/Zulu")})

