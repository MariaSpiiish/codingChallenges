const num = '855168885528863526668896';

const obj = {}
const arr = [...num];

for (let i = 1; i < 10; i++) {
    obj[i] = [];
}

arr.forEach((item) => {

    obj[item].push(item);
})

let result = 0;

for (let key in obj) {
    if(+key === obj[key].length) {
        result = Math.max(result, key)
    }
}

console.log(result)
