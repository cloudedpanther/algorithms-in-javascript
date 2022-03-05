// const INPUT_1 = [
//   "3",
//   "8",
//   "0 0",
//   "7 0",
//   "100",
//   "0 0",
//   "30 50",
//   "10",
//   "1 1",
//   "1 1",
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
//   const answer = [];
//   const dx = [-2, -1, -2, -1, 1, 2, 1, 2];
//   const dy = [-1, -2, 1, 2, -2, -1, 2, 1];
//   for (let t = 1; t < input.length; t += 3) {
//     const N = parseInt(input[t]);
//     const [sx, sy] = input[t + 1].split(" ").map(Number);
//     const [fx, fy] = input[t + 2].split(" ").map(Number);
//     const minMoves = getMinMoves(N, sx, sy, fx, fy);
//     answer.push(minMoves);
//   }

//   console.log(answer.join("\n"));

//   function getMinMoves(N, sx, sy, fx, fy) {
//     const moves = Array.from({ length: N }, () => new Array(N).fill(-1));
//     const queue = new Queue();
//     queue.push([sx, sy]);
//     moves[sx][sy] = 0;

//     while (queue.size() > 0) {
//       const [x, y] = queue.pop();
//       const currentMoves = moves[x][y];

//       if (x === fx && y === fy) return currentMoves;

//       for (let k = 0; k < 8; k++) {
//         const nx = x + dx[k];
//         const ny = y + dy[k];
//         if (nx >= 0 && ny >= 0 && nx < N && ny < N && moves[nx][ny] === -1) {
//           queue.push([nx, ny]);
//           moves[nx][ny] = currentMoves + 1;
//         }
//       }
//     }
//   }
// };

// solution(input);
