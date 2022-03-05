// const INPUT_1 = [
//   "6 4",
//   "1 -1 0 0 0 0",
//   "0 -1 0 0 0 0",
//   "0 0 0 0 -1 0",
//   "0 0 0 0 -1 1",
// ];

// const INPUT_2 = [
//   "6 4",
//   "0 -1 0 0 0 0",
//   "-1 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 1",
// ];

// const input = INPUT_2;

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
//   const [M, N] = input[0].split(" ").map(Number);
//   const tomato = Array.from({ length: N }, (_, idx) =>
//     input[idx + 1].split(" ").map(Number)
//   );
//   const answer = bfs();

//   if (completed()) console.log(answer);
//   else console.log(-1);

//   function completed() {
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//         if (tomato[i][j] === 0) return false;
//       }
//     }
//     return true;
//   }

//   function bfs() {
//     let totalDays = 0;

//     const dx = [0, 0, 1, -1];
//     const dy = [1, -1, 0, 0];

//     const queue = new Queue();
//     for (let i = 0; i < N; i++) {
//       for (let j = 0; j < M; j++) {
//         if (tomato[i][j] === 1) queue.push([i, j]);
//       }
//     }

//     while (queue.size() > 0) {
//       const [x, y] = queue.pop();
//       const days = tomato[x][y];
//       totalDays = Math.max(totalDays, days);

//       for (let k = 0; k < 4; k++) {
//         const nx = x + dx[k];
//         const ny = y + dy[k];
//         if (nx >= 0 && ny >= 0 && nx < N && ny < M && tomato[nx][ny] === 0) {
//           queue.push([nx, ny]);
//           tomato[nx][ny] = days + 1;
//         }
//       }
//     }

//     return totalDays - 1;
//   }
// };

// solution(input);
