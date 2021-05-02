const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");


const client = new Client({
    disableEveryone: true
});
client.on('ready', () => {
    let statuses = [
        'Aipe Store 🎀',

    ]

  let autoChangeStatus = setInterval(function(){
    let status = statuses[Math.floor(Math.random()*(statuses.length - 1))]
    client.user.setActivity(status);

  },5000)
});

client.on('ready', () => {
	console.log(`${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`);
	console.log(`${client.users.cache.size} Members`);
	console.log(`${client.channels.cache.size} Channels`);
	console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
	client.user.setActivity(`Aipe 🎀`, { type: 'PLAYING' });
});
config({
    path: __dirname + "/.env"
});
client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (error, files) => {
    files = files.filter(f => f.endsWith(".js"))
    files.forEach(f => {
        const command = require(`./commands/${f}`)
        client.commands.set(command.name, command)
        console.log(`Command ${command.name} was loaded!`)
    });
});



client.commands = new Collection();
client.aliases = new Collection();
client.on("message", async message => {
	const prefix = "!";
			

	/*		const OwenerId = "504390382340145152";
			if(message.author.id !== OwenerId) {
			  if (message.author.bot) return;
			  
			return;
		  }*/
		  
		  
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});



client.on('message', message => {
  if(message.mentions.users.first() && message.mentions.users.first().id == client.user.id){
    message.reply(`The prefix is \`${process.env.prefix}\``)
    }
})

client.login(process.env.TOKEND);