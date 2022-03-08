// const INPUT_1 = ["4", "1 2", "1 3", "2 4", "1 3 2 4"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const branch = [null, ...Array.from({ length: N }, () => new Array())];
//   input.slice(1, -1).forEach((e) => {
//     const [a, b] = e.split(" ").map(Number);
//     branch[a].push(b);
//     branch[b].push(a);
//   });
//   const userAnswer = input[input.length - 1].split(" ").map(Number);
//   const order = [null, ...new Array(N)];
//   userAnswer.forEach((v, i) => (order[v] = i + 1));
//   branch.slice(1).map((v) => v.sort((a, b) => order[a] - order[b]));
//   const check = [null, ...new Array(N).fill(false)];
//   const realAnswer = [];

//   dfs(1);

//   if (realAnswer.join(" ") !== userAnswer.join(" ")) {
//     console.log(0);
//   } else {
//     console.log(1);
//   }

//   function dfs(cur) {
//     check[cur] = true;
//     realAnswer.push(cur);
//     for (const next of branch[cur]) {
//       if (!check[next]) {
//         dfs(next);
//       }
//     }
//   }
// };

// solution(input);
