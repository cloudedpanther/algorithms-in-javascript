// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }
//   isEmpty() {
//     if (this.heap.length === 1) return true;
//     else return false;
//   }
//   push(value) {
//     this.heap.push(value);
//     let currentIndex = this.heap.length - 1;
//     let parentIndex = Math.floor(currentIndex / 2);

//     while (
//       currentIndex > 1 &&
//       this.heap[parentIndex].cost > this.heap[currentIndex].cost
//     ) {
//       const tmp = this.heap[parentIndex];
//       this.heap[parentIndex] = this.heap[currentIndex];
//       this.heap[currentIndex] = tmp;

//       currentIndex = parentIndex;
//       parentIndex = Math.floor(currentIndex / 2);
//     }
//   }
//   pop() {
//     if (this.isEmpty()) return null;
//     if (this.heap.length === 2) return this.heap.pop();

//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let currentIndex = 1;
//     let leftChildIndex = 2;
//     let rightChildIndex = 3;

//     while (
//       (this.heap[leftChildIndex] &&
//         this.heap[currentIndex].cost > this.heap[leftChildIndex].cost) ||
//       (this.heap[rightChildIndex] &&
//         this.heap[currentIndex].cost > this.heap[rightChildIndex].cost)
//     ) {
//       if (
//         this.heap[rightChildIndex] &&
//         this.heap[leftChildIndex].cost > this.heap[rightChildIndex].cost
//       ) {
//         const tmp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[rightChildIndex];
//         this.heap[rightChildIndex] = tmp;
//         currentIndex = rightChildIndex;
//       } else {
//         const tmp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[leftChildIndex];
//         this.heap[leftChildIndex] = tmp;
//         currentIndex = leftChildIndex;
//       }
//       leftChildIndex = currentIndex * 2;
//       rightChildIndex = currentIndex * 2 + 1;
//     }

//     return returnValue;
//   }
// }

// function dijkstra(graph, N) {
//   const heap = new MinHeap();
//   heap.push({ node: 1, cost: 0 });

//   const dist = Array.from(new Array(N + 1), () => Infinity);
//   dist[1] = 0;

//   while (!heap.isEmpty()) {
//     const { node: currentNode, cost: currentCost } = heap.pop();

//     for (const { node: nextNode, cost } of graph[currentNode]) {
//       const nextCost = currentCost + cost;

//       if (dist[nextNode] > nextCost) {
//         dist[nextNode] = nextCost;
//         heap.push({ node: nextNode, cost: nextCost });
//       }
//     }
//   }

//   return dist;
// }

// function solution(N, road, K) {
//   const graph = Array.from(new Array(N + 1), () => []);
//   road.forEach((r) => {
//     const [n1, n2, c] = r;

//     graph[n1].push({ node: n2, cost: c });
//     graph[n2].push({ node: n1, cost: c });
//   });

//   const dist = dijkstra(graph, N);
//   return dist.filter((val) => val <= K).length;
// }

// const answer = solution(
//   6,
//   [
//     [1, 2, 1],
//     [1, 3, 2],
//     [2, 3, 2],
//     [3, 4, 3],
//     [3, 5, 2],
//     [3, 5, 3],
//     [5, 6, 1],
//   ],
//   4
// );

// console.log(answer);
