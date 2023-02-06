// решение 1
// данное на сайте яндекс контест с оберткой, которая мне непонятна

const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});
 
let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    console.log('sd')
    const [jewels, stones] = lines
    let result = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones.charAt(i))) {
            ++result;
        }
    }
    process.stdout.write(result.toString());
});

//решение 2
//в котором я просто перенесла решение 1 в мне понятный вид

// const a = 'fasdf';
// const c = 'fasdfasdf';

// function findJ(jewels, stones) {
//     let count = 0;
//     for (let i = 0; i < stones.length; i++) {
//         if(jewels.includes(stones.charAt(i))) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findJ(a, c))