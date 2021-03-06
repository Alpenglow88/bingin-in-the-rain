# frozen_string_literal: true

require 'rest-client'
require 'json'
require 'fuzzy_match'
require 'iso-639'

# require 'launchy'

require './constants.rb'

File.delete('./films.json') if File.exist?('./films.json')
File.delete('./views/films.ejs') if File.exist?('./views/films.ejs')

FileUtils.rm_rf('./json_film_list')
Dir.mkdir('./json_film_list')

FileUtils.rm_rf('./views/alphabetical_views')
Dir.mkdir('./views/alphabetical_views')

FileUtils.rm_rf('./views/html_film_views')
Dir.mkdir('./views/html_film_views')

FileUtils.rm_rf('./views/genre_views')
Dir.mkdir('./views/genre_views')

# Class string
class String
  # function to gather defined characters of a string
  def initial(top_value)
    self[0, top_value]
  end
end

# scans selected folder for file names and formats them correctly
# File.write('./filelist1.json', Dir.entries('./test_data/home movies').drop(2))
# File.write('./filelist2.json', Dir.entries('./test_data/second_hdd').drop(2))
File.write('./filelist1.json', Dir.entries('/Volumes/WATCHUM/Home Videos/.').drop(2))
File.write('./filelist2.json', Dir.entries('/Volumes/Watchum2/.').drop(2))
list1 = File.read('filelist1.json').tr('_', '-')
            .gsub!('.mp4', '')
            .gsub('.1.1.2', '')
            .gsub('.1080p', '')
            .gsub('.1080', '')
            .gsub('1080p', '')
            .gsub('.720p', '')
            .gsub('720p', '')
            .gsub('.WEBRip', '')
            .gsub('WEBRip', '')
            .gsub('.BrRip', '')
            .gsub('BrRip', '')
            .gsub('.Brrip', '')
            .gsub('Brrip', '')
            .gsub('.BRrip', '')
            .gsub('BRrip', '')
            .gsub('.BRRip', '')
            .gsub('BRRip', '')
            .gsub(' HDRip ', '')
            .gsub('.x264', '')
            .gsub('x264', '')
            .gsub('.X264', '')
            .gsub('X264', '')
            .gsub('.H264', '')
            .gsub('H264', '')
            .gsub('264', '')
            .gsub('.H265', '')
            .gsub('H265', '')
            .gsub('-RARBG', '')
            .gsub('RARBG - ', '')
            .gsub('.RARBG', '')
            .gsub('RARBG', '')
            .gsub('.AAC5.1', '')
            .gsub('AAC5.1', '')
            .gsub('.AAC', '')
            .gsub('AAC', '')
            .gsub('.aac', '')
            .gsub('aac', '')
            .gsub('-[YTS.MX]', '')
            .gsub('-[YTS.AM]', '')
            .gsub('-[YTS.LT]', '')
            .gsub('-[YTS.AG]', '')
            .gsub('-[YTS.PE]', '')
            .gsub('.BluRay', '')
            .gsub('BluRay', '')
            .gsub('.Bluray', '')
            .gsub('Bluray', '')
            .gsub('.YIFY', '')
            .gsub('-YIFY', '')
            .gsub('YIFY', '')
            .gsub('.Deceit', '')
            .gsub('Deceit', '')
            .gsub('.+HI', '')
            .gsub('+HI', '')
            .gsub('.VPPV', '')
            .gsub('VPPV', '')
            .gsub('.BOKUTOX', '')
            .gsub('BOKUTOX', '')
            .gsub('.EXTENDED', '')
            .gsub('EXTENDED', '')
            .gsub('.Extended', '')
            .gsub('Extended', '')
            .gsub('.Extended.cut', '')
            .gsub('Extended.cut', '')
            .gsub('.ExD', '')
            .gsub('ExD', '')
            .gsub('.UNRATED', '')
            .gsub('UNRATED', '')
            .gsub('.bitloks', '')
            .gsub('bitloks', '')
            .gsub('.(HD)', '')
            .gsub('(HD)', '')
            .gsub('.WeTv', '')
            .gsub('WeTv', '')
            .gsub('.GAZ', '')
            .gsub('GAZ', '')
            .gsub('.ETRG', '')
            .gsub('-ETRG', '')
            .gsub('ETRG', '')
            .gsub('.KiNGDOM', '')
            .gsub('-KiNGDOM', '')
            .gsub('KiNGDOM', '')
            .gsub('.HDTV', '')
            .gsub('HDTV', '')
            .gsub('.anoXmous-', '')
            .gsub('.anoXmous', '')
            .gsub('anoXmous', '')
            .gsub('  -ZoNe', '')
            .gsub('-ZoNe', '')
            .gsub('.ZoNe', '')
            .gsub('ZoNe', '')
            .gsub('.PlutO', '')
            .gsub('PlutO', '')
            .gsub('~', '')
            .gsub('.MgB', '')
            .gsub('-MgB', '')
            .gsub('MgB', '')
            .gsub('.REMASTERED', '')
            .gsub(' Directors Cut', '')
            .gsub(' Directors Cut ', '')
            .gsub(" Director's Cut", '')
            .gsub('.Directors Cut', '')
            .gsub('.Directors.Cut', '')
            .gsub(".Director's.Cut", '')
            .gsub("Director's.Cut", '')
            .gsub('Directors Cut', '')
            .gsub('Directors.Cut', '')
            .gsub('.DC', '')
            .gsub('.Final.Cut', '')
            .gsub('.Cut', '')
            .gsub(' Cut', '')
            .gsub('.', ' ')
            .gsub('  Part 1', 'Part 1')
            .gsub(' [', ' ')
            .gsub(' - ', '')
            .gsub('7]', '7')
            .gsub(' 10th Anniversary Edition', '')
            .gsub(' DVDRip', '')
            .gsub(' 1920', '')
            .gsub(' 1921', '')
            .gsub(' 1922', '')
            .gsub(' 1923', '')
            .gsub(' 1924', '')
            .gsub(' 1925', '')
            .gsub(' 1926', '')
            .gsub(' 1927', '')
            .gsub(' 1928', '')
            .gsub(' 1929', '')
            .gsub(' 1930', '')
            .gsub(' 1931', '')
            .gsub(' 1932', '')
            .gsub(' 1933', '')
            .gsub(' 1934', '')
            .gsub(' 1935', '')
            .gsub(' 1936', '')
            .gsub(' 1937', '')
            .gsub(' 1938', '')
            .gsub(' 1939', '')
            .gsub(' 1940', '')
            .gsub(' 1941', '')
            .gsub(' 1942', '')
            .gsub(' 1943', '')
            .gsub(' 1944', '')
            .gsub(' 1945', '')
            .gsub(' 1946', '')
            .gsub(' 1947', '')
            .gsub(' 1948', '')
            .gsub(' 1949', '')
            .gsub(' 1950', '')
            .gsub(' 1951', '')
            .gsub(' 1952', '')
            .gsub(' 1953', '')
            .gsub(' 1954', '')
            .gsub(' 1955', '')
            .gsub(' 1956', '')
            .gsub(' 1957', '')
            .gsub(' 1958', '')
            .gsub(' 1959', '')
            .gsub(' 1960', '')
            .gsub(' 1961', '')
            .gsub(' 1962', '')
            .gsub(' 1963', '')
            .gsub(' 1964', '')
            .gsub(' 1965', '')
            .gsub(' 1966', '')
            .gsub(' 1967', '')
            .gsub(' 1968', '')
            .gsub(' 1969', '')
            .gsub(' 1970', '')
            .gsub(' 1971', '')
            .gsub(' 1972', '')
            .gsub(' 1973', '')
            .gsub(' 1974', '')
            .gsub(' 1975', '')
            .gsub(' 1976', '')
            .gsub(' 1977', '')
            .gsub(' 1978', '')
            .gsub(' 1979', '')
            .gsub(' 1980', '')
            .gsub(' 1981', '')
            .gsub(' 1982', '')
            .gsub(' 1983', '')
            .gsub(' 1984', '')
            .gsub(' 1985', '')
            .gsub(' 1986', '')
            .gsub(' 1987', '')
            .gsub(' 1988', '')
            .gsub(' 1989', '')
            .gsub(' 1990', '')
            .gsub(' 1991', '')
            .gsub(' 1992', '')
            .gsub(' 1993', '')
            .gsub(' 1994', '')
            .gsub(' 1995', '')
            .gsub(' 1996', '')
            .gsub(' 1997', '')
            .gsub(' 1998', '')
            .gsub(' 1999', '')
            .gsub(' 2000', '')
            .gsub(' 2001', '')
            .gsub(' 2002', '')
            .gsub(' 2003', '')
            .gsub(' 2004', '')
            .gsub(' 2005', '')
            .gsub(' 2006', '')
            .gsub(' 2007', '')
            .gsub(' 2008', '')
            .gsub(' 2009', '')
            .gsub(' 2010', '')
            .gsub(' 2011', '')
            .gsub(' 2012', '')
            .gsub(' 2013', '')
            .gsub(' 2014', '')
            .gsub(' 2015', '')
            .gsub(' 2016', '')
            .gsub(' 2017', '')
            .gsub(' 2018', '')
            .gsub(' 2019', '')
            .gsub(' 2020', '')

