const { Client ,  WebhookClient , Collection } = require('discord.js');
const client = new Client();
const fs = require('fs');
const forilise_config = require('./foriliseconfig');
const mongoose = require('mongoose');
const colors = require('colors');

client.forilise_config = forilise_config;
client.forilise_webhookReady = new WebhookClient(
    forilise_config.foriliseConfig.readyEvLogsWebhook[0], forilise_config.foriliseConfig.readyEvLogsWebhook[1]);
client.forilise_webhookCLogs = new WebhookClient(
    forilise_config.foriliseConfig.commandLogsWebhook[0], forilise_config.foriliseConfig.commandLogsWebhook[1]);
client.commands = new Collection();
client.aliases = new Collection();

fs.readdir(`./source/events`, (error, files) => { 
    if(error) return console.error(colors.red(`[Forilise | EventError]: `)+ error);
    files.forEach(file => { 
        let forilise_eventFile = require(`./events/${file}`);
        let forilise_eventName = file.split('.')[0];
        console.log(colors.rainbow(`[Forilise | Event]: `)+ `The ${forilise_eventName} event has been loaded.`);
        client.on(forilise_eventName, forilise_eventFile.bind(null, client));
    });
});
client.login(forilise_config.token[0]);