/*Received a notice from server. The goal of these notices is to allow the users to change their language settings and still be able to know programmatically what message was sent by the server. We encourage to use the msg-id to compare these messages.

Parameters:

    channel: String - Channel name
    msgid: String - Message ID (See known msg-ids below)
    message: String - Message received

Known msg-ids:

    already_banned: X is already banned in this room.
    already_emote_only_on: This room is already in emote-only mode.
    already_emote_only_off: This room is not in emote-only mode.
    already_subs_on: This room is already in subscribers-only mode.
    already_subs_off: This room is not in subscribers-only mode.
    bad_ban_admin: You cannot ban admin X.
    bad_ban_broadcaster: You cannot ban the broadcaster.
    bad_ban_global_mod: You cannot ban global moderator X.
    bad_ban_self: You cannot ban yourself.
    bad_ban_staff: You cannot ban staff X.
    bad_commercial_error: Failed to start commercial.
    bad_host_hosting: This channel is already hosting X.
    bad_host_rate_exceeded: Host target cannot be changed more than 3 times every half hour.
    bad_mod_mod: X is already a moderator of this room.
    bad_mod_banned: X is banned in this room.
    bad_timeout_admin: You cannot timeout admin X.
    bad_timeout_global_mod: You cannot timeout global moderator X.
    bad_timeout_self: You cannot timeout yourself.
    bad_timeout_staff: You cannot timeout staff X.
    bad_unban_no_ban: X is not banned from this room.
    bad_unmod_mod: X is not a moderator of this room.
    ban_success: X is now banned from this room.
    cmds_available: Commands available to you in this room (use /help for details)..
    color_changed: Your color has been changed.
    commercial_success: Initiating X second commercial break. Please keep in mind..
    emote_only_on: This room is now in emote-only mode.
    emote_only_off: This room is no longer in emote-only mode.
    hosts_remaining: X host commands remaining this half hour.
    host_target_went_offline: X has gone offline. Exiting host mode
    mod_success: You have added X as a moderator of this room.
    msg_banned: You are permanently banned from talking in channel.
    msg_censored_broadcaster: Your message was modified for using words banned by X.
    msg_channel_suspended: This channel has been suspended.
    msg_duplicate: Your message was not sent because you are sending messages too quickly.
    msg_emoteonly: This room is in emote only mode.
    msg_ratelimit: Your message was not sent because you are sending messages too quickly.
    msg_subsonly: This room is in subscribers only mode. To talk, purchase..
    msg_timedout: You are banned from talking in X for Y more seconds.
    msg_verified_email: This room requires a verified email address to chat.
    no_help: No help available.
    no_permission: You don’t have permission to perform that action.
    not_hosting: No channel is currently being hosted.
    timeout_success: X has been timed out for length seconds.
    unban_success: X is no longer banned from this room.
    unmod_success: You have removed X as a moderator of this room.
    unrecognized_cmd: Unrecognized command: X
    usage_ban: Usage: “/ban “ - Permanently prevent a user from chatting..
    usage_clear: Usage: “/clear” - Clear chat history for all users in this room.
    usage_color: Usage: “/color " - Change your username color. Color must be..
    usage_commercial: Usage: “/commercial [length]” - Triggers a commercial.
    usage_disconnect: Usage: “/disconnect” - Reconnects to chat.
    usage_emote_only_on: Usage: “/emoteonly” - Enables emote-only mode..
    usage_emote_only_off: Usage: “/emoteonlyoff” - Disables emote-only mode..
    usage_help: Usage: “/help” - Lists the commands available to you in this room.
    usage_host: Usage: “/host “ - Host another channel. Use “unhost” to unset host mode.
    usage_me: Usage: “/me “ - Send an “emote” message in the third person.
    usage_mod: Usage: “/mod “ - Grant mod status to a user. Use “mods” to list the..
    usage_mods: Usage: “/mods” - Lists the moderators of this channel.
    usage_r9k_on: Usage: “/r9kbeta” - Enables r9k mode. See http://bit.ly/bGtBDf for details.
    usage_r9k_off: Usage: “/r9kbetaoff” - Disables r9k mode.
    usage_slow_on: Usage: “/slow [duration]” - Enables slow mode..
    usage_slow_off: Usage: “/slowoff” - Disables slow mode.
    usage_subs_on: Usage: “/subscribers” - Enables subscribers-only mode..
    usage_subs_off: Usage: “/subscribersoff” - Disables subscribers-only mode.
    usage_timeout: Usage: “/timeout [duration]” - Temporarily prevent a user from chatting.
    usage_unban: Usage: “/unban “ - Removes a ban on a user.
    usage_unhost: Usage: “/unhost” - Stop hosting another channel.
    usage_unmod: Usage: “/unmod “ - Revoke mod status from a user..
    whisper_invalid_self: You cannot whisper to yourself.
    whisper_limit_per_min: You are sending whispers too fast. Try again in a minute.
    whisper_limit_per_sec: You are sending whispers too fast. Try again in a second.
    whisper_restricted_recipient: That user’s settings prevent them from receiving this whisper.

The following msg-ids wont be returned in the notice event because they are already available as event listeners:

    host_off: Exited hosting mode.
    host_on: Now hosting X
    no_mods: There are no moderators for this room.
    r9k_off: This room is no longer in r9k mode.
    r9k_on: This room is now in r9k mode.
    room_mods: The moderators of this room are X
    slow_off: This room is no longer in slow mode.
    slow_on: This room is now in slow mode. You may send messages every X seconds.
    subs_off: This room is no longer in subscribers-only mode.
    subs_on: This room is now in subscribers-only mode.

client.on("notice", function (channel, msgid, message) {
    // Do your stuff.
});
*/
