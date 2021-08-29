// const INPUT_1 = ["10 11 12"]; // 4
// const INPUT_2 = ["100000000 3 1000000000"];
// const INPUT_3 = ["2147483647 2147483647 2147483647"];

// const input = INPUT_3;

// // Solution
// function solution(input) {
//   // Variables
//   const inputLine = input[0].split(" ");
//   let A = BigInt(inputLine[0]);
//   const B = BigInt(inputLine[1]);
//   const C = BigInt(inputLine[2]);

//   if (A >= C) A %= C;

//   // Functions
//   function bigMod(b) {
//     if (b === 1n) return A % C;

//     let value = bigMod((b - (b % 2n)) / 2n);
//     value = (value * value) % C;

//     if (b % 2n) return (value * A) % C;
//     else return value;
//   }

//   function solve() {
//     console.log(bigMod(B).toString());
//   }

//   // Run
//   solve();
// }

// solution(input);
