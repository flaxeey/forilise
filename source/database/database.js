const mongoose = require('mongoose');
const forilise_config = require('../foriliseconfig.js');

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

setTimeout(() => { 
    mongoose.disconnect().then(() => { 
        console.log(`[Forilise | Database@Test]: Disconnected.`);
    });
}, 7000);
