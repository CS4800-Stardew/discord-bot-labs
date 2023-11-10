// commands/sendmessage.js
module.exports = {
    data: {
        name: 'sendmessage',
        description: 'Send a message to the channel',
        options: [
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

        // Get the message content from the interaction options
        const messageContent = interaction.options.get('message').value;

        // Check if the message content is valid
        if (!messageContent) {
            return interaction.reply('Invalid message provided.');
        }

        // Send the message to the channel
        try {
            await interaction.reply(messageContent);
        } catch (error) {
            console.error('Error sending message:', error);
            return interaction.reply('There was an error sending the message.');
        }
    },
};
