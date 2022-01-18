// function solution(n) {
//   let isPrime = [false, false, ...new Array(n - 1).fill(true)];
//   for (let i = 2; i * i <= n; i++) {
//     if (isPrime[i]) {
//       for (let j = i + i; j <= n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   return isPrime.filter(Boolean).length;
// }

// console.log(solution(38));
