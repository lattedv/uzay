const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      new MessageEmbed()
        .setColor("BLUE")
        .setDescription(
          `**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!**`
        )
    );
  let user = args[0];
  const banList = await message.guild.fetchBans();
  if (!user || isNaN(user) || !banList.has(user)) {
    return message.channel.send(
      new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Hata Kullanım ")
        .setDescription(
          `**Hatalı ID veya kullanıcı banlı değil.**`
        )
    );
  }
  message.guild.members.unban(user);
  message.channel.send(
    new MessageEmbed()
      .setColor("BLUE")
      .setTitle("Başarılı")
      .setDescription(
        `<@${args[0]}> \`(${
          args[0]
        })\` **adlı kullanıcının yasağı kaldırıldı.**`
      )
  );
};

exports.conf = {
  aliases: ["un-ban"]
};

exports.help = {
  name: "unban"
};