// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   enqueue(value) {
//     this.queue.push(value);
//     this.rear++;
//   }
//   dequeue() {
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
//   let graph = Array.from(Array(n + 1), () => []);
//   for (const [a, b] of edge) {
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   let distance = new Array(n + 1).fill(-1);
//   distance[1] = 0;

//   // BFS
//   let queue = new Queue();
//   queue.enqueue(1);

//   while (queue.size() > 0) {
//     const cur = queue.dequeue();
//     for (const node of graph[cur]) {
//       if (distance[node] === -1) {
//         queue.enqueue(node);
//         distance[node] = distance[cur] + 1;
//       }
//     }
//   }

//   const maxLevel = Math.max(...distance);
//   //   return distance.filter((e) => e === maxLevel).length;
//   const farthestNodes = distance.filter((e) => e === maxLevel).length;
//   console.log(farthestNodes);
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
