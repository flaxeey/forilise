const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../foriliseconfig')

module.exports = async(client, message) => {
    // CREATING PROFILE
    const fetchUserAbout = db.fetch(`userAbout_${message.author.id}`);
    if(!fetchUserAbout || fetchUserAbout === null) { 
        db.set(`userAbout_${message.author.id}`, 'O forilise é meu amigo, você pode mudar esta mensagem usando f.aboutme');
    } else { 
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (message.webhookID) return;
    
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
        if (message.content.indexOf(config.prefix) !== 0) return; 
        if (!cmd) return;
    cmd.run(client, message, args);
    }




}