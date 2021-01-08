const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
var d = new Date()
var prefix = '-'

client.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands/.').filter(file => file.endsWith('.js'));
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}


client.on('message', message => {
    let server = message.guild.id
    const args = message.content.slice(prefix.length).split(/ +/);
    //  const command = args.shift().toLowerCase();
    const target = message.mentions.users.first()
    if (target === undefined) { }
    else {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;   // IST offset UTC +5:30 
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()

        const target = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(target.id)
        console.log('@' + message.author.username + ' -> ' + '@' + memberTarget.displayName)
        fs.appendFile(`${server}.txt`, ` @${message.author.username} -> @${memberTarget.displayName} at ${hoursIST}:${minutesIST}\n`, function (err) {
            if (err) throw err;
        });
    }
    if (message.content === '-gp') {

        message.react('🆗')
        client.commands.get('gp').execute(message, args)
    }
    if (message.content === '-time') {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;   // IST offset UTC +5:30 
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
        message.channel.send(`${hoursIST}:${minutesIST}`)
    }
    if (message.content === '-embed') {
        client.commands.get('embed').execute(message, args, Discord)
    }
    if (message.content === '-121') {
        message.channel.send(server)
    }
    if (message.mentions.everyone) {
        var d = new Date()
        var hour = d.getHours()
        var min = d.getMinutes()

        console.log('@' + message.author.username + ' -> @everyone')
        fs.appendFile(`${server}.txt`, ` @${message.author.username} -> @everyone at ${hour}:${min} \n`, function (err) {
            if (err) throw err;
        });
    }
    if (guild === null || guild === undefined) { return }
});

client.login(process.env.token)