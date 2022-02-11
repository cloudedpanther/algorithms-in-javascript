// const INPUT_1 = ["20", "7", "23", "19", "10", "15", "25", "8", "13"];

// const input = INPUT_1;

// function findRealDwarves(overHeight, dwarf) {
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (overHeight === dwarf[i] + dwarf[j]) {
//         return dwarf
//           .filter((_, idx) => idx !== i && idx !== j)
//           .sort((a, b) => a - b);
//       }
//     }
//   }
// }

// const solution = (input) => {
//   const dwarf = input.map(Number);
//   const overHeight = dwarf.reduce((acc, cur) => acc + cur) - 100;
//   const answer = findRealDwarves(overHeight, dwarf);

//   console.log(answer.join("\n"));
// };

// solution(input);
