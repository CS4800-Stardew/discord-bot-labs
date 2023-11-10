// commands/addrole.js
module.exports = {
    data: {
        name: 'addrole',
        description: 'Add a role to a user',
        options: [
            {
                name: 'user',
                description: 'The user to add the role to',
                type: 'USER',
                required: true,
            },
            {
                name: 'role',
                description: 'The role to be added',
                type: 'ROLE',
                required: true,
            },
        ],
    },
    async execute(interaction) {
        // Check if the bot has the necessary permissions
        if (!interaction.guild.me.permissions.has('MANAGE_ROLES')) {
            return interaction.reply('I do not have the necessary permissions to manage roles.');
        }

        // Check if the user has the necessary permissions
        if (!interaction.member.permissions.has('MANAGE_ROLES')) {
            return interaction.reply('You do not have the necessary permissions to manage roles.');
        }

        // Get user and role from the interaction options
        const user = interaction.options.get('user').member;
        const role = interaction.options.get('role').role;

        // Check if the user and role are valid
        if (!user || !role) {
            return interaction.reply('Invalid user or role provided.');
        }

        // Check if the bot has the necessary permissions to add the role
        if (!role.editable) {
            return interaction.reply('I do not have the necessary permissions to edit the role.');
        }

        // Add the role to the user
        try {
            await user.roles.add(role);
            return interaction.reply(`Added the role ${role.name} to ${user.user.tag}.`);
        } catch (error) {
            console.error('Error adding role:', error);
            return interaction.reply('There was an error adding the role.');
        }
    },
};
