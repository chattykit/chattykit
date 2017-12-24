/*
Someone got unmodded on a channel.

Important: It doesn’t detect if username got removed from moderators list. You will see a lot of mod / unmod events on a channel. When a moderator joins a channel, it will take a few seconds for jtv to give the user the moderator status. When leaving a channel, the user gets unmodded.

Parameters:

    channel: String - Channel name
    username: String - Username

client.on("unmod", function (channel, username) {
    // Do your stuff.
});
*/
