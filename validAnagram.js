// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const obj = {};
    for (let char of str1) {
        obj[char] ? obj[char]++ : obj[char] = 1
    }
    for (let char of str2) {
        if (!obj[char]) return false;
        obj[char]--
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

// Similar answer using two objects
// function validAnagram(str1, str2) {
//     const obj1 = {};
//     const obj2 = {};
//     for (let char of str1) {
//         obj1[char] = (obj1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         obj2[char] = (obj2[char] || 0) + 1;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (!obj2[key]) return false;
//         if (obj2[key] !== obj1[key]) return false;
//     }
//     return true;
// }