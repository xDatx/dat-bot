var Scraper = require('images-scraper');
const discord = require('discord.js');
const google = new Scraper({
    puppeteer: {
        headless: true

    }
})

module.exports = {
    name: 'image',
    description: 'send some image',
    async execute( message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Xin hãy nhập tên bức ảnh');
        var random = Math.floor(Math.random() * 50) +1;
        var random1 = Math.floor(Math.random() * 70) +1;
        const image_result = await google.scrape(image_query, 100);      
        message.channel.send(image_result[random].url);
        message.channel.send(image_result[random1].url);
        console.log(`Số được chọn là ${random} và ${random1}`);
    }
}