'use strict'

const platform = require('os').platform()

function isPlaying(windowTitle) {
    if (['Spotify Premium', 'Spotify Free', 'Spotify'].includes(windowTitle))
        return null

    const FIRST_SEP = windowTitle.indexOf(' - ')
    return {
        artist: windowTitle.substr(0, FIRST_SEP),
        song: windowTitle.substr(FIRST_SEP + 3)
    }
}

function playing(cb) {
    if (!['win32', 'linux', 'darwin'].includes(platform))
        return cb('Platform not supported')
    
    require(`./platforms/${platform}`)((err, windowTitle) => {
        if (err)
            return cb('Cannot find Spotify process')

        let song = isPlaying(windowTitle)
        cb(song ? null : 'Nothing playing on Spotify', song)
    })
}

module.exports = playing
