'use strict'

// <require a song model>
const Song = require('../models/song')
const { bookshelf } = require('../db/database')
// < use model methods for getting all songs and one song then send the response back with the data>

module.exports.getSongs = (req, res, next) => {
  Song.getAll()
  .then( (songs) => {
    res.json(songs)
  })
  .catch( (err) => {
    next(err)
  })
}

module.exports.getSong = ({params: {id}}, res, next) => {
  Song.getSingleSong(id)
  .then( (song) => {
    res.json(song)
  })
  .catch( (err) => {
    next(err)
  })
}

// <stretch goal: methods for adding, deleting, editing a song>
