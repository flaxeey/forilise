const mongoose = require('mongoose');
const forilise_config = require('../../foriliseconfig');

// Connecting with database.
mongoose.connect(forilise_config.mongoose, { 
    // options
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{ // connected with sucess. 
    console.log(`[Forilise | Database@Test]: Connected with sucess.`);
}).catch((error) =>{ // if error
    console.log(`[Forilise | Database@Error]: `+ error); 
});

const forilise_guildModel = new mongoose.Schema({ 
    forilise_serverID: { type: String, required: true },
    forilise_serverPremium: { type: Boolean, required: true },
    forilise_serverBlacklist: { type: Boolean, required: true },
    forilise_welcomeChannel: { type: Number, required: false },
    forilise_byeChannel: { type: Number, required: false },
    forilise_messageLogs: { type: Boolean, required: false },
    forilise_messageLogsID: { type: Boolean, required: false },
    forilise_messageLogsTypes: { type: Array, required: false },
    forilise_disabledCommands: { type: Array, required: true },
    forilise_serverXP: { type: Boolean, required: true }
});

const fgM = mongoose.model('Forilise_Servers', forilise_guildModel);
module.exports = fgM;