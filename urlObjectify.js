const data = "user.name.firstname=Bob&user.name.lastname=Smith&user.favouritecolor=Light%20Blue&experiments.theme=dark";

function queryObjectify(str) {
    const res = {};

    const arr = str.split('&').map(i => i.split('.'))

    for(let i = 0; i < arr.length; i++) {
        let current = res;

        for(let key = 0; key < arr[i].length; key++) {
            let val = arr[i][key];
            if(key == arr[i].length - 1) {
                val = val.split('='); // [firstname, Bob]
                current[val[0]] = decodeURIComponent(val[1]);
                break;
            }
            if(current[val]) {
                current = current[val];
            } else {
                current[val] = {};
                current = current[val];
            }
            
        }
    }

    return res;
}

console.log(queryObjectify(data));
