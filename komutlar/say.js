const db = require ("quick.db");

const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  
   var tag = "Tagınız"
   var etikettag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "etiket tagınızı giriniz").size;
   var ailem = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag) || member.user.discriminator == "0099").size;
   var üye =  message.guild.memberCount
   var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
   var tag = message.guild.members.cache.filter(a => a.user.username.includes(tag)).size
   var sestekiüye = message.guild.members.cache.filter(s => s.voice.channel).size;
  
  
  
  
  
  
  
}