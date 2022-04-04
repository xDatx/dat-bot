module.exports = (client) => {
    const channelId = "959726045316128789";
    client.on("guildMemberRemove", (member) => {
        console.log(member);
        const message = `Tạm biệt <@${member.id}>.Cảm ơn bạn đã tham gia server của chúng tôi 😢`;
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};