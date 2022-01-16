// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   push(value) {
//     this.queue.push(value);
//     this.rear++;
//   }
//   pop() {
//     const returnValue = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;

//     return returnValue;
//   }
//   size() {
//     return this.rear - this.front;
//   }
// }

// function solution(n, edge) {
//   let graph = new Array(n + 1);
//   for (let i = 1; i < n + 1; i++) {
//     graph[i] = [];
//   }
//   edge.forEach((e) => {
//     graph[e[0]].push(e[1]);
//     graph[e[1]].push(e[0]);
//   });

//   // BFS
//   let visited = new Array(n + 1).fill(-1);
//   let queue = new Queue();
//   queue.push(1);
//   visited[1] = 0;

//   while (queue.size() > 0) {
//     const cur = queue.pop();
//     const currentNode = graph[cur];

//     for (let i = 0; i < currentNode.length; i++) {
//       const newNode = currentNode[i];
//       if (visited[newNode] === -1) {
//         queue.push(newNode);
//         visited[newNode] = visited[cur] + 1;
//       }
//     }
//   }

//   const maxLevel = visited.sort((a, b) => b - a)[0];
//   const maxLevelNodes = visited.filter((e) => e === maxLevel).length;
//   console.log(maxLevelNodes);
// }

// const n = 6;
// const vertex = [
//   [3, 6],
//   [4, 3],
//   [3, 2],
//   [1, 3],
//   [1, 2],
//   [2, 4],
//   [5, 2],
// ];

// solution(n, vertex);
