// function solution(n, times) {
//   const sortedTimes = times.sort((a, b) => a - b);

//   let left = 1;
//   let right = sortedTimes[sortedTimes.length - 1] * n;
//   let mid = Math.floor((left + right) / 2);

//   console.log(left, mid, right);

//   while (left <= right) {
//     const count = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

//     if (count >= n) right = mid - 1;
//     else left = mid + 1;
//     mid = Math.floor((left + right) / 2);
//     console.log(left, mid, right);
//   }

//   return left;
// }

// console.log(solution(6, [6, 10]));
