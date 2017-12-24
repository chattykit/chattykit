/*
Received a whisper. You won’t receive whispers from ignored users.

Parameters:

    from: String - Username who sent the message
    userstate: Object - Userstate object
    message: String - Message received
    self: Boolean - Message was sent by the client

client.on("whisper", function (from, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
});

According to Twitch, the userstate object is always subject to change.

{
    'badges': null,
    'color': '#FFFFFF',
    'display-name': 'Schmoopiie',
    'emotes': { '25': [ '0-4' ] },
    'message-id': '123',
    'thread-id': '1234567_12345678',
    'turbo': true,
    'user-id': '58355428',
    'user-type': null,
    'badges-raw': null,
    'emotes-raw': '25:0-4',
    'username': 'schmoopiie',
    'message-type': 'whisper'
}
*/
