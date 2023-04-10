// f -> Int -> [String]
// 3 & 5 = FizzBuzz
// 3 = Fizz
//5 = Buzz

const fizzBuzz = (n) => {
    const arr = [];

    for ( let i = 1; i <= n; i++) {
        if ( i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if ( i % 3 === 0 ) {
            arr.push("Fizz");
        } else if ( i % 5 === 0 ) {
            arr.push("Buzz");
        } else {
            arr.push(String(i));
        }
        
    }
    return arr;
}

console.log(fizzBuzz(15))