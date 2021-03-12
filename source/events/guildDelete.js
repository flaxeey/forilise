//const Discord = require('discord.js');
//const forilise_guild = require('../database/models/forilise_guildModel');

module.exports = async(client, guild) => { 
    /*forilise_guild.findOne({ forilise_serverID: guild.id }, function(error, document) { 
        if(error) return console.error(error);
        if(document) { 
            new forilise_guild({
                forilise_serverID: guild.id,
                forilise_serverPremium: false,
                forilise_serverBlacklist: false,
                forilise_welcomeChannel: 0,
                forilise_byeChannel: 0,
                forilise_serverLogs: false,
                forilise_messageLogsID: false,
                forilise_messageLogsTypes: [],
                forilise_disabledCommands: [],
                forilise_serverXP: false
            }).delete().then(() => { 
                console.log(`[Forilise | Guild]: [-]| [${guild.name}](${guild.id})`);
            }).catch((error) => { 
                console.log(error);
            });
        } else { 
            return false;
        };
   });
   */
};