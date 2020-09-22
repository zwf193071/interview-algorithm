// 解法一
function uniqueAndSort (arr) {
    return (Array.from(new Set(arr))).sort((a, b) => {
        return a - b;
    });
}
function quickSort (arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const less = [];
    const greater = [];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] < pivot) less.push(arr[i])
        else greater.push(arr[i])
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];

}
// 解法二
function uniqueAndSort1(arr) {
    const newArr = [];
    const m = new Map();
    arr.forEach(a => {
        if (!m.get(a)) {
            newArr.push(a);
            m.set(a, 1);
        }
    })
    return quickSort(newArr);
}
let start = Date.now()
console.log(uniqueAndSort([10,20,40,32,67,40,20,89,300,400,15]))
let end = Date.now()
console.log(`解法一耗时：${end - start}ms`)

let start1 = Date.now()
console.log(uniqueAndSort1([10, 20, 40, 32, 67, 40, 20, 89, 300, 400, 15]))
let end1 = Date.now()
console.log(`解法二耗时：${end1 - start1}ms`)