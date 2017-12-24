/*
Someone got modded on a channel.

Important: It doesn’t detect if username is a new moderator, it is triggered when jtv gives the moderator status to someone on a channel. You will see a lot of mod / unmod events on a channel. When a moderator joins a channel, it will take a few seconds for jtv to give the user the moderator status. When leaving a channel, the user gets unmodded.

Parameters:

    channel: String - Channel name
    username: String - Username

client.on("mod", function (channel, username) {
    // Do your stuff.
});
*/
