// const INPUT_1 = ["4 6", "110110", "110110", "111111", "111101"];

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
//   const [N, M] = input[0].split(" ").map(Number);
//   const graph = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split("").map(Number)
//   );
//   const answer = getMinimumDistance(0, 0);

//   console.log(answer);

//   function getMinimumDistance(sx, sy) {
//     const dx = [0, 0, 1, -1];
//     const dy = [-1, 1, 0, 0];
//     const distance = Array.from({ length: N }, () => new Array(M).fill(0));
//     const queue = new Queue();
//     queue.push([sx, sy]);
//     distance[sy][sx] = 1;

//     while (queue.size() > 0) {
//       const [x, y] = queue.pop();
//       const current = distance[y][x];
//       for (let k = 0; k < 4; k++) {
//         const nx = x + dx[k];
//         const ny = y + dy[k];
//         if (
//           nx >= 0 &&
//           ny >= 0 &&
//           nx < M &&
//           ny < N &&
//           graph[ny][nx] &&
//           !distance[ny][nx]
//         ) {
//           queue.push([nx, ny]);
//           distance[ny][nx] = current + 1;
//         }
//       }
//     }

//     return distance[N - 1][M - 1];
//   }
// };

// solution(input);
