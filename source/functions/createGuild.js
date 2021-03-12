const mongoose = require('mongoose');
const guildModel = require('../models/guildModel');
const colors = require('colors');
module.exports = function createguild( guild ) {
    guildModel.findOne({ serverID: guild.id }, function(error, document) { 
        if(error) return console.log(colors.rainbow(`[Forilise@DatabaseError]: `)+ error);
        if(document) { 
            if(document.serverBlacklist === true) return;
            return;
        } else { 
            new guildModel({
                serverID: guild.id,
                serverPremium: false,
                serverBlacklist: false
            }).save().then(() => { 
                console.log(colors.rainbow(`[Forilise | Servers]: [+]`)+ `GuildName >> ${guild.name} | GuildID >> ${guild.id}`);
            }).catch((error) => { 
                console.log(colors.rainbow(`[Forilise@DatabaseError]: `)+ error);
            });
        };
    });
};