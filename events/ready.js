const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT:`);
  client.user.setStatus("dnd");
 client.user.setActivity("Oynuyor", { type: "WATCHING" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};