const Discord = require("discord.js");
const fs = require("fs")
const zalgo = require(`to-zalgo`)

//    //    

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
    bot.user.setStatus('invis')
    console.log("Android ready. 2B sent to Sector 69, YoRHa controlled");
    bot.user.setActivity(`A123DF234G351G1SSD13GDDS`)
});

bot.on(`message`, async message => {
    if(message.author.bot) return;

    message.content.toLowerCase

    let messageArray = message.content.split(" ")
    let command = messageArray[0]
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});

bot.login(config.token);