const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`).then(beta => beta.delete({timeout: 3000}));
  if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin!`).then(beta2 => beta2.delete({timeout: 3000}));;
  message.delete();
  let rexussayi = Number(args[0]);
  let rexussilinen = 0;
  for (var i = 0; i < (Math.floor(rexussayi/100)); i++) {
    message.channel.bulkDelete(100).then(r => rexussilinen+=r.size);
    rexussayi = rexussayi-100;
  };
  if (rexussayi > 0)  message.channel.bulkDelete(rexussayi).then(r => rexussilinen+=r.size);
  message.channel.send(`**\`\`${args[0]}\`\` Adet Mesaj Silindi.** !`).then(beta3 => beta3.delete({timeout: 5000}));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil"],
  permLevel: 0
};

exports.help = { 
  name: 'sil',
  description: 'Belirtilen miktarda mesajı temizler. (Beta <3)',
  usage: 'temizle <miktar>',
  kategori: 'yetkili'
};