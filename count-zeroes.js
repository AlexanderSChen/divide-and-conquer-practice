// function countZeroes(arr) {
//   let count = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 0) {
//         count++;
//     }
//   }
//   return count;
// }

function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if(firstZero === -1) return 0;

  return arr.length - firstZero
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  if(high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      console.log(mid);
      return mid;
    } else if(arr[mid] === 1) {
      console.log(mid);
      return findFirst(arr, mid + 1, high)
    }
    console.log(mid);
    return findFirst(arr, low, mid - 1)
  }
  return -1;
}
module.exports = countZeroes 