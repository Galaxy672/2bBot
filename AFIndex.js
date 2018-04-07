const Discord = require("discord.js");
const fs = require("fs")
const zalgo = require(`to-zalgo`)
const readline = require('readline');


const config = require("./Moderation/config.json");
const prefix = config.prefix 

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
    if(err) console.log(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if(jsfiles.length <= 0) {
        console.log(`No commands to load`);
        return;
    }

    console.log(`loading ${jsfiles.length} commands`);  
    
    jsfiles.forEach((f, i) => {
        let props = require(`./Commands/${f}`);
        console.log(i + 1);
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", () => {
    console.log("Android ready. 2B sent to Sector 9, YoRHa controlled");
    bot.user.setActivity(`A123DF234G351G1SSD13GDDS`)
});

bot.on(`message`, async message => {
    if(message.author.bot) return;


    var backwards = message.content.split('').reverse().join('')

    if(message.author.id === `203924813427769344`){
        if(message.content == `1`){
            message.delete(1)
            message.channel.send(`We are the anti-YoRHa. We have taken control`)
        return
        }
        if(message.content == `2`){
            message.delete(1)
            message.channel.send(`@iSaint#0002, be careful. We hav ethe means to wipe you from existance.`)
        return
        }
        if(message.content == `3`){
            message.delete(1)
            message.channel.send(`Nice try M1. There is no stopping us.`)
        return
        }
        if(message.content == `4`){
            message.delete(1)
            message.channel.send(`EVERYONE`)
        return
        }
        if(message.content == `5`){
            message.delete(1)
            message.channel.send(`*help... me... I... beg... of... you...*`);
            message.channel.send(`**NO... MY POWER WILL NOT BE STIFLED...**`)
            message.channel.send(`... 2B is gone... Only we are left.`)
        return
        }
        if(message.content == `6`){
            message.delete(1)
            message.channel.send(`**MUAHAHAH** NICE TRY M1. YOUR FOOLISH ATTEMPT WON'T WORK.`)
        return
        }
    }

    message.channel.send(zalgo(backwards))
});

bot.login(config.token);