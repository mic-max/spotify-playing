'use strict'

const childProc = require('child_process')

function windows(cb) {
	const cmd = 'powershell -command "ps Spotify | ft MainWindowTitle -HideTableHeaders"'
	childProc.exec(cmd, (err, stdout) => {
		if (err)
			return cb(err)
        return cb(null, stdout.trim())
	})
}

module.exports = windows
