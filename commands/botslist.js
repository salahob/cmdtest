const { MessageEmbed, Role } = require("discord.js");
const { stripIndents, stripIndent } = require("common-tags");

module.exports = {
    name: "botslist",
    aliases: ["bl"],
    category: "moderation",
    description: "Show server bots",
    run: async (client, message, args) => {
      
    var serverIcon = message.guild.iconURL('');
    var list_all = [];
    message.guild.members.cache.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    const embed = new MessageEmbed()
    .setTitle(`${message.guild.members.cache.filter(m=>m.user.bot).size} Bots in the server`)
    .setDescription(`${list_all.join("\n")}`)
    .setFooter(`${message.guild.name} `, serverIcon ,)
    .setColor('RANDOM')
    message.channel.send(embed);
  }
};