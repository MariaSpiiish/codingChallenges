// O(n2)

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (arr) => {
    const newArr = [];
    while(arr.length > 0) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr;
}

const arr = [3, 2, 5, 4, 7, 1, 0];

console.log(selectionSort(arr));