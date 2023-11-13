
module.exports = {
    data: {
        name: 'reply',
        description: 'Reply to a specific channel',
        options: [
            {
                name: 'channel',
                description: 'The channel to send the reply to',
                type: 'CHANNEL',
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

        // Get the channel and message from the interaction options
        const channel = interaction.options.get('channel').channel;
        const messageContent = interaction.options.get('message').value;

        // Check if the channel and message are valid
        if (!channel || !messageContent) {
            return interaction.reply('Invalid channel or message provided.');
        }

        // Send the message to the specified channel
        try {
            await channel.send(messageContent);
            return interaction.reply(`Sent the message to ${channel.toString()}.`);
        } catch (error) {
            console.error('Error sending message:', error);
            return interaction.reply('There was an error sending the message.');
        }
    },
};
