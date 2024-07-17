// 1 solution
const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arr2 = [];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

// 2 solution
const arr11 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = arr.filter((item) => item % 2 === 0);
console.log(result);
