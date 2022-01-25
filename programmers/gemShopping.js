// function solution(gems) {
//   let answer = [0, gems.length];
//   let [head, tail] = [0, 0];
//   const gemKinds = new Set(gems).size;
//   const collection = {};

//   collection[gems[0]] = 1;

//   while (head < gems.length && tail < gems.length) {
//     if (Object.keys(collection).length === gemKinds) {
//       if (tail - head < answer[1] - answer[0]) {
//         answer = [head + 1, tail + 1];
//       }

//       collection[gems[head]]--;
//       if (collection[gems[head]] === 0) delete collection[gems[head]];
//       head++;
//     } else {
//       tail++;
//       collection[gems[tail]] = 1 + (collection[gems[tail]] || 0);
//     }
//   }

//   return answer;
// }

// const answer = solution([
//   "DIA",
//   "RUBY",
//   "RUBY",
//   "DIA",
//   "DIA",
//   "EMERALD",
//   "SAPPHIRE",
//   "DIA",
// ]);

// console.log(answer);
