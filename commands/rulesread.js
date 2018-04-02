const Discord = require(`discord.js`);
const roles = require(`../Moderation/roles.json`) 

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.has(roles.Newbie)) return;


    message.member.removeRole(roles.Newbie).catch(console.error);
    message.member.addRole(roles.LA).catch(console.error);
    message.channel.send(`IT WORKS HAHAHAH`)
};

module.exports.help = {
    name: `rulesread`,
};