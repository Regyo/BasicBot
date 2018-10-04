const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

client.on('message', msg => {
    if(msg.content == `${prefix}ping`) {
        msg.channel.send(client.ping);
    }
});

client.login("")