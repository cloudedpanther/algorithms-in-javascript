// const INPUT_1 = ["6 5", "1 2", "2 5", "5 1", "3 4", "4 6"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, _] = input[0].split(" ").map(Number);
//   const list = [null, ...Array.from({ length: N }, () => [])];
//   input.slice(1).forEach((e) => {
//     const [u, v] = e.split(" ").map(Number);
//     list[u].push(v);
//     list[v].push(u);
//   });
//   const visited = [null, ...new Array(N).fill(false)];

//   let connectedComponents = 0;
//   for (let i = 1; i <= N; i++) {
//     if (!visited[i]) {
//       connectedComponents++;
//       dfs(i);
//     }
//   }

//   console.log(connectedComponents);

//   function dfs(cur) {
//     visited[cur] = true;

//     for (let i = 0; i < list[cur].length; i++) {
//       const next = list[cur][i];
//       if (!visited[next]) dfs(next);
//     }
//   }
// };

// solution(input);
