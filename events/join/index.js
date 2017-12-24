/*
Username has joined a channel. Not available on large channels and is also sent in batch every 30-60secs.

Parameters:

    channel: String - Channel name
    username: String - Username who joined the channel
    self: Boolean - Client has joined the channel

client.on("join", function (channel, username, self) {
    // Do your stuff.
});
*/
