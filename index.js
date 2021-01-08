const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
var d = new Date()
var hour = d.getHours()
var min = d.getMinutes()



console.log('date ' + hour + ':' + min)

const fs = require('fs');
client.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands/.').filter(file => file.endsWith('.js'));
//console.log('commoand ' + commandfiles)
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);

    //console.log('command ' + JSON.stringify(command))

    client.commands.set(command.name, command)
}



client.once('ready', () => {
    console.log('OnLine');
});

client.on('message', message => {

    //if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    client.commands.get('save').execute(message, args)

    
        if (command === 'shreyak') {
            message.channel.send('https://cdn.discordapp.com/attachments/736778589650812988/773826679994187776/unknown.png')
        }
        else if (command === 'parth') {
            message.channel.send('https://cdn.discordapp.com/attachments/793419106845589526/793442831188230185/dhamale.png')
        }
        else if (command === 'gondi') {
            message.channel.send('https://cdn.discordapp.com/attachments/793419106845589526/793442870547841064/gondi_bot.png')
        }
        else if (command === 'arush') {
            message.channel.send('https://cdn.discordapp.com/attachments/793419106845589526/793443235191980052/Screenshot_2020-11-05_140854.jpg')
        }
        else if (command === 'gp1') {
            message.channel.send('`@.exe ghost pinged, kick him`')
        }
        else if (command === 'time') {
            client.commands.get('time').execute(message, args)
        }
        else if (command === 'puskar' || command === 'pushkar' || command === 'pushar') {
            message.channel.send('https://cdn.discordapp.com/attachments/760384044939608104/793741407797903400/IMG_20201119_134223.JPG')
            message.channel.send('https://cdn.discordapp.com/attachments/760384044939608104/793743203688775720/unknown.png')
        }
        else if (command === 'mute') {
            client.commands.get('mute').execute(message, args)
        }
        else if (command === 'unmute') {
            client.commands.get('unmute').execute(message, args)
        }
        else if (command === 'gp') {
            client.commands.get('gp').execute(message, args)
        }
        else if (command === 'save'){
            client.commands.get('save').execute(message, args)
            message.channel.send('saving...')
        }
});
client.login('NzkzNDE4NDc0MjQ0MTQ1MTgy.X-r-iQ.ZMVttXXRhDa55_WMehNN0wLcOQs');