const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('693897175771381791') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#00ff1f')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`**${ayarlar.prefix}yetkili** Yetkili Komutlarını Gösterir.\n**${ayarlar.prefix}eğlence** Eğlence Ve Kullanıcı Komutlarını Gösterir.\n**${ayarlar.prefix}müzik** Müzik Komutlarını Gösterir!\n**${ayarlar.prefix}radyo** Radyo Komutlarını Gösterir.D`)  
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yar','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};