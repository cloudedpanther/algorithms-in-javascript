// function find(parents, x) {
//   if (parents[x] === x) return x;

//   return (parents[x] = find(parents, parents[x]));
// }

// function union(parents, a, b) {
//   a = find(parents, a);
//   b = find(parents, b);

//   if (a < b) parents[b] = a;
//   else parents[a] = b;
// }

// function isUnion(parents, a, b) {
//   a = find(parents, a);
//   b = find(parents, b);

//   if (a === b) return true;
//   else return false;
// }

// function solution(n, costs) {
//   let answer = 0;
//   const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
//   const parents = Array.from(new Array(n), (_, idx) => idx);

//   for (const [a, b, cost] of sortedCosts) {
//     if (!isUnion(parents, a, b)) {
//       union(parents, a, b);
//       answer += cost;
//     }
//   }

//   return answer;
// }

// const answer = solution(4, [
//   [0, 1, 1],
//   [0, 2, 2],
//   [1, 2, 5],
//   [1, 3, 1],
//   [2, 3, 8],
// ]); // 4

// console.log(answer);
