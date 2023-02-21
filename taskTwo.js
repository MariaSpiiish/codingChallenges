const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const lines = [];
let counter = 0;
let maxcounter = 0;

rl.on('line', (input) => {
    lines.push(input)
});

rl.on('close', () => {
  for (let i = 1; i < lines.length; i++) {
    if (/^[1]+$/.test(lines[i])) {
      counter = lines[i].length + counter
    } else {
      if (maxcounter < counter) {
        maxcounter = counter
      }
      counter = 0
    }
  }
  if (maxcounter < counter) {
    maxcounter = counter
  }
  console.log(maxcounter);
    process.exit();
})