"use strict";

const child_proc = require("child_process");

const apple_script_code = `
    # Check if Spotify is currently running
    if application "Spotify" is running then
        # If this executes it means Spotify is currently running
        getCurrentlyPlayingTrack()
    end if
    on getCurrentlyPlayingTrack()
        tell application "Spotify"
            set isPlaying to player state as string
            set currentArtist to artist of current track as string
            set currentTrack to name of current track as string
            return {currentArtist, currentTrack, isPlaying}
        end tell
    end getCurrentlyPlayingTrack`;

module.exports = (cb) => {
    const cmd = `osascript -e '${apple_script_code}'`;
    child_proc.exec(cmd, (err, stdout) => {
        // output looks like Song Name, Artist Name, (playing | paused)
        if (!stdout) return cb("Cannot find Spotify process", err);

        const res = stdout.split(",").map((x) => x.trim());
        let output;
        if (res[2].toLowerCase() !== "playing") {
            output = "Spotify";
        } else {
            output = `${res[0]} - ${res[1]}`;
        }
        cb(err, err || output);
    });
};
