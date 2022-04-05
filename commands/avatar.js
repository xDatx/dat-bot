const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: "Sending avatar!",
    async execute(message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const avatarURL = member.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
    const embed = new Discord.MessageEmbed()
        .setImage(avatarURL)
        .setURL(avatarURL)
        .setTitle(`Đây là Avatar của Đồng Chí ${member.displayName}`)
        .setColor('RANDOM')
        .setFooter({ text: `Được yêu cầu bởi ${member.user.username}`});
        message.channel.send({ embeds: [embed] });
    }
 }
