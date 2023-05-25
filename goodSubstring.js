function f1(str /* : String */) /* : String | void */ {
    const result /* : Array < Char > */ = [];

    

    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
        
        if (isGoodString(result.join(''))) {
            return result.join('');
        }
    }

    return null;
}

function isGoodString(str /* : String */) /* : boolean */ {
    const chars = {};
    for (let i = 0; i < str.length; i++) {
        if (!chars[str[i]]) {
            chars[str[i]] = 0;
        }
        chars[str[i]]++;
    }
    return !!(chars['a'] && chars['b'] && chars['c'] && chars['d']);
}

function go(str /* : String */) /* : String | -1 */ {
    let shortest = null;

    for (let i = 0; i < str.length; i++) {
        const s = str.slice(i);
        const ss = f1(s);
        
        if (!shortest || (ss && ss.length < shortest.length)) {
            shortest = ss;
        }
    }
    
    return shortest ? shortest.length : -1;
}

console.log(go('aaaabbbbccc'));