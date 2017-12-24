/*
Received message on channel.

Parameters:

    channel: String - Channel name
    userstate: Object - Userstate object
    message: String - Message received
    self: Boolean - Message was sent by the client

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
});

According to Twitch, the user object is always subject to change.

{
    'badges': { 'broadcaster': '1', 'warcraft': 'horde' },
    'color': '#FFFFFF',
    'display-name': 'Schmoopiie',
    'emotes': { '25': [ '0-4' ] },
    'mod': true,
    'room-id': '58355428',
    'subscriber': false,
    'turbo': true,
    'user-id': '58355428',
    'user-type': 'mod',
    'emotes-raw': '25:0-4',
    'badges-raw': 'broadcaster/1,warcraft/horde',
    'username': 'schmoopiie',
    'message-type': 'chat'
}
*/
