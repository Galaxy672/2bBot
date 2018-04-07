const roles = require(`../Moderation/roles.json`) 
const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => { 
    let toMute = message.mentions.members.first();

    if(!message.member.hasPermission(`MANAGE_MESSAGES`)){
        message.channel.send(`Improper Clearance`);
        return;
    };

    if(!toMute) return message.channel.send(`Undefined mute value.`)

    if(toMute === message.member) return message.channel.send(`Cannot mute self.`)

    toMute.addRole(roles.Muted)

    message.author.send(`muted ${toMute}.`)
}

module.exports.help = {
    name: `mute`,
};          
