// commands/removerole.js
module.exports = {
    data: {
        name: 'removerole',
        description: 'Remove a role from a user',
        options: [
            {
                name: 'user',
                description: 'The user to remove the role from',
                type: 'USER',
                required: true,
            },
            {
                name: 'role',
                description: 'The role to be removed',
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

        // Check if the bot has the necessary permissions to remove the role
        if (!role.editable) {
            return interaction.reply('I do not have the necessary permissions to edit the role.');
        }

        // Remove the role from the user
        try {
            await user.roles.remove(role);
            return interaction.reply(`Removed the role ${role.name} from ${user.user.tag}.`);
        } catch (error) {
            console.error('Error removing role:', error);
            return interaction.reply('There was an error removing the role.');
        }
    },
};
