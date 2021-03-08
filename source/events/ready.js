const colors = require('colors');

module.exports = async(client) => { 
    const s = [
        { name: `💖| Você pode me adicionar com o comando f..adicionar`, type: 'WATCHING'},
        { name: `❓| Você sabia que meu prefixo padrão é f. ?`, type: 'PLAYING'},
        { name: `🐛| Achou algum bug? Use o comando f.reportbug [report]`, type: 'LISTENING'},
        { name: `😍| Estou em ${client.guilds.cache.size} servidores!`, type: 'PLAYING'}
      ];
    
      setInterval(() => {
        const rS = s[Math.floor(Math.random() * s.length)];
        client.user.setPresence({ activity: rS });
      }, 10000);
    console.log(colors.rainbow(`[Forilise]: `)+ `Forilise is ready to execute commands, running on ${require('../../package.json').version}`)

}