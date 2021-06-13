const Spectrum = require("discord.js");
const ayarlar = require("../ayarlar.json")
const filter = m => m.content.includes('discord');
module.exports.run = async (client, message, args) => {
const msg = message;
const reactionFilter = (reaction, user) => {
    return ['emojiID'].includes(reaction.emoji.id) && user.id === msg.mentions.users.first().id;
}
if (!message.member.voice.channel) { 
return message.channel.send("Ses kanalında olman lazım!"); 
}
let kullanıcı= message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])) 
if (!kullanıcı) return message.channel.send(`Bir Kullanıcı Etiketlemelisin!`);
if (!msg.mentions.users.first()) return;
if (!msg.guild.member(msg.mentions.users.first()).voice.channelID) return message.channel.send(`Kullanıcı Ses Kanalında Değil.`); 
if (message.mentions.users.first() === message.author)
return message.channel.send("Kendini seçemezsin.");
const spectrum = new Spectrum.MessageEmbed()
  .setDescription(`Merhaba ${msg.mentions.users.first().username}, ${msg.author} bulunduğun sesli kanala gelmek istiyor, kabul ediyor musun?`)
msg.channel.send(spectrum).then(async (asd) => {
    await asd.react("emojiID");
    asd.awaitReactions(reactionFilter, {
        maxProcessed: 1,
        time: 20000,
        errors: ['time']
    }).then(async(c) => {
        await msg.member.voice.setChannel(msg.guild.member(msg.mentions.users.first()).voice.channelID);
        asd.delete();
    }).catch(async(e) =>{
        await asd.delete(20000);
    })
})

}
 module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'git',
  description: '',
  usage: ''
}