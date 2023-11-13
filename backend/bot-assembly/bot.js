//creating a skeletal structure of bot.js to the program
//would need to install discord.js globally to the project? how do we ensure that discord.js runs on the user's project once they receive their bot? run a batch script that does it? 

const Discord = require('discord.js');

const client = new Discord.Client();

// Bot configuration -> how will users input their bots token (and securely?)
const config = {
    token: 'YOUR_BOT_TOKEN_HERE',
    prefix: '/'
};

client.once('ready', () => {
    console.log('bot is ready.');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    
    //make commands chainable using callback functions, returned objects, then method
    
    //const command = args.shift().toLowerCase();

    // command logic -> how to get from parser
    
    // START_ACTION_LOGIC
    // The parsed command logic will be inserted here by the parsing program
    // END_ACTION_LOGIC
});

client.login(config.token);
