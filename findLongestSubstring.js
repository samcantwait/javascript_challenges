// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    if (str.length < 1) return 0;
    let obj = {};
    let leftPointer = 0;
    let rightPointer = 0;
    let total = 0;

    while (rightPointer < str.length) {
        if (!obj[str[rightPointer]]) {
            obj[str[rightPointer]] = 1;
            rightPointer++;
        } else if (obj[str[rightPointer]]) {
            obj[str[leftPointer]]--;
            leftPointer++;
        }
        total = rightPointer - leftPointer > total ? rightPointer - leftPointer : total;
    }
    return total;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6