/*
Channel is now hosted by another broadcaster. This event is fired only if you are logged in as the broadcaster.

Parameters:

    channel: String - Channel name being hosted
    username: String - Username hosting you
    viewers: Integer - Viewers count
    autohost: Boolean - Auto-hosting

client.on("hosted", function (channel, username, viewers, autohost) {
    // Do your stuff.
});
*/
