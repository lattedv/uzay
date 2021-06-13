const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if(!message.member.roles.cache.some(r => [(ayarlar.registeryetki)].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))return message.reply(`**\<:dev:853551852964675585> Bu komut __YETKİLİLERE__ özel bir komut.**`)
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadın`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`<a:elmaskirmizi:816572857731121172> Toplam Kayıtların: \`${kayıtlar}\`
:man: Toplam Erkek Kayıtların: \`${erkek}\`
:girl: Toplam Kadın Kayıtların: \`${kadın}\``)
.setColor('#dcdd64')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kadın1 = db.fetch(`yetkili.${kullanıcı.id}.kadın`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setDescription(`<a:elmaskirmizi:816572857731121172> Toplam Kayıtların: \`${kayıtlar1}\`
:man: Toplam Erkek Kayıtların: \`${erkek1}\`
:girl: Toplam Kadın Kayıtların: \`${kadın1}\``)
.setColor('#dcdd64')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgu", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "kayıt-bilgi"
}