// function check(queen, row) {
//   for (let i = 0; i < row; i++) {
//     if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i)
//       return false;
//   }
//   return true;
// }

// function search(queen, row) {
//   const n = queen.length;
//   let count = 0;

//   if (row === n) return 1;

//   for (let i = 0; i < n; i++) {
//     queen[row] = i;
//     if (check(queen, row)) count += search(queen, row + 1);
//   }

//   return count;
// }

// function solution(n) {
//   return search(new Array(n).fill(-1), 0);
// }

// const answer = solution(5);

// console.log(answer);
