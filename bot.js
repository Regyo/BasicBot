const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "r!"

client.on('message', msg => {
    if(msg.content.startsWith('r!ping')) {
        msg.channel.reply(client.ping);
    }
});

client.login("")
