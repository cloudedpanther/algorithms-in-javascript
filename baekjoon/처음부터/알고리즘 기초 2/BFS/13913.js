// const INPUT_1 = ["5 17"];

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
//   const [N, K] = input[0].split(" ").map(Number);
//   const MAX = 100000;
//   const distance = new Array(MAX + 1).fill(-1);
//   const source = new Array(MAX + 1).fill(-1);
//   const track = [];

//   bfs();

//   let trackPoint = K;
//   track.push(K);
//   while (source[trackPoint] !== -1) {
//     trackPoint = source[trackPoint];
//     track.push(trackPoint);
//   }
//   console.log(distance[K]);
//   console.log(track.reverse().join(" "));

//   function bfs() {
//     const d = [1, -1, 0];
//     const q = new Queue();
//     q.push(N);
//     distance[N] = 0;

//     while (q.size() > 0) {
//       const cur = q.pop();
//       if (cur === K) break;
//       d[2] = cur;

//       for (let k = 0; k < 3; k++) {
//         const next = cur + d[k];
//         if (next >= 0 && next <= MAX && distance[next] === -1) {
//           q.push(next);
//           distance[next] = distance[cur] + 1;
//           source[next] = cur;
//         }
//       }
//     }
//   }
// };

// solution(input);
