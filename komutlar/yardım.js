const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
  message.channel.send(new Discord.MessageEmbed().setColor('#32cd32').setDescription(`\<a:onaygif:853590900801798146> **BOŞ YARDIM MENÜSÜ**
  
\`.e : belirttiğiniz kullancıyı erkek olarak kayıt eder.\`  
\`.k : belirttiğiniz kullancıyı kadın olarak kayıt eder.\` 
\`.ban : belirttiğiniz kullancıyı sunucudan yasaklar.\` 
\`.kick : belirttiğiniz kullancıyı sunucudan atar.\` 
\`.unban : belirttiğiniz kullancının yasağını kaldırır.\` 
\`.sil : belirttiğiniz sayıda mesajı siler.\`
\`.nuke : kanalı siler ve kopyasını oluşturur.\`
\`.top : top kayıtcıları gösterir.\`
\`.stat : belirttiğiniz kullancının loglarını gösterir.\`
\`.ping : botun pingini gösterir.\`
\`.yardım : botun yardım menüsüne erişim sağlar.\`
  
**Latte** \<:dev:853551852964675585>  
  
  `).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/799170794688217109/799282353192304680/kel20olmak.png'))


  //message.channel.send(embed);
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['help', 'bilgi'],
    permlevel: 0
};

exports.help = {
    name: "yardım"
}