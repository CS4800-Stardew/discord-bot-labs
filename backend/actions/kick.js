module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    execute(message, args) {
        // Check if the bot has the necessary permissions
        if (!message.guild.me.permissions.has('KICK_MEMBERS')) {
            return message.reply('I do not have the necessary permissions to kick members.');
        }

        // Check if the user has the necessary permissions
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply('You do not have the necessary permissions to kick members.');
        }

        // Check if a user mention is provided
        const member = message.mentions.members.first();
        if (!member) {
            return message.reply('Please mention a user to kick.');
        }

        // Kick the mentioned user
        member.kick()
            .then(kickedMember => {
                message.reply(`${kickedMember.user.tag} has been kicked from the server.`);
            })
            .catch(error => {
                console.error('Error kicking member:', error);
                message.reply('There was an error kicking the member.');
            });
    },
};