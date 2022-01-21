// const combination = (arr, n) => {
//   if (n === 1) return arr.map((v) => [v]);
//   const result = [];

//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.slice(idx + 1);
//     const combis = combination(rest, n - 1);
//     const combined = combis.map((v) => [fixed, ...v]);

//     result.push(...combined);
//   });

//   return result;
// };

// function solution(numbers) {
//   // 조합 생성
//   const combinations = combination(numbers, 2);
//   // 조합 각각의 합 계산
//   const sums = combinations.map((v) => v.reduce((acc, cur) => acc + cur));
//   // 중복 제거 및 오름차순 정렬
//   const sumsArr = [...new Set(sums)].sort((a, b) => a - b);

//   return sumsArr;
// }

// const answer = solution([2, 1, 3, 4, 1]);

// console.log(answer);
