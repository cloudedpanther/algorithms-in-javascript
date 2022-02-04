// const INPUT_1 = ["ZZZZZ 36"];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = input[0]
//     .split(" ")[0]
//     .split("")
//     .reverse()
//     .map((num) => {
//       if ("A" <= num && num <= "Z") return num.charCodeAt(0) - 55;
//       else return parseInt(num);
//     });
//   const B = parseInt(input[0].split(" ")[1]);
//   let answer = 0;
//   for (let i = 0; i < N.length; i++) {
//     answer += N[i] * Math.pow(B, i);
//   }
//   console.log(answer);
// };

// solution(input);
