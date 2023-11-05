/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = (arr, fn) => {
//     for(let i=0;i<arr.length;i++){
//         arr[i] = fn(arr[i], i);
//     }
//     return arr;
// };

// Above is considered poor practice due to changing of data, despite better time complexity

var map = (arr, fn) => {
    let transformedArr = [];
    for(let i=0;i<arr.length;i++){
        transformedArr.push(fn(arr[i], i));
    }
    return transformedArr;
};