const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(":Alarm2: Arrow Bot | Moderasyon Menüsü :Alarm2:")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔════════════════════════════════════╗
║**»** **a!ban** : Sunucudan bir üyeyi yasaklar.
║**»** **a!unban** : İstediğiniz kişinin banını kaldırır.
║**»** **a!sil** : Belirli bir kanaldaki mesajları siler.
║**»** **a!kick** : Sunucudan bir üye kickler.
║**»** **a!yavaş-mod** : Sohbete yazma sınır (süre) ekler.
║**»** **a!kilitle** : Kanalı istediğiniz kadar süreyle kitler.
║**»** **a!kategori-oluştur** : Yeni Bir Kategori Açar.
║
║**»** \`\`\a!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**
║
╚════════════════════════════════════╝
`) 
       .addField(`» Arrow Bot Bağlantıları`, `:ate:  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=728920362636542032&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/G5CZFT3) **|** [WebSitesi](http://ab.arrow-bot.tk/) :ate:`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["mod"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'moderasyon', 
    description: '',
    usage: ''
  };