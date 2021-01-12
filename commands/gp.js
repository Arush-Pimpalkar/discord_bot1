module.exports = {
    name: 'gp',
    description: "ghost ping log",
    execute(message, args, discord) {

        const Discord = require('discord.js');
        const fs = require('fs');
        const readline = require('readline');
        let server = message.guild.id
        var msct = message.content.split(" ")
        let msctnnumber = msct[1]
        if (msctnnumber === undefined) { msctnnumber = 5 }
        console.log(msctnnumber)
        async function processLineByLine() {
            const fileStream = fs.createReadStream(`${server}.txt`);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: 2
            });

            const lineline = []
            for await (const line of rl) {
                lineline.push(line)
            }


            var last4 = lineline.slice(-msctnnumber)
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#3AE6CA')
                .setTitle('Ping Log')
                .setDescription(last4)
            message.channel.send(newEmbed)
            console.log('``')


        }

        processLineByLine()

    }
}