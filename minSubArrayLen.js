// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

function minSubArrayLen(arr, num) {
    let len = Infinity;
    let leftPointer = 0;
    let rightPointer = 0;
    let total = 0;
    while (rightPointer < arr.length) {
        if (total < num) {
            total += arr[rightPointer];
            rightPointer++;
        } else if (total >= num) {
            len = Math.min(len, rightPointer - leftPointer)
            total -= arr[leftPointer];
            leftPointer++;
        }
    }
    return len == Infinity ? 0 : len;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0