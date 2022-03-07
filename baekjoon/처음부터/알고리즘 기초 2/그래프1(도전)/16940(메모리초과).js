// const INPUT_1 = ["4", "1 2", "1 3", "2 4", "1 2 3 4"];
// const INPUT_2 = ["4", "1 2", "1 3", "2 4", "1 2 4 3"];
// const INPUT_3 = ["4", "1 2", "1 3", "2 4", "1 3 2 4"];
// const INPUT_4 = ["4", "1 2", "1 3", "2 4", "3 1 2 4"];

// const input = INPUT_3;

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
//   has(value) {
//     const currentQueue = this.queue.slice(this.head, this.tail);
//     if (currentQueue.findIndex((v) => v === value) === -1) return false;
//     else return true;
//   }
// }

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const list = input
//     .slice(1, input.length - 1)
//     .map((e) => e.split(" ").map(Number))
//     .reduce((acc, cur) => {
//       if (!acc[cur[0]]) acc[cur[0]] = [];
//       if (!acc[cur[1]]) acc[cur[1]] = [];
//       acc[cur[0]].push(cur[1]);
//       acc[cur[1]].push(cur[0]);
//       return acc;
//     }, []);
//   const visited = new Array(N + 1).fill(false);
//   const userAnswer = input[input.length - 1].split(" ").map(Number);

//   let orderIndex = 1;

//   const q = new Queue();
//   q.push(1);
//   visited[1] = true;

//   while (q.size() > 0) {
//     const cur = q.pop();
//     const nextNodes = new Queue();
//     for (let i = 0; i < list[cur].length; i++) {
//       const next = list[cur][i];
//       if (!visited[next]) nextNodes.push(next);
//     }
//     while (nextNodes.size() > 0) {
//       const next = nextNodes.pop();
//       if (next === userAnswer[orderIndex]) {
//         q.push(next);
//         visited[next] = true;
//         orderIndex++;
//         if (orderIndex === N) {
//           console.log(1);
//           return;
//         }
//         continue;
//       }
//       nextNodes.push(next);

//       if (nextNodes.size() !== 0 && !nextNodes.has(userAnswer[orderIndex])) {
//         console.log(0);
//         return;
//       }
//     }
//   }
// };

// solution(input);
