'use strict'

const checkSong = require(`./platforms/${require('os').platform()}`)

function isPlaying(windowTitle) {
    const SEP = ' - '

    if (['Spotify Premium', 'Spotify Free', 'Spotify'].includes(windowTitle))
        return null

    let splitted = windowTitle.split(SEP)

    // TODO give better error message for windows with more than a single hyphen
    if (splitted.length != 2)
        return null

    return {
        artist: splitted[0],
        song: splitted[1]
    }
}

function playing(cb) {
    if (!checkSong)
        return cb('Platform not supported.')

    checkSong((err, windowTitle) => {
        if (err)
            return cb(err)
        cb(null, isPlaying(windowTitle))
    })
}

module.exports = playing
