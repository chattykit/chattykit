/*
Username has subscribed to a channel.

Parameters:

    channel: String - Channel name
    username: String - Username
    method: Object - Methods and plan used to subscribe
    message: String - Custom message
    userstate: Object - Userstate

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
});
*/
