function flatten(arr) {
    let newArr = [];
    arr.forEach(value => {
        if (Array.isArray(value)) newArr = newArr.concat(flatten(value));
        else newArr.push(value);
    })
    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]