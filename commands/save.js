module.exports = {
    name: 'save',
    description: "saves messages and creates log",
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const target = message.mentions.users.first();
        var fs = require('fs');
        let memberTarget = message.guild.members.cache.get(target.id)
        const User = memberTarget.user.id
        let username = User.tag

       // console.log('author ' + message.author.username + ' target ' + memberTarget.displayName)
        console.log(message.author.username + ' -> ' + memberTarget.displayName)
        //console.log('username ' + username)
        //console.log('author  ' + JSON.stringify(message.author))
        fs.appendFile('log1', ` @${memberTarget.user.id}`, function (err) {
            if (err) throw err;
            console.log('Saved! log1');
        });

    }
}