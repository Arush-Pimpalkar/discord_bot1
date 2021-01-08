module.exports = {
    name: 'time',
    description: "pushes photos of ppl",
    execute(message, args) {
        var d = new Date()
        var hour = d.getHours()
        var min = d.getMinutes()
        let sec = d.getSeconds()
        message.channel.send('time - ' + hour + ':' + min + ':' + sec)
    }
}