const fs = require('fs');
const readline = require('readline');


async function processLineByLine() {
    const fileStream = fs.createReadStream('ping_log1.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: 2

    });
    const lineline = []
    for await (const line of rl) {

        lineline.push(line)
    }
    let xxx = lineline.length
    console.log(lineline[xxx - 1])
    console.log(lineline[xxx - 2])
    console.log(lineline[xxx - 3])
    console.log(lineline[xxx - 4])
    console.log(lineline[xxx - 5])
}

processLineByLine()