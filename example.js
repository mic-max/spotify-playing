const playing = require('./index')

setInterval(playing, 1000, (err, now) => {
	if (err)
        console.log('Cannot find Spotify process')
    else if (!now)
        console.log('Nothing playing on Spotify')
    else
        console.log(now)
})
