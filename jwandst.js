const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let lines = [];

rl.on('line', function(input) {
    lines.push(input);
})

rl.on('close', function() {
    const [jewels, stones] = lines;
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones.charAt(i))) {
            count++;
        }
    }
    console.log(count);
    process.exit();
    
})

