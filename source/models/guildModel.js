const mongoose = require('mongoose');
const config = require('../foriliseconfig');

mongoose.connect(config.mongoose.mongooseLink, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { 
    console.log(`[Forilise]: Forilise has been conected with mongoose`)
}).catch((error) => { 
    console.log(`[Forilise@mongooseError]: `+error)
});


var server = new mongoose.Schema({ 
    serverID: String,
    serverPremium: Boolean,
    serverBlacklist: Boolean
});

module.exports = mongoose.model('Forilise_Servers', server);