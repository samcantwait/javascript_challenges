// Implement quick sort

function pivot(arr, start = 0, end = arr.length + 1) {
    const swap = (arr, val1, val2) => {
        [arr[val1], arr[val2]] = [arr[val2], arr[val1]];
    };

    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let index = pivot(arr, left, right);
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    }
    return arr;
}
