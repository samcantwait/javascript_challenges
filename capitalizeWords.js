// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    let newArr = [];
    if (arr.length < 1) return newArr;
    return newArr.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)))
}
