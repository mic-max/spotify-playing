'use strict'

const child_proc = require('child_process')

module.exports = cb => {
	const cmd = 'powershell -command "ps Spotify | ft MainWindowTitle -HideTableHeaders"'
	child_proc.exec(cmd, (err, stdout) => {
        cb(err, err || stdout.trim())
	})
}
