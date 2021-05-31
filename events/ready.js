const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] SANCTUS ALTYAPI: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] SANCTUS ALTYAPI: ${client.user.username} İsmi İle Giriş Yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] SANCTUS ALTYAPI:`);
  client.user.setStatus("dnd");
  //idle : Boşta dnd : rahatsız Etmeyin online : çevrimiçi
 client.user.setActivity("SANCTUS <3 SİZ", { type: "WATCHING" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] SANCTUS ALTYAPI: Oyun ismi ayarlandı!`);
};