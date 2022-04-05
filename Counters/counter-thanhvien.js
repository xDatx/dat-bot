const Discord = require('discord.js');

module.exports = async (client) =>{
    const guild = client.guilds.cache.get('701714856486895626');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('959818197022933024');
        channel.setName(`Tổng Số Thành Viên: ${memberCount.toLocaleString()}`);
        console.log('Update số thành viên');
    },100000);
}

