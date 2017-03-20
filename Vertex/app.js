const Discord = require('discord.js');
const client = new Discord.Client();
const setting = require('./setting.json')
client.on('ready',() => {
  console.log("Online");
})
var prefix = "v!"
if (message.author === client.user) return;
client.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.reply ('pong');
  }
})

client.login(setting.token);