list2 = File.read('filelist2.json')

films_data1 = JSON.parse(list1)
films_data2 = JSON.parse(list2)

films_data = films_data1 + films_data2
films = films_data.sort
last_film_raw = films[films.length - 1]

File.open('./films.json', 'a') do |f|
  f.puts '['
end

last_film_apicall = "https://api.themoviedb.org/3/search/movie?api_key=\'#{TMDBAPIKEY}\'&query=\'#{last_film_raw}\'".delete "'"
last_film_response = RestClient.get(last_film_apicall)
last_film_rb = JSON.parse(last_film_response.body)['results']
last_film = last_film_rb[0]['title']

# iterates through file names in folder and queries The Movie Database
films.each do |film|
  film.delete "'"

  next if film.initial(2) == ' -' || film.initial(1) == '.'

  puts film

  apicall = "https://api.themoviedb.org/3/search/movie?api_key=\'#{TMDBAPIKEY}\'&query=\'#{film}\'".delete "'"

  response = RestClient.get(apicall)
  rb = JSON.parse(response.body)['results']
  # File.write('./response.json', JSON.pretty_generate(rb))
  length_count = (rb.count - 1)

  object = []
  (0..length_count).each do |i|
    object << rb[i]['title']
  rescue NoMethodError
    object << film
  end

  fuzzy_find = FuzzyMatch.new(object).find(film)
  film_entry = object.index(fuzzy_find)
  # puts film_entry

  begin
    filmname = rb[film_entry]['title']
    filmname_check = 1
  rescue NoMethodError, TypeError
    filmname = rb[0]['title']
    filmname_check = 0
  end

  begin
    filmoverview = rb[film_entry]['overview']
  rescue NoMethodError, TypeError
    filmoverview = rb[0]['overview']
  end

  begin
    poster_path_filmname = rb[film_entry]['poster_path']
  rescue NoMethodError, TypeError
    poster_path_filmname = rb[0]['poster_path']
  end

  begin
    vote_average = rb[film_entry]['vote_average']
  rescue NoMethodError, TypeError
    vote_average = rb[0]['vote_average']
  end

  if filmname_check == 1
    film_id = rb[film_entry]['id']
  elsif filmname_check == 0
    film_id = rb[0]['id']
  end

  begin
    release_date = rb[film_entry]['release_date']
  rescue NoMethodError, TypeError
    release_date = '-'
  end

  begin
    language_code = rb[film_entry]['original_language']
    original_language = ISO_639.find(language_code).english_name
  rescue NoMethodError, TypeError
    language_code = rb[0]['original_language']
    original_language = ISO_639.find(language_code).english_name
  end
  
  spoken_language_api = "https://api.themoviedb.org/3/movie/'#{film_id}\'?api_key='#{TMDBAPIKEY}\'&language=en-US".delete "'"
  spoken_language_response = RestClient.get(spoken_language_api)
  spoken_language_rb = JSON.parse(spoken_language_response.body)['spoken_languages']
  languages_count = (spoken_language_rb.count - 1)

  spoken_languages = []
  if languages_count >= 0
    (0..languages_count).each do |i|
      language_code = spoken_language_rb[i]['iso_639_1']
      iso_lang = ISO_639.find(language_code).english_name
      spoken_languages << (' ' + iso_lang)
    rescue NoMethodError
      break
    end
  elsif languages_count < 0
    spoken_languages << 'No ISO_639_1 language code in DataBase'
  end

  genre_api = "https://api.themoviedb.org/3/movie/#{film_id}?api_key=#{TMDBAPIKEY}&language=en-US"
  genre_response = RestClient.get(genre_api)
  grb = JSON.parse(genre_response.body)
  number_of_tags = grb['genres'].length
  number_of_tags_json = (grb['genres'].length - 1)
  genres_hash = {}
  (0..number_of_tags_json).each do |i|
    genres_hash[:"#{i}"] = grb['genres'][i]['name']
  end

  credits_api_call = "https://api.themoviedb.org/3/movie/#{film_id}/credits?api_key=#{TMDBAPIKEY}".delete "'"
  credits_response = RestClient.get(credits_api_call)
  credits_rb = JSON.parse(credits_response.body)
  crew_credits_count = (credits_rb['crew'].length - 1)
  cast_credits_count = (credits_rb['cast'].length - 1)

  director_name = ''
  (0..crew_credits_count).each do |i|
    begin
      job = credits_rb['crew'][i]['job']
      name = credits_rb['crew'][i]['name']
    rescue NoMethodError
      job = 'Director'
      name = 'undefined'
    end
    director_name = name if job == 'Director'
  end

  lead_actors = []
  (0..2).each do |i|
    lead_actors << (' ' + credits_rb['cast'][i]['name'])
  rescue NoMethodError
    break
  end

  supporting_actors = []
  if cast_credits_count < 7
    (3..cast_credits_count).each do |i|
      supporting_actors << (' ' + credits_rb['cast'][i]['name'])
    rescue NoMethodError
      break
    end
  else
    (3..10).each do |i|
      supporting_actors << (' ' + credits_rb['cast'][i]['name'])
    rescue NoMethodError
      break
    end
  end

  image_url =
    if poster_path_filmname == 'none'
      'public/assets/not_available.jpg'
    else
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2\'#{poster_path_filmname}\'".delete "'"
    end
  # Launchy.open(image_url)

  trailerapi = "https://api.themoviedb.org/3/movie/\'#{film_id}\'/videos?api_key=\'#{TMDBAPIKEY}\'&language=en-US".delete "'"
  trailer_response = RestClient.get(trailerapi)
  trailer_rb = JSON.parse(trailer_response.body)
  # File.write('./trailer.json', JSON.pretty_generate(trailer_rb))

  film_trailer_key = ''
  (0..2).each do |i|
    next unless trailer_rb['results'][i]['type'] == 'Trailer'

    film_trailer_key = trailer_rb['results'][i]['key']
    break
  rescue NoMethodError
    film_trailer_key = '-'
  end

  film_trailer = "https://www.youtube.com/watch?v=\'#{film_trailer_key}\'".delete "'"
  # Launchy.open(film_trailer)

  if list1.include?(film)
    watch_on = 'Apple TV'
  elsif list2.include?(film)
    watch_on = 'Mac Mini'
  end

  hash = {
    film: {
      'title' => filmname,
      'director' => director_name,
      'release_date' => release_date,
      'film_id' => film_id,
      'original_language' => original_language,
      'spoken_languages' => spoken_languages,
      'overview' => filmoverview,
      'imageUrl' => image_url,
      'imdbScore' => vote_average.to_s,
      'trailerLink' => film_trailer,
      'numberOfGenres' => number_of_tags,
      'watchOn' => watch_on,
      'genres' => genres_hash,
      'lead_actors' => lead_actors,
      'supporting_actors' => supporting_actors
    }
  }
  File.write("./json_film_list/#{filmname}.json", JSON.pretty_generate(hash))

  if filmname.include? last_film
    File.open('./films.json', 'a') do |f|
      f.puts JSON.pretty_generate(hash)
    end

  else
    File.open('./films.json', 'a') do |f|
      f.puts JSON.pretty_generate(hash)
      f.puts ','
    end
  end
end

File.open('./films.json', 'a') do |f|
  f.puts ']'
end

File.delete('./filelist1.json') if File.exist?('./filelist1.json')
File.delete('./filelist2.json') if File.exist?('./filelist2.json')
