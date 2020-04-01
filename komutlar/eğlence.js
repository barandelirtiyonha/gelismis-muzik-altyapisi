const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('693897175771381791') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Eğlence Ve Kullanıcı - Komutlar`)
        .setDescription(`**${ayarlar.prefix}avatar** Avatarını Gösterir\n ` + `**${ayarlar.prefix}csgo**  Kişinin Csgo Bilgilerini Gösterir!\n` + `**${ayarlar.prefix}gifara**  İstediğiniz Gifi Arar.\n` + `**${ayarlar.prefix}havadurumu** Hava Durumunu Gösterir.\n` + `**${ayarlar.prefix}oyun-ara** İstediğiniz Oyun Bilgilerini Gösterir!\n` + `**${ayarlar.prefix}** Sunucudan Banlananları Göstetir\n`+`**${ayarlar.prefix}üyedurum** Üyelerin Durumunu Gösterir\n` + `**${ayarlar.prefix}döviz** Döviz Kurlarını Gösterir.\n `)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['user'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};