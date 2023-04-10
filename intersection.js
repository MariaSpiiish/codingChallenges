const arr = [10, 12, 15, 21]

for(var i = 0; i < arr.length; i++ ){
    
    setTimeout(function(i) {
        console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
    }, 1000, i)
}

console.log('end')