// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = typeof obj[key] === 'number' ? '' + obj[key] : (typeof obj[key] === 'object' && !Array.isArray(obj[key])) ? stringifyNumbers(obj[key]) : obj[key];
    }
    return newObj;
}
