// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    const arr = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string') arr.push(obj[key])
        if (typeof obj[key] === 'object') return arr.concat(collectStrings(obj[key]))
    }
    return arr;
}