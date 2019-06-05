const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on("message", (message) =>{
    if (message.content.startsWith("komaeda, ") {
        let responses = ["No fucking chance.", 
        "You're fucking joking right? Why on Earth would you ask that? Do you have a gosh darn motherfucking deathwish, you motherfucking motherfucker? Never ask me something that disrespectful again.",
        "No.", 
        "Probably.", 
        "Yes! Absolutely.",
        "No fucking chance.",
        "Perhaps.",
        "https://cdn.discordapp.com/attachments/559515079264174097/559891374091010077/perhaps.jpg"];
        let pick = responses[Math.floor(Math.random()*array.length)];
        message.content.send(pick);
    }
});
// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
BOT_TOKEN = "NTg1NjMyMTgxNTA2OTMyNzM2.XPhJ6w.JdkH1R6RJzf3fOEPZd771sEb-k4"

client.login(BOT_TOKEN)
