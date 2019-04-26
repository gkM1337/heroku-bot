const Discord = require('Discord.js');
const bot = new Discord.Client();

const fs = require("fs")

const token = 'NTY5NTQzMTI0MTI5Njc3MzIy.XLyP3Q.5K0YscRV9Nrkm10NyCB7lMe-4w0';

const prefix = "!";

bot.on('ready', () =>{
    console.log('Ez a bot online!');
    bot.user.setActivity('Bot By.:gkM', { type: 'PLAYING'}).catch(console.error);
