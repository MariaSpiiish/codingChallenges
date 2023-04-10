const containsDuplicate = (nums) => {
    const set = new Set();
    nums.forEach(item => set.add(item));
    
    return set.size
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))