const Discord = require('discord.js');
module.exports = {

    name: 'goodbot',
    description: "this is a goodbot command!",
    execute(message, args){
        message.reply(`Cảm ơn, bạn thật tốt bụng ${message.author.username} 🥰😘`);
    }
}