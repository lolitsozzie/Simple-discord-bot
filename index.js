const Discord = require('discord.js');
const moment = require('moment');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
  console.log('ready')
})

client.on('message', message => {

  console.log(message.content);

  if(message.content.startsWith(`${prefix}time`)){
    message.channel.send(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }

  if(message.content.startsWith(`${prefix}beep`)){
    message.channel.send('boop');
  }

  if(message.content.startsWith(`${prefix}pic`)){
    message.channel.send({files: ["./images/" + (getRandomInt(3) + 1) + ".png"]});
  }

  if(message.content.startsWith(`${prefix}random`)){
    message.channel.send(getRandomInt(10) + 1);
  }

})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.login(token);
