//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let max = arr.slice(0, num).reduce((a, b) => a + b);
    let leftPointer = 0;
    let rightPointer = num;
    let sum = max;
    while (rightPointer < arr.length) {
        sum -= arr[leftPointer];
        sum += arr[rightPointer];
        leftPointer++;
        rightPointer++;
        max = Math.max(max, sum)
    }
    return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))  // 39 
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null