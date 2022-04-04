module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args) {
        if (!args[0]) return message.reply("Hãy nhập số lượng tin nhắn muốn xóa !");
 
        if(isNaN(args[0])) return message.reply("Xin vui lòng nhập số thực!");
 
        if(args[0] >= 100) return message.reply("Không thể xóa trên 100 messages!");
        
        if(args[0] < 1) return message.reply("Bạn phải xóa ít nhất một message!");
 
        await message.channel.messages.fetch({ limit: ++args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
    });
 }
}   