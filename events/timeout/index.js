/*
Username has been timed out on a channel.

Parameters:

    channel: String - Channel name
    username: String - Username
    reason: String - Reason of the timeout can also be null
    duration: Integer - Duration of the timeout

client.on("timeout", function (channel, username, reason, duration) {
    // Do your stuff.
});
*/
