// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2) {
    const obj = {};
    int1 += "";
    int2 += "";
    if (int1.length !== int2.length) return false
    for (let num of int1) {
        obj[num] ? obj[num]++ : obj[num] = 1;
    }
    for (let num of int2) {
        if (!obj[num]) return false;
        else obj[num]--
    }
    return true;
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false