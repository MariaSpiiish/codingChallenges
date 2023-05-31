// function removeElement(k /* : Number */, arr /* : Array <n, Number> */) /* : Array <n-1, Number> */{
//     arr.splice(k, 1);
//     return arr;
// }

// function hasEqualNuEl(arr /* : Array <n, Number> */) /* : boolean */ {
//     const nums = {};

//     arr.forEach(i => {
//         if (!nums[i]) {
//             nums[i] = 0;
//         }
//         nums[i]++;
//     })

//     const objVal = Object.values(nums);
//     for (let i = 0; i < objVal.length; i++) {
//         if(!objVal[i + 1]) break;
//         if(objVal[i] !== objVal[i + 1]) {
//             return false;
//         }
//     }
    
//     return true;
// }

// function isBoring(arr) {
//     let result = false;
//     for (let i = 0; i < arr.length; i++) {
//         const clone = arr.slice(0);

//         const arrSliced = removeElement(i, clone);
//         if(hasEqualNuEl(arrSliced)) {
//             result = true;
//             break;
//         }
//     }
//     return result;
// }

// function getLength(arr) {
//     const arrLength = arr.length;
//     let result = 0;
//     let arrShifted = [];
//     for(let i = 0; i < arrLength; i++) {
//         arrShifted.push(arr.shift());
        
//         if(isBoring(arrShifted)) {
//             result = arrShifted.length;
//         } else {
//             continue;
//         }
//     }
//     return result;
// }

// console.log(getLength([1,2,3,1,2,2,3,3,3,1,4,4,5]))

function hasEqualNuEl(arr) {
    const nums = {};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (!nums[num]) {
        nums[num] = 0;
      }
      nums[num]++;
    }
  
    const objVal = Object.values(nums);
    for (let i = 0; i < objVal.length - 1; i++) {
      if (objVal[i] !== objVal[i + 1]) {
        return false;
      }
    }
  
    return true;
  }
  
  function isBoring(arr) {
    if (arr.length < 2) {
      return false;
    }
  
    for (let i = 0; i < arr.length; i++) {
      const arrSliced = arr.slice(0);
      arrSliced.splice(i, 1);
      if (hasEqualNuEl(arrSliced)) {
        return true;
      }
    }
  
    return false;
  }
  
  function getLength(arr) {
    const arrLength = arr.length;
    let result = 0;
    let arrShifted = [];
  
    for (let i = 0; i < arrLength; i++) {
      arrShifted.push(arr[i]);
  
      if (isBoring(arrShifted)) {
        result = arrShifted.length;
      }
    }
  
    return result;
  }
  console.log(getLength([1,2,3,4,5]))
