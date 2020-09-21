const fs = require("fs");
const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require ('./config')

const client = new Client();

client.on('ready', () => {
    console.log(`Connected`);
    client.user.setActivity('BLACKPIИK', {type: "LISTENING"});
  });

// Tes commandes whoula

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  
    const cmd = message.content.split(' ')[0].slice(PREFIX.length);
  
    if (cmd === "ping") {
      message.channel.send(`${client.ws.ping}ms`);
    };
  });

client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}BP`)) message.channel.send("https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Logo-Pink-PNG.jpg?ssl=1\n
diff\n-BLACKPIИK 듣기 \nTrad: Ecoutez BLACKPIИK\n
");
});

//Token
client.login( TOKEN );