/*
Username has cheered to a channel.

Parameters:

    channel: String - Channel name
    userstate: Object - Userstate object
    message: String - Message

client.on("cheer", function (channel, userstate, message) {
    // Do your stuff.
});

Note: The amount of bits the user sent is inside the userstate (userstate.bits) - Read the Twitch API documentation for more information.
*/
