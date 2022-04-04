const Discord = require('discord.js');
const Distube = require('distube');
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING
    ]
});

const prefix = '!';
const membercounter = require('./Counters/counter-thanhvien');
const fs = require('fs');
const greeting = require("./server greeting");
const ctay = require("./chia tay");


client.commands = new Discord.Collection();







const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Ethan Úc Việt Đây 🟢');
    greeting(client);
    ctay(client);
    membercounter(client);
    client.user.setActivity("Eimi Fukada", {type: 'WATCHING'});
});



client.on('messageCreate', message =>{
    let userz = message.mentions.members.first() || message.member;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        console.log(`${message.author.username} Đã sử dụng lệnh ${command}`);
    }else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
        console.log(`${message.author.username} Đã sử dụng lệnh ${command}`);
    }else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
        console.log(`${message.author.username} Đã sử dụng lệnh ${command}`);
    }else if(command === 'goodbot'){
        client.commands.get('goodbot').execute(message, args);
        console.log(`${message.author.username} Đã sử dụng lệnh ${command}`);
    }else if(command === 'image'){
        client.commands.get('image').execute(message, args);
    }else if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }
});



client.login(process.env.TOKEN);
