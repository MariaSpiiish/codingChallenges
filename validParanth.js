function validateStr(str) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < str.length; i++) {
        if (isClosedBracket(str[i])) {
            if(brackets[str[i]] !== stack.pop()) return false;
        } else {
            stack.push(str[i]);
        }
    }

    return stack.length === 0;
}

function isClosedBracket(char) {
    return [')', '}', ']'].indexOf(char) > -1;
}

console.log(validateStr('(()'));

