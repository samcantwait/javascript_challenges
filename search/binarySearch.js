// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, num) {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(arr.length / 2);
    while (arr[middle] !== num && start <= end) {
        if (arr[middle] > num) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }
    return arr[middle] === num ? middle : -1;

}