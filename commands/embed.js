module.exports = {
    name: 'embed',
    description: "embeds",
    execute(message, args, discord) {
        let x = 'blalalal'
        const newEmbed = new discord.MessageEmbed()
            .setColor('#010821')
            .setTitle('ping log')
            .setDescription()
        message.channel.send(newEmbed)
    }

}
