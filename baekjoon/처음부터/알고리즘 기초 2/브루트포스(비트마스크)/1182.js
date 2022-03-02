// const INPUT_1 = ["5 0", "-7 -3 -2 5 8"];

// const input = INPUT_1;

// const solution = (input) => {
//   const [N, S] = input[0].split(" ").map(Number);
//   const sequence = input[1].split(" ").map(Number);
//   let count = 0;

//   for (let i = 1; i < 1 << N; i++) {
//     let sum = 0;
//     for (let j = 0; j < N; j++) {
//       if (i & (1 << j)) sum += sequence[j];
//     }
//     if (sum === S) count++;
//   }

//   console.log(count);
// };

// solution(input);
