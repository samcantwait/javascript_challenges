// Implement radix sort

function getInt(num, n) {
    return parseInt((Math.abs(num) / Math.pow(10, n)) % 10);
}

function getLength(num) {
    if (num === 0) return 1;
    return Math.ceil(Math.log10(Math.abs(num)));
}

function mostDigits(arr) {
    let max = 0;
    arr.forEach(num => {
        max = Math.max(max, getLength(num))
    })
    return max;
}

function radixSort(arr) {
    const maxLen = mostDigits(arr);
    for (let i = 0; i < maxLen; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        arr.forEach(num => {
            const bucketPos = getInt(num, i);
            buckets[bucketPos].push(num)
        })
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([9385723, 3278, 2, 54, 12, 864]))