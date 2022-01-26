// const INPUT_1 = [
//   "6 4",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 0",
//   "0 0 0 0 0 1",
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
//   enqueue(value) {
//     this.queue.push(value);
//     this.tail += 1;
//   }
//   dequeue() {
//     const returnValue = this.queue[this.head];

//     delete this.queue[this.head];
//     this.head += 1;

//     return returnValue;
//   }
//   size() {
//     return this.tail - this.head;
//   }
// }

// const checkDays = (tomatoes) => {
//   let max = 0;
//   for (const row of tomatoes) {
//     for (const partition of row) {
//       if (partition === 0) return -1;
//       max = Math.max(max, partition);
//     }
//   }
//   return max - 1;
// };

// const bfs = (M, N, tomatoes) => {
//   const queue = new Queue();
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (tomatoes[i][j] === 1) queue.enqueue([i, j]);
//     }
//   }
//   while (queue.size() > 0) {
//     const [y, x] = queue.dequeue();
//     if (x > 0 && tomatoes[y][x - 1] === 0) {
//       queue.enqueue([y, x - 1]);
//       tomatoes[y][x - 1] = tomatoes[y][x] + 1;
//     }
//     if (x < M - 1 && tomatoes[y][x + 1] === 0) {
//       queue.enqueue([y, x + 1]);
//       tomatoes[y][x + 1] = tomatoes[y][x] + 1;
//     }
//     if (y > 0 && tomatoes[y - 1][x] === 0) {
//       queue.enqueue([y - 1, x]);
//       tomatoes[y - 1][x] = tomatoes[y][x] + 1;
//     }
//     if (y < N - 1 && tomatoes[y + 1][x] === 0) {
//       queue.enqueue([y + 1, x]);
//       tomatoes[y + 1][x] = tomatoes[y][x] + 1;
//     }
//   }

//   return checkDays(tomatoes);
// };

// const solution = (input) => {
//   const [M, N] = input[0].split(" ");
//   let tomatoes = input.slice(1).map((row) => row.split(" ").map(Number));

//   let answer = bfs(M, N, tomatoes);
//   console.log(answer);
// };

// solution(input);
