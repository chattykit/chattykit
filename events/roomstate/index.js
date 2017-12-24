/*
Triggered upon joining a channel. Gives you the current state of the channel.

Parameters:

    channel: String - Channel name
    state: Object - Current state of the channel

client.on("roomstate", function (channel, state) {
    // Do your stuff.
});

According to Twitch, the state object is always subject to change.

{
    'broadcaster-lang': null,
    'r9k': false,
    'slow': false,
    'subs-only': false,
    'channel': '#schmoopiie'
}
*/
