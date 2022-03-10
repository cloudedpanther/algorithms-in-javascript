// const INPUT_1 = [
//   "10",
//   "1 1 1 0 0 0 0 1 1 1",
//   "1 1 1 1 0 0 0 0 1 1",
//   "1 0 1 1 0 0 0 0 1 1",
//   "0 0 1 1 1 0 0 0 0 1",
//   "0 0 0 1 0 0 0 0 0 1",
//   "0 0 0 0 0 0 0 0 0 1",
//   "0 0 0 0 0 0 0 0 0 0",
//   "0 0 0 0 1 1 0 0 0 0",
//   "0 0 0 0 1 1 1 0 0 0",
//   "0 0 0 0 0 0 0 0 0 0",
// ];

// const input = INPUT_1;

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.head = 0;
//     this.tail = 0;
//   }
//   push(value) {
//     this.queue.push(value);
//     this.tail++;
//   }
//   pop() {
//     if (this.size() === 0) return null;
//     const value = this.queue[this.head];
//     delete this.queue[this.head];
//     this.head++;
//     return value;
//   }
//   size() {
//     return this.tail - this.head;
//   }
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const map = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );

//   const dx = [0, 0, 1, -1];
//   const dy = [1, -1, 0, 0];
//   const boundaries = setBoundaries();
//   const distance = Array.from({ length: N }, () => new Array(N).fill(0));
//   const source = Array.from({ length: N }, () => new Array(N).fill(0));

//   let answer = Infinity;

//   const q = new Queue();
//   while (boundaries.length > 0) {
//     const [x, y] = boundaries.pop();
//     q.push([x, y]);
//     source[x][y] = map[x][y];
//   }

//   while (q.size() > 0) {
//     const [x, y] = q.pop();
//     for (let k = 0; k < 4; k++) {
//       const nx = x + dx[k];
//       const ny = y + dy[k];
//       if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
//         if (map[nx][ny] === 0 && distance[nx][ny] === 0) {
//           q.push([nx, ny]);
//           distance[nx][ny] = distance[x][y] + 1;
//           source[nx][ny] = source[x][y];
//         } else if (source[nx][ny] !== 0 && source[nx][ny] !== source[x][y]) {
//           const dist = distance[x][y] + distance[nx][ny];
//           answer = Math.min(answer, dist);
//         }
//       }
//     }
//   }

//   console.log(answer);

//   function setBoundaries() {
//     const boundaries = [];
//     const visited = Array.from({ length: N }, () => new Array(N).fill(false));
//     let islandNumber = 1;

//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < N; j++) {
//         if (!visited[i][j] && map[i][j] === 1) {
//           setIslands(i, j, islandNumber, visited, boundaries);
//           islandNumber++;
//         }
//       }
//     }

//     return boundaries;
//   }

//   function setIslands(sx, sy, islandNumber, visited, boundaries) {
//     const q = new Queue();
//     q.push([sx, sy]);
//     visited[sx][sy] = true;
//     map[sx][sy] = islandNumber;

//     while (q.size() > 0) {
//       const [x, y] = q.pop();
//       let checked = false;
//       for (let k = 0; k < 4; k++) {
//         const nx = x + dx[k];
//         const ny = y + dy[k];
//         if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
//           if (map[nx][ny] === 0 && !checked) {
//             boundaries.push([x, y]);
//             checked = true;
//           }
//           if (!visited[nx][ny] && map[nx][ny] === 1) {
//             q.push([nx, ny]);
//             visited[nx][ny] = true;
//             map[nx][ny] = islandNumber;
//           }
//         }
//       }
//     }
//   }
// };

// solution(input);
