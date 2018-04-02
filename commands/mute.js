const roles = require(`../Moderation/roles.json`) 
const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    console.log(message.mentions.members.first());
}

module.exports.help = {
    name: `mute`,
    name: `Mute`  
};          
// if(!message.member.hasPermission(`MUTE_MEMBERS`)){
//    message.channel.send(`You do not have proper permissions to execute command "Mute".`);
//    return; 
//} else {
//    message.mentions.members.addRole(roles.Muted)
//}