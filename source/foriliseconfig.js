module.exports = {
    "token": "token",
    sManager: {
        "totalShards": 0
    },
    
    mongoose: { 
        "mongooseLink": "link",
    },

    foriliseConfig: {
        "mongooseTest": true,
        "selfReport": true,
        "logCommands": true,
        "logEvents": true,
        "commandLogsWebhook": ['id', 'token'],
        "readyEvLogsWebhook": ['id', 'token']
    }

}