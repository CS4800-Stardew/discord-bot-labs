
module.exports = {
    data: {
        name: 'senddm',
        description: 'Send a direct message to a user',
        options: [
            {
                name: 'user',
                description: 'The user to send the message to',
                type: 'USER',
                required: true,
            },
            {
                name: 'message',
                description: 'The message to send',
                type: 'STRING',
                required: true,
            },
        ],
    },
    async execute(interaction) {
        // Check if the bot has the necessary permissions
        if (!interaction.guild.me.permissions.has('SEND_MESSAGES')) {
            return interaction.reply('I do not have the necessary permissions to send messages.');
        }

        // Check if the user has the necessary permissions
        if (!interaction.member.permissions.has('SEND_MESSAGES')) {
            return interaction.reply('You do not have the necessary permissions to send messages.');
        }

        // Get the user and message content from the interaction options
        const user = interaction.options.get('user').user;
        const messageContent = interaction.options.get('message').value;

        // Check if the user and message content are valid
        if (!user || !messageContent) {
            return interaction.reply('Invalid user or message provided.');
        }

        // Send the direct message to the user
        try {
            await user.send(messageContent);
            return interaction.reply(`Sent a direct message to ${user.tag}.`);
        } catch (error) {
            console.error('Error sending direct message:', error);
            return interaction.reply('There was an error sending the direct message.');
        }
    },
};
