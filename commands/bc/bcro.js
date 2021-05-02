module.exports = {
    name: "bcro",
    aliases: ["bcr",],
    category: "moderation",
    description: "Dm All members",

    run: async (client, message, args, roles) => {

		  
      
         let mention = message.mentions.roles.first()

          const allTrusted = message.guild.roles.cache.get(mention).members
         

              allTrusted.send(`test`) 

            message.channel("User " + member.user.username + " Message sent.") 
		
             
        
    }
}