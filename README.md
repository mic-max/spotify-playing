# Spotify Playing
NPM Package that returns the current song playing on Spotify

## Requirements
Works on Windows, Mac, Linux with the desktop spotify client.

## Example

```js
const playing = require('./index')

setInterval(playing, 1000, (err, now) => {
	if (err)
        console.log('Cannot find Spotify process')
    else if (!now)
        console.log('Nothing playing on Spotify')
    else
        console.log(now)
})
```

## Troubleshooting
- If playing on another device you first might need to switch to this device
  and switch the song.

## To Do
- Add linting
- Add unit tests
- Add e2e tests
- Work on Mac
- Test on linux
- Test on Mac
- Remove example.js from npm package
