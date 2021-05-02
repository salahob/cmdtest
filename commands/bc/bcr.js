module.exports = {
    name: "bruh",
    aliases: ["bcr",],
    category: "moderation",
    description: "Dm All members",

    run: async (client, message, args) => {
 /*       if(member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("You Don't have permission !")}
        if(args.length <= 0){
        return message.channel.send("You cannot send an empty message.")}

         message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online' || member.presence.status === 'idle' || member.presence.status === 'dnd');
            let onlineUsers = []
            totalOnline.forEach(totalOnline => {
                if (!totalOnline.user.bot) {
                    console.log("[ONLINE] " + totalOnline.user.username)
                    onlineUsers.push(totalOnline.user.id)
                }
            })
        })
 */
        
         message.guild.members.cache.forEach(member => { 
   
              member.send(`${args[1]}`) 

            message.channel.send("User " + member.user.username + " Message sent.") 
             
             
        })
    }
}