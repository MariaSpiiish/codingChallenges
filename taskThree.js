const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const lines = [];

rl.on('line', function(input) {
    lines.push(input);
})

rl.on('close', function() {
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i] !== lines[i + 1]) {
            console.log(lines[i]);
        }
    }
    
    process.exit();
})