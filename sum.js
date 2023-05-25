const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const lines = [];

rl.on('line', function(input) {
    lines.push(input)
})

rl.on('close', function() {
    const [len, str] = lines;
    const arr = str.split('');
    let result = +len;
   
    console.log(itterateArr(result, arr));
    process.exit();
    
})

function itterateArr(result, arr) {
    if(arr.length < 4) return -1;

    let chars = {a: 0, b: 0, c: 0, d: 0};
    let tmp = 0;

    for(let i = 0; i < arr.length; i++) {
        if(!(allCharsFound(chars))) {
            chars[arr[i]] = chars[arr[i]] + 1;
        } else if(allCharsFound(chars)) {
            break;
        }
    }

    if(allCharsFound(chars)) {
        tmp = chars['a'] + chars['b'] + chars['c'] + chars['d'];
        if(result > tmp) {
            result = tmp;
        }
        itterateArr(result, arr.splice(1));
    }

    if(!(allCharsFound(chars))) {
        return -1;
        
    }
    
    return result;
}

function allCharsFound(chars) {
    return chars['a'] && chars['b'] && chars['c'] && chars['d'];
  }
