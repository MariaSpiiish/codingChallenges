// function countdown(n) {
//     console.log(n);

//     // the basecase
//     if (n <= 0) return;

//     // the recursive case
//     countdown(n - 1);
// }

// countdown(5);

// function sum(arr) {
//     if (arr.length === 0) return 0;

//     return arr[0] + sum(arr.splice(1));
// }

// console.log(sum([1]));

// function countLength(arr) {
//     if (arr.length === 0) return 0;

//     return 1 + countLength(arr.splice(1))
// }

// console.log(countLength([1, 2, 3, 4, 5]))

function findMax(arr) {
    if (arr.length === 2) return (arr[0] > arr[1]) ? arr[0] : arr[1];

    let sub_max = findMax(arr.splice(1));

    return (arr[0] > sub_max) ? arr[0] : sub_max;
}

console.log(findMax([5, 1, 7, 2, 3, 0]))
