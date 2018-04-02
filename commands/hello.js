const Discord = require(`discord.js`);


module.exports.run = async (bot, message, args) => {
    if(message.author.id === `239757720239079437`){
        //Galaxy's hello   
        //I grovel to you, Supreme Leader Master all knowing Galaxy
        message.channel.send(`I grovel beneath your laurels, Supreme Leader Galaxy.`);
        return;
    }
    if(message.author.id === "203924813427769344"){
        //M1's hello
        message.channel.send("Mantenaince finished, M1?")
        return;
    } 
    if(message.author.id === `148126300920348673`){
        //Lilyeth's hello
        message.channel.send(`What is up, Best Girl Lilyeth?`)
        return; 
    } else {
        message.channel.send(`Hello, ${message.author.username}`)
    }
};

module.exports.help = {
    name: "hello",
    name: `Hello`
};