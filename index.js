'use strict'

const platforms = {
    'darwin': require('./platforms/darwin'),
    'linux': require('./platforms/linux'),
    'win32': require('./platforms/win32'),
}

module.exports = cb => {
    if (!platforms.hasOwnProperty(process.platform))
        return cb('Platform not supported')

    platforms[process.platform]((err, windowTitle) => {
        if (err)
            return cb('Cannot find Spotify process')

        if (['', 'Spotify Premium', 'Spotify Free', 'Spotify'].includes(windowTitle))
            return cb('Nothing playing on Spotify')

        const FIRST_SEP = windowTitle.indexOf(' - ')
        const music = {
            artist: windowTitle.substr(0, FIRST_SEP),
            song: windowTitle.substr(FIRST_SEP + 3)
        }

        cb(null, music)
    })
}
