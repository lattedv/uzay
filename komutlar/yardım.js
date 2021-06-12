const Discord = require("discord.js");


exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  
  .setTitle("BOŞ YARDIM MENÜSÜ")
  .addField("```.e:Belirttiğiniz kullanıcıyı erkek olarak kayıt eder.```")
  .addField(".**k**", `Belirttiğiniz kullanıcıyı kadın olarak kayıt eder.`) 
  .addField(".**nuke**", `Kanalı siler ve kopyasını oluşturur.`) 
  .addField(".**ban**", `Belirttiğiniz üyeyi sunucudan yasaklar.`) 
  .addField(".**kick**", `Belirttiğiniz üyeyi sunucudan atar.`) 
  .addField(".**sil**", `Belirttiğiniz sayıda mesajı siler.`) 
  .addField(".**isim**", `Belirttiğiniz üyenin ismini değiştirir.`) 
  .addField(".**ping**", `Botun pingini gösterir.`) 
  .addField(".**say**", `Sunucu hakkında bilgi verir.`) 
  .addField(".**top**", `Kayıt sıralamasını gösterir.`) 
  .addField(".**kayıtsız**", `Belirttiğiniz üyenin tüm rollerini alır ve kayıtsız rolü verir.`) 


message.channel.send(embed)
}



exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
}
exports.help = {
  name: "yardım",
  description: "botun yardım menüsünü gösterir.",
  usage: "yardım"
}