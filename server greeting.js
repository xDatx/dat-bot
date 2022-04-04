module.exports = (client) => {
    const channelId = "959276029329952798";
    client.on("guildMemberAdd", (member) => {
        console.log(member);
        const message = `Chào mừng đến với server nha <@${member.id}>, vui lòng đọc kĩ luật và nói yêu em nha OwO 🎁🎁✨❤!`;
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
    });
};