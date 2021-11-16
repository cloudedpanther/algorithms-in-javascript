// const INPUT_1 = ["7", "3 10", "5 20", "1 10", "1 20", "2 15", "4 40", "2 200"];

// const input = INPUT_1;

// // Solution
// const solution = (input) => {
//   // Variables
//   const N = parseInt(input[0]);
//   const T = [];
//   const P = [];
//   for (let i = 1; i <= N; i++) {
//     const cur = input[i].split(" ");
//     T.push(parseInt(cur[0]));
//     P.push(parseInt(cur[1]));
//   }

//   // Functions
//   const getProfit = (day, wallet) => {
//     if (day === N) return wallet;
//     let maxProfit = getProfit(day + 1, wallet);
//     if (day + T[day] <= N)
//       maxProfit = Math.max(maxProfit, getProfit(day + T[day], wallet + P[day]));
//     return maxProfit;
//   };

//   const solve = () => {
//     const profit = getProfit(0, 0);
//     console.log(profit);
//   };

//   // Run
//   solve();
// };

// solution(input);
