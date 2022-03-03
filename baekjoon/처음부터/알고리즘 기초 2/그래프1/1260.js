// const INPUT_1 = ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"];
// const INPUT_2 = ["5 5 3", "5 4", "5 2", "1 2", "3 4", "3 1"];

// const input = INPUT_2;

// const solution = (input) => {
//   const [N, _, V] = input[0].split(" ").map(Number);
//   const list = [null, ...Array.from({ length: N }, () => [])];
//   input.slice(1).forEach((e) => {
//     const [a, b] = e.split(" ").map(Number);
//     list[a].push(b);
//     list[b].push(a);
//   });
//   list.forEach((node, idx) => {
//     if (idx !== 0) {
//       node.sort((a, b) => a - b);
//     }
//   });

//   let visited = [null, ...new Array(N).fill(false)];
//   const dfsTrack = [];
//   const bfsTrack = [];

//   dfs(V);
//   visited = [null, ...new Array(N).fill(false)];
//   bfs(V);

//   console.log(dfsTrack.join(" "));
//   console.log(bfsTrack.join(" "));

//   function bfs(start) {
//     const queue = [];
//     queue.push(start);
//     visited[start] = true;

//     while (queue.length > 0) {
//       const cur = queue.shift();
//       bfsTrack.push(cur);
//       for (let i = 0; i < list[cur].length; i++) {
//         const next = list[cur][i];
//         if (!visited[next]) {
//           queue.push(next);
//           visited[next] = true;
//         }
//       }
//     }
//   }

//   function dfs(cur) {
//     visited[cur] = true;
//     dfsTrack.push(cur);

//     for (let i = 0; i < list[cur].length; i++) {
//       const next = list[cur][i];
//       if (!visited[next]) dfs(next);
//     }
//   }
// };

// solution(input);
