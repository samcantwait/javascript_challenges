// Implement bubble sort.

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        console.log(arr)
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]))
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))