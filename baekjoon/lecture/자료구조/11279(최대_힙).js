// const INPUT_1 = [
//   "13",
//   "0",
//   "1",
//   "2",
//   "0",
//   "0",
//   "3",
//   "2",
//   "1",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
// ];
// // expected output:
// // 0
// // 2
// // 1
// // 3
// // 2
// // 1
// // 0
// // 0

// const INPUT_2 = [
//   "20",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
//   "0",
// ];

// const input = INPUT_2;

// // Class
// class Max_Heap {
//   constructor() {
//     this.heap = [];
//   }

//   insert(value) {
//     this.heap.push(value);
//     let currentIndex = this.heap.length - 1;

//     while (currentIndex > 0) {
//       const parentIndex = Math.floor((currentIndex - 1) / 2);
//       const parentNode = this.heap[parentIndex];
//       if (parentNode >= value) break;

//       this.swap(parentIndex, currentIndex);
//       currentIndex = parentIndex;
//     }
//   }

//   pop() {
//     this.swap(0, this.size() - 1);
//     const popped = this.heap.pop();
//     const value = this.max();
//     let currentIndex = 0;

//     while (currentIndex < this.size()) {
//       const leftChildIndex = 2 * currentIndex + 1;
//       const rightChildIndex = 2 * currentIndex + 2;
//       const left = this.heap[leftChildIndex];
//       const right = this.heap[rightChildIndex];

//       // no child
//       if (leftChildIndex >= this.size()) break;
//       // only left child
//       else if (rightChildIndex >= this.size() && value < left) {
//         this.swap(currentIndex, leftChildIndex);
//         currentIndex = leftChildIndex;
//         // both children
//       } else {
//         if (value < left || value < right) {
//           if (value >= right) {
//             this.swap(currentIndex, leftChildIndex);
//             currentIndex = leftChildIndex;
//           } else if (value >= left) {
//             this.swap(currentIndex, rightChildIndex);
//             currentIndex = rightChildIndex;
//           } else if (left >= right) {
//             this.swap(currentIndex, leftChildIndex);
//             currentIndex = leftChildIndex;
//           } else {
//             this.swap(currentIndex, rightChildIndex);
//             currentIndex = rightChildIndex;
//           }
//         } else break;
//       }
//     }

//     return popped;
//   }

//   swap(index_1, index_2) {
//     const tmp = this.heap[index_2];
//     this.heap[index_2] = this.heap[index_1];
//     this.heap[index_1] = tmp;
//   }

//   max() {
//     return this.heap[0];
//   }

//   size() {
//     return this.heap.length;
//   }
// }

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0]);
//   const heap = new Max_Heap();

//   // Functions
//   function solve() {
//     for (let i = 1; i <= N; i++) {
//       const command = parseInt(input[i]);
//       if (command === 0) {
//         if (heap.size() === 0) console.log(0);
//         else console.log(heap.pop());
//       } else heap.insert(command);
//     }
//   }

//   // Run
//   solve();
// }

// solution(input);
