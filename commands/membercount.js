const { MessageEmbed, Role } = require("discord.js");
const { stripIndents, stripIndent } = require("common-tags");

	const prefix = "!";
module.exports = {
    name: "mc",
    aliases: ["rm","membercount","inforole"],
    category: "moderation",
    description: "Show the members who have the role",
    run: async (client, message, args) => {
        var serverIcon = message.guild.iconURL('');

    const Error1 = new MessageEmbed()
        .setFooter(`${message.guild.name} `, serverIcon ,)
        .addField('User:',stripIndents `${message.author}`, true)
        .addField('Error:',stripIndents`\`❌|Please, provide a Role name!\``, true)
        .setTimestamp()
        .setColor('RED')
    const Error2 = new MessageEmbed()
        .setFooter(`${message.guild.name} `, serverIcon ,)
        .addField('User:',stripIndents `${message.author}`, true)
        .addField('Error:',stripIndents`\`❌|${args[0]} is not a valid Role!\``, true)
        .setTimestamp()
        .setColor('RED')
 
    if (!args[0]) {
        return message.channel.send(Error1)
    }
    const role = message.guild.roles.cache.get(`${args[0]}`);

    /* if (!role) {
        return message.channel.send(Error2)
    };*/
	
	let mention = message.mentions.roles.first()
	let mentionId = mention.id
    //const allTrusted = message.guild.roles.cache.get(`${mention}`).members.map(m=>'<@'+m.user.id+'>').join('\n');
	//const allTrusted = message.guild.roles.cache.get(mention.id).members
const allTrusted = message.guild.roles.cache.get(mention.id || args[0]).members.map(m=>'<@'+m.user.id+'>').join('\n');
     const RolesList = new MessageEmbed()
        .setTitle(`${message.guild.roles.cache.get(mention.id).members.size} Members in this role `)
        .setFooter(`${message.guild.name} `, serverIcon ,)
        .setColor('RANDOM')
        .setTimestamp()

    console.log(message.guild.members)



    message.channel.send(RolesList)
 
 
    }
}