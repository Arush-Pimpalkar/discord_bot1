module.exports = {
    name: 'gp',
    description: "ghost ping log",
    execute(message, args, discord) {

        const Discord = require('discord.js');
        const fs = require('fs');
        const readline = require('readline');
        let server = message.guild.id
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

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#004444')
                .setTitle('Ping Log')
                .setDescription(lineline[lineline.length - 5] + '\n' + lineline[lineline.length - 4] + '\n' + lineline[lineline.length - 3] + '\n' + lineline[lineline.length - 2] + '\n' + lineline[lineline.length - 1])
            message.channel.send(newEmbed)
            console.log('``')
        }

        processLineByLine()

    }
}