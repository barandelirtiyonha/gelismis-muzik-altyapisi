const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('681938616611897365') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yetkili - Komutlar`)
        .setDescription(`**${ayarlar.prefix}değişiklikler** Gelen Güncellemeleri Gösterir !\n**${ayarlar.prefix}spam-engel <aç-kapat>** Spamlamayı Engeller!.\n**${ayarlar.prefix}temizle <sayı>** Mesajları Siler.\n**${ayarlar.prefix}otorol @rol> <#kanal>** Sunucuya Giren Kişilere Rol Verir.\n` + `**${ayarlar.prefix}prefix-ayarla** Botun Sunucudaki Prefixini Değiştirir !.\n**${ayarlar.prefix}kayıt** Kayıt Sistemini Gösterir.\n**${ayarlar.prefix}davet-takip** Davet Takipleri Gösterir.\n**${ayarlar.prefix}tag** Oto Tag Sistemini Gösterir.\n**${ayarlar.prefix}seviye** Etiketlenen Kullanıcının Seviyesini Gösterir!\n**${ayarlar.prefix}seviye-liderlik** Seviye Sıralamasını Gösterir !\n**${ayarlar.prefix}ayrıl** Botun Bulunduğu Kanaldan Ayrılmasını Sağlar !\n**${ayarlar.prefix}yazı-kanal-aç** Metin Kanalı Oluşturur !\n**${ayarlar.prefix}reboot** Botu Yeniden Başlatır !\n**${ayarlar.prefix}reklam-taraması** reklam taraması yapar !`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yet','authorized'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};