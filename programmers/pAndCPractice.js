// const permutation = (arr, n) => {
//   if (n === 1) return arr.map((v) => [v]);
//   const result = [];

//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.filter((_, index) => index !== idx);
//     const perms = permutation(rest, n - 1);
//     const combined = perms.map((v) => [fixed, ...v]);

//     result.push(...combined);
//   });

//   return result;
// };

// const combination = (arr, n) => {
//   if (n === 1) return arr.map((v) => [v]);
//   const result = [];

//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.slice(idx + 1);
//     const combis = combination(rest, n - 1);
//     const combined = combis.map((v) => [fixed, ...v]);

//     result.push(combined);
//   });

//   return result;
// };

// // const permutationS = (arr, n) => {
// //     // 우선 배열에서 원소 하나를 선택해 스택에 넣는다
// //     // 그 외의 원소 중에 하나를 선택해 스택에 넣는다
// //     // n을 만족시킬 때까지 진행한다
// //     // 스택의 탑 원소를 팝하고 다른 원소를 넣는다
// //     const result = [];

// //     for(const [idx, val] of arr.entries()) {
// //         const stack = [val];
// //         let currentIndex = idx;

// //         while(stack.length > 0) {
// //             const currentValue = stack[stack.length - 1];
// //         }
// //     }
// // }

// // const dfs = (graph) => {
// //   const stack = [0];
// //   let visited = [true, ...new Array(graph.length - 1).fill(false)];

// //   while (stack.length > 0) {
// //     console.log(stack);
// //     const currentNode = stack[stack.length - 1];
// //     const connected = graph[currentNode];
// //     let blocked = true;
// //     for (const nextNode of connected) {
// //       if (!visited[nextNode]) {
// //         stack.push(nextNode);
// //         visited[nextNode] = true;
// //         blocked = false;
// //         break;
// //       }
// //     }
// //     if (blocked) stack.pop();
// //     console.log(stack);
// //     console.log(visited);
// //     console.log("\n");
// //   }
// // };

// // dfs([
// //   [1, 4],
// //   [0, 3, 4],
// //   [3, 4],
// //   [1, 2],
// //   [0, 1, 2],
// // ]);
