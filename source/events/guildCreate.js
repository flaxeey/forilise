const manager = require('../functions/createGuild');
const db = require('quick.db')
module.exports = async(client, guild) => { 
manager(guild);  
}