const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!**`))
let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!user) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setTitle("Hata Kullanım!").setDescription(`Banlanıcak Kişiyi Seçmelisin.`))
let sebep = args.slice(1).join(' ') || 'Bir sebep belirtirmemiş'
 message.guild.members.ban(user, { reason: sebep, days: 7 });

 const banembed = new Discord.MessageEmbed()   
  .setColor("BLUE")                                                                                   
  .setThumbnail(message.author.avatarURL({ dynamic: true }))
  .addField(`__**Banlayan yetkili:**__`, `${message.author}`)
  .addField(`__**Banlanan:**__`, `${user.user.tag}`)
  .addField(`__**Sebep:**__`, `${sebep}`)
  .setImage("https://i.pinimg.com/originals/b2/84/33/b28433c392959f923ff0d736cd89dcbd.gif");
   message.channel.send(banembed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban',
  description: 'Kişiyi banlar',
  usage: 'ban'
};