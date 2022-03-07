// const INPUT_1 = ["4", "1 2", "1 3", "2 4", "1 2 3 4"];
// const INPUT_2 = ["4", "1 2", "1 3", "2 4", "1 3 2 4"];
// const INPUT_3 = ["4", "1 2", "1 3", "2 4", "1 2 4 3"];
// const INPUT_4 = ["6", "1 2", "3 4", "5 6", "2 3", "4 5", "1 2 3 5 6 4"];

// const input = INPUT_4;

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
//   const list = input
//     .slice(1, input.length - 1)
//     .map((v) => v.split(" ").map(Number))
//     .reduce((acc, cur) => {
//       if (!acc[cur[0]]) acc[cur[0]] = [];
//       if (!acc[cur[1]]) acc[cur[1]] = [];
//       acc[cur[0]].push(cur[1]);
//       acc[cur[1]].push(cur[0]);
//       return acc;
//     }, []);
//   const userAnswer = input[input.length - 1].split(" ").map(Number);
//   const order = new Array(N + 1);
//   userAnswer.forEach((v, idx) => (order[v] = idx + 1));
//   for (const nodes of list.slice(1)) {
//     nodes.sort((a, b) => order[a] - order[b]);
//   }
//   const visited = new Array(N + 1).fill(false);

//   if (userAnswer[0] !== 1) {
//     console.log(0);
//     return;
//   }

//   if (isRightOrder()) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }

//   function isRightOrder() {
//     const q = new Queue();
//     q.push(1);
//     visited[1] = true;

//     let index = 1;

//     while (q.size() > 0) {
//       const cur = q.pop();
//       for (let i = 0; i < list[cur].length; i++) {
//         const next = list[cur][i];
//         if (!visited[next]) {
//           q.push(next);
//           visited[next] = true;
//           if (userAnswer[index] !== next) return false;
//           index++;
//         }
//       }
//     }

//     return true;
//   }
// };

// solution(input);
