// const INPUT_1 = ["5 4", "0 1", "1 2", "2 3", "3 4"];
// const INPUT_2 = ["5 5", "0 1", "1 2", "2 3", "3 0", "1 4"];
// const INPUT_3 = ["6 5", "0 1", "0 2", "0 3", "0 4", "0 5"];

// const input = INPUT_3;

// const findRelations = (graph, currentNode, streak) => {
//   if (streak.length === 5) return true;

//   for (const nextNode of graph[currentNode]) {
//     if (streak.findIndex((n) => n === nextNode) === -1) {
//       if (findRelations(graph, nextNode, [...streak, nextNode])) return true;
//     }
//   }

//   return false;
// };

// const solution = (input) => {
//   const [N, _] = input[0].split(" ").map(Number);
//   let graph = Array.from(new Array(N), () => []);
//   input.slice(1).forEach((edge) => {
//     const [n1, n2] = edge.split(" ").map(Number);
//     graph[n1].push(n2);
//     graph[n2].push(n1);
//   });

//   for (let i = 0; i < N; i++) {
//     if (findRelations(graph, i, [i])) {
//       console.log(1);
//       return;
//     }
//   }

//   console.log(0);
// };

// solution(input);
