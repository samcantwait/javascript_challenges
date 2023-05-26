// Implement merge sort

function merge(arr1, arr2) {
    const arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2)
}
console.log(mergeSort([1, 10, 15, 2, 14, 99, 100]))

