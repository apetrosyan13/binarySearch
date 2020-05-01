function binarySearch (arr, num, x = 0) {
  if (arr.length === 0) return -1;
  if (arr[Math.floor((arr.length - 1) / 2)] === num) {
    return Math.floor((arr.length - 1) / 2) + x;
  } else if (arr[Math.floor((arr.length - 1) / 2)] > num) {
    let recArr = arr.slice(0, Math.floor((arr.length - 1) / 2));
    return binarySearch(recArr, num, x);
  } 
  let recArr = arr.slice(Math.floor((arr.length - 1) / 2) + 1);
  x += Math.floor((arr.length - 1) / 2) + 1;
  return (binarySearch(recArr, num, x));
}
console.log(binarySearch([1,6,20,45,103,444],103));


// function binarySearch(arr, num) {
//   let mid;
//   let first = 0;
//   let last = arr.length - 1;
//   let done = false;
//   let result = -1;
//   while (done === false && first <= last) {
//     mid = Math.floor((first + last) / 2)
//     if (arr[mid] === num) {
//       done = true;
//       result =mid;
//     } else if (arr[mid] > num) {
//       last = mid - 1;
//     } else {
//       first = mid + 1;
//     }
//   }
//   return result;
// }
// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// function x(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(binarySearch(a, i))
//   }
// }
// x(15)