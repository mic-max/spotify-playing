# Spotify Playing

![Node.js Package](https://github.com/mic-max/spotify-playing/workflows/Node.js%20Package/badge.svg) ![NPM Version](https://img.shields.io/npm/v/spotify-playing.svg)

> Gets the current song playing on Spotify

## Requirements
Works on Windows, Mac, and Linux with the desktop spotify client.

## Example

```js
const playing = require('spotify-playing')

setInterval(playing, 1000, (err, now) => {
    if (err)
        // Platform not supported
        // Cannot find Spotify process
        // Nothing playing on Spotify
        return console.error(err)

    // { artist: 'The Fratellis', song: 'Chelsea Dagger' }
    console.log(now)
})

```

## Troubleshooting
- If playing on another device you first might need to switch to this device
  and switch the song.
- Close and reopen Spotify
