'use strict'

const checkSong = require(`./platforms/${require('os').platform()}`)

function isPlaying(windowTitle) {
    const SEP = ' - '

    if (['Spotify Premium', 'Spotify Free', 'Spotify'].includes(windowTitle))
        return null

    let splitted = windowTitle.split(SEP)
    // TODO check that splitted.length is 2

    return {
        artist: splitted[0],
        song: splitted[1]
    }
}

function playing(cb) {
    if (!checkSong)
        cb('Platform not supported.')

    checkSong((err, windowTitle) => {
        cb(null, isPlaying(windowTitle))
    })
}

module.exports = playing
