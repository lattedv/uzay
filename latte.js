const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const chalk = require("chalk");
const ayarlar = require("./ayarlar.json");
var prefix = ayarlar.prefix;

require('./util/eventLoader')(client);



const log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//BOTU SESE SOKMA
client.on("ready", async() => {
    let botVoiceChannel = client.channels.cache.get(ayarlar.seskanal);
    console.log("Bot Ses Kanalına bağlandı!");
    if (botVoiceChannel)
        botVoiceChannel
        .join()
        .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});




client.login(ayarlar.token);

//tag mesaj

client.on("message", latte => {
    if (latte.content.toLowerCase() === "tag") {
        latte.channel.send("Tagınız"); // "Tagınız" KISMINA KENDI TAGINIZI GIRIN
    }
});

client.on("message", latte => {
    if (latte.content.toLowerCase() === ".tag") {
        latte.channel.send("Tagınız"); // "Tagınız" KISMINA KENDI TAGINIZI GIRIN
    }
});


client.on("message", latte => {
    if (latte.content.toLowerCase() === "!tag") {
        latte.channel.send("Tagınız"); // "Tagınız" KISMINA KENDI TAGINIZI GIRIN
    }
});

client.on("guildMemberAdd", member => {
    member.setNickname("İsim | Yaş"); //SUNUCUYA KATILAN KIŞILERIN ISMINI AYARLAR
});

client.on("userUpdate", async(oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
        const tag = '31'
        const sunucu = '867405225719889940'
        const log = '867414924861767701'
        const rol = '867414209130397716'

        try {

            if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
                await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
                await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
                await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
            }
            if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
                await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
                await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
                await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
            }
        } catch (e) {
            console.log(`Bir hata oluştu! ${e}`)
        }
    }
});