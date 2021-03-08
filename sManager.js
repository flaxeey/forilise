const { ShardingManager } = require('discord.js');
const foriliseconfig = require('./source/foriliseconfig');
const sManager = new ShardingManager('./source/forilise.js', {
    token: foriliseconfig.token[0],
    totalShards: foriliseconfig.sManager.totalShards
})

sManager.on('shardCreate', s => { 
    console.log(`[Forilise]: Launched shard[${s.id}]`);
});

sManager.spawn();