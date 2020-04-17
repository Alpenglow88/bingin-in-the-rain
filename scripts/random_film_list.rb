# frozen_string_literal: true

require 'json'
require 'launchy'

File.delete('./randomFilmRouting.json') if File.exist?('./randomFilmRouting.json')

File.write('./htmlFilmList.json', Dir.entries('./views/html_film_views').drop(2))

html_film_list = File.read('htmlFilmList.json').gsub!('.ejs', '')

rb = JSON.parse(html_film_list)
count = (rb.length - 1)

routing_list = []
(0..count).each do |i|
  routing_list << rb[i]
end

File.write('./randomFilmRouting.json', routing_list.sort)

File.delete('./htmlFilmList.json')

# address = "https://rgcinema.herokuapp.com/#{rb[39]}"
# Launchy.open(address)
