// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
    let sum = 0;
    Object.values(obj).forEach(value => {
        if (typeof value === 'object') return sum += nestedEvenSum(value)
        sum += value % 2 === 0 ? value : 0
    })
    return sum;
}