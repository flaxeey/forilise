    const mongoose = require('mongoose');
    const forilise_config = require('../foriliseconfig');
    module.exports = function connect() {
        mongoose.connect(forilise_config.mongoose.mongooseLink, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => { 
            console.log(`[Forilise]: Forilise has been conected with mongoose`);
        }).catch((error) => { 
            console.log(`[Forilise@mongooseError]: `+error)
        });
    }