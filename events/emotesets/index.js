/*
Received the emote-sets from Twitch.

Parameters:

    sets: String - Your emote sets (always contains the default emoticons set 0)
    obj: Object - Your emote sets with IDs and codes received from the Twitch API

client.on("emotesets", function(sets, obj) {
    // Here are the emotes I can use:
    console.log(obj);
});
*/
