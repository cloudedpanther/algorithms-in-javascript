// const INPUT_1 = ["9", "> < < < > > > < <"];
// const INPUT_2 = ["2", "< >"];

// const input = INPUT_2;

// // Solution
// const solution = (input) => {
//   // Variables
//   const K = parseInt(input[0]);
//   const selected = new Array(10).fill(false);
//   const cmd = input[1].split(" ");
//   let max = "";
//   let min = "";

//   // Functions
//   const acceptable = (prev, cur, sign) => {
//     if (sign === ">") {
//       if (prev > cur) return true;
//       else return false;
//     }
//     if (sign === "<") {
//       if (prev < cur) return true;
//       else return false;
//     }
//   };

//   const go = (index, num) => {
//     if (index === K + 1) {
//       const made = num[0] === "0" ? parseInt(num.slice(1)) : parseInt(num);
//       if (max === "" || Number(max) < made) max = num;
//       if (min === "" || made < Number(min)) min = num;
//       return;
//     }
//     for (let i = 0; i < 10; i++) {
//       if (selected[i]) continue;
//       if (index === 0 || acceptable(num[index - 1], i, cmd[index - 1])) {
//         selected[i] = true;
//         const newNum = num + i;
//         go(index + 1, newNum);
//         selected[i] = false;
//       }
//     }
//   };

//   const solve = () => {
//     go(0, "");
//     console.log(max);
//     console.log(min);
//   };

//   // Run
//   solve();
// };

// solution(input);
