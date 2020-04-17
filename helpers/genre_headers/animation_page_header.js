const topChunkTextAnimation = `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Screenings</title>
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
                <li class="navigation__item"><a href="/genres" data_test_automation_id="header_genres_button" class="is-active">Genres</a></li>
                <li class="navigation__item"><a href="/random-film" data_test_automation_id="header_random_button">Random Film</a></li>                <li class="navigation__item"><a href="/film-request" data_test_automation_id="header_random_button">Request a Film</a></li>
            </ul>
        </nav>
    </div>  
    <div> <font color="white">-</font></div>
       <div class="grid">
        <ul class="navigation__list navigation__list--inline">
            <li class="navigation__item"><a action="/genre-action" href="/genre-action">Action</a></li>
            <li class="navigation__item"><a action="/genre-adventure" href="/genre-adventure">Adventure</a></li>
            <li class="navigation__item"><a action="/genre-animation" href="/genre-animation" class="is-active">Animation</a></li>
            <li class="navigation__item"><a action="/genre-comedy" href="/genre-comedy">Comedy</a></li>
            <li class="navigation__item"><a action="/genre-crime" href="/genre-crime">Crime</a></li>
            <li class="navigation__item"><a action="/genre-documentary" href="/genre-documentary">Documentary</a></li>
            <li class="navigation__item"><a action="/genre-drama" href="/genre-drama">Drama</a></li>
            <li class="navigation__item"><a action="/genre-family" href="/genre-family">Family</a></li>
            <li class="navigation__item"><a action="/genre-fantasy" href="/genre-fantasy">Fantasy</a></li>
        </ul>
        <ul class="navigation__list navigation__list--inline">
            <li class="navigation__item"><a action="/genre-history" href="/genre-history">History</a></li>
            <li class="navigation__item"><a action="/genre-horror" href="/genre-horror">Horror</a></li>
            <li class="navigation__item"><a action="/genre-music" href="/genre-music">Music</a></li>
            <li class="navigation__item"><a action="/genre-mystery" href="/genre-mystery">Mystery</a></li>
            <li class="navigation__item"><a action="/genre-romance" href="/genre-romance">Romance</a></li>
            <li class="navigation__item"><a action="/genre-science-fiction" href="/genre-science-fiction">SciFi</a></li>
            <li class="navigation__item"><a action="/genre-thriller" href="/genre-thriller">Thriller</a></li>
            <li class="navigation__item"><a action="/genre-war" href="/genre-war">War</a></li>
            <li class="navigation__item"><a action="/genre-western" href="/genre-western">Western</a></li>
        </ul>
    </div>
    </header>

  <main>
    <div class="heading" data_test_automation_id="main_heading">
        <h1>Animation</h1>
    </div>
`;

exports.topChunkTextAnimation = topChunkTextAnimation