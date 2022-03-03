// const INPUT_1 = ["2", "3 2", "1 3", "2 3", "4 4", "1 2", "2 3", "3 4", "4 2"];

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

//   let k = 1;
//   while (k < input.length) {
//     const [V, E] = input[k].split(" ").map(Number);
//     const list = [null, ...Array.from({ length: V }, () => [])];
//     for (let i = 0; i < E; i++) {
//       k += 1;
//       const [u, v] = input[k].split(" ").map(Number);
//       list[u].push(v);
//       list[v].push(u);
//     }
//     k += 1;
//     const check = [null, ...new Array(V).fill(0)];

//     if (isBipartite(V, 1, check, list)) answer.push("YES");
//     else answer.push("NO");
//   }

//   console.log(answer.join("\n"));

//   function isBipartite(V, start, check, list) {
//     const queue = new Queue();
//     queue.push(start);
//     check[start] = 1;

//     while (queue.size() > 0) {
//       const cur = queue.pop();
//       for (let i = 0; i < list[cur].length; i++) {
//         const next = list[cur][i];
//         if (check[next] === 0) {
//           queue.push(next);
//           check[next] = 3 - check[cur];
//         } else if (check[next] === check[cur]) {
//           return false;
//         }
//       }

//       if (queue.size() === 0) {
//         for (let i = 1; i <= V; i++) {
//           if (check[i] === 0) {
//             queue.push(i);
//             check[i] = 1;
//             break;
//           }
//         }
//       }
//     }

//     return true;
//   }
// };

// solution(input);
