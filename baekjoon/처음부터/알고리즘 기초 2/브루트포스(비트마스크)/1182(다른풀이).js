// const INPUT_1 = ["5 0", "-7 -3 -2 5 8"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, S] = input[0].split(" ").map(Number);
//   const sequence = input[1].split(" ").map(Number);
//   let sum = 0;
//   let count = 0;

//   go(0, 0);

//   console.log(count);

//   function go(start) {
//     if (start === N) return;

//     for (let i = start; i < N; i++) {
//       const cur = sequence[i];
//       sum += cur;
//       if (sum === S) count++;
//       go(i + 1);
//       sum -= cur;
//     }
//   }
// };

// solution(input);
