const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const lines = [];

rl.on('line', function(input) {
    lines.push(input);
});

rl.on('close', function() {
    console.log(1)
})