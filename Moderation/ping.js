const roles = require(`../Moderation/roles.json`) 
const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    message.channel.send(`pong`)
}

module.exports.help = {
    name: `ping`  
};          
