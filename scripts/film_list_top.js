const films = require('../films.json')
const fs = require('fs')
const genericHeader = require('../helpers/alphabetised_headers/generic_header_page.js')
const numberPageHeader = require('../helpers/alphabetised_headers/numbers_page.js')
const aPageHeader = require('../helpers/alphabetised_headers/a_letter_page_header.js')
const bPageHeader = require('../helpers/alphabetised_headers/b_letter_page_header.js')
const cPageHeader = require('../helpers/alphabetised_headers/c_letter_page_header.js')
const dPageHeader = require('../helpers/alphabetised_headers/d_letter_page_header.js')
const ePageHeader = require('../helpers/alphabetised_headers/e_letter_page_header.js')
const fPageHeader = require('../helpers/alphabetised_headers/f_letter_page_header.js')
const gPageHeader = require('../helpers/alphabetised_headers/g_letter_page_header.js')
const hPageHeader = require('../helpers/alphabetised_headers/h_letter_page_header.js')
const iPageHeader = require('../helpers/alphabetised_headers/i_letter_page_header.js')
const jPageHeader = require('../helpers/alphabetised_headers/j_letter_page_header.js')
const kPageHeader = require('../helpers/alphabetised_headers/k_letter_page_header.js')
const lPageHeader = require('../helpers/alphabetised_headers/l_letter_page_header.js')
const mPageHeader = require('../helpers/alphabetised_headers/m_letter_page_header.js')
const nPageHeader = require('../helpers/alphabetised_headers/n_letter_page_header.js')
const oPageHeader = require('../helpers/alphabetised_headers/o_letter_page_header.js')
const pPageHeader = require('../helpers/alphabetised_headers/p_letter_page_header.js')
const qPageHeader = require('../helpers/alphabetised_headers/q_letter_page_header.js')
const rPageHeader = require('../helpers/alphabetised_headers/r_letter_page_header.js')
const sPageHeader = require('../helpers/alphabetised_headers/s_letter_page_header.js')
const tPageHeader = require('../helpers/alphabetised_headers/t_letter_page_header.js')
const uPageHeader = require('../helpers/alphabetised_headers/u_letter_page_header.js')
const vPageHeader = require('../helpers/alphabetised_headers/v_letter_page_header.js')
const wPageHeader = require('../helpers/alphabetised_headers/w_letter_page_header.js')
const xPageHeader = require('../helpers/alphabetised_headers/x_letter_page_header.js')
const yPageHeader = require('../helpers/alphabetised_headers/y_letter_page_header.js')
const zPageHeader = require('../helpers/alphabetised_headers/z_letter_page_header.js')


const numberOfFilms = films.length

const path = './views/films.ejs'

try {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
  }
} catch (err) {
  console.error(err)
}


fs.appendFile('views/films.ejs', genericHeader.genericTopChunkText, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/number.ejs', numberPageHeader.topChunkTextNumbers, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/a.ejs', aPageHeader.topChunkTextA, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/b.ejs', bPageHeader.topChunkTextB, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/c.ejs', cPageHeader.topChunkTextC, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/d.ejs', dPageHeader.topChunkTextD, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/e.ejs', ePageHeader.topChunkTextE, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/f.ejs', fPageHeader.topChunkTextF, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/g.ejs', gPageHeader.topChunkTextG, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/h.ejs', hPageHeader.topChunkTextH, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/i.ejs', iPageHeader.topChunkTextI, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/j.ejs', jPageHeader.topChunkTextJ, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/k.ejs', kPageHeader.topChunkTextK, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/l.ejs', lPageHeader.topChunkTextL, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/m.ejs', mPageHeader.topChunkTextM, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/n.ejs', nPageHeader.topChunkTextN, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/o.ejs', oPageHeader.topChunkTextO, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/p.ejs', pPageHeader.topChunkTextP, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/q.ejs', qPageHeader.topChunkTextQ, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/r.ejs', rPageHeader.topChunkTextR, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/s.ejs', sPageHeader.topChunkTextS, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/t.ejs', tPageHeader.topChunkTextT, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/u.ejs', uPageHeader.topChunkTextU, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/v.ejs', vPageHeader.topChunkTextV, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/w.ejs', wPageHeader.topChunkTextW, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/x.ejs', xPageHeader.topChunkTextX, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/y.ejs', yPageHeader.topChunkTextY, function (err) {
  if (err) throw err
})

fs.appendFile('views/alphabetical_views/z.ejs', zPageHeader.topChunkTextZ, function (err) {
  if (err) throw err
})
