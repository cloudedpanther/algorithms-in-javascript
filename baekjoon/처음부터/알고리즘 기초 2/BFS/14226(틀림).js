// const INPUT_1 = ["18"];

// const input = INPUT_1;

// // 이미 이모티콘 하나가 입력된 상황
// // 그 이모티콘을 복사하는 데 1초
// // 다시 붙여넣기 하는데 1초
// // 화면에서 하나 지우는데 1초

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
//   const S = parseInt(input[0]);
//   const visited = Array.from({ length: 2000 }, () =>
//     new Array(2000).fill(false)
//   );

//   console.log(bfs());

//   function bfs() {
//     const q = new Queue();
//     q.push([1, 0, 0]);
//     visited[1][0] = true;

//     while (q.size() > 0) {
//       const [cur, clipboard, time] = q.pop();
//       if (cur === S) return time;
//       // 하나 빼기
//       if (cur > 1 && !visited[cur - 1][clipboard]) {
//         q.push([cur, clipboard, time + 1]);
//         visited[cur - 1][clipboard] = true;
//       }
//       // 복사하기
//       if (cur < 2000) {
//         q.push([cur, cur, time + 1]);
//       }
//       // 붙여넣기
//       if (
//         clipboard > 0 &&
//         cur + clipboard < 2000 &&
//         !visited[cur + clipboard][clipboard]
//       ) {
//         q.push([cur + clipboard, clipboard, time + 1]);
//         visited[cur + clipboard][clipboard] = true;
//       }
//     }
//   }
// };

// solution(input);
