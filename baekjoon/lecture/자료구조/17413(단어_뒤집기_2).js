// const INPUT_1 = ["baekjoon online judge"];
// // noojkeab enilno egduj
// const INPUT_2 = ["<open>tag<close>"];
// // <open>gat<close>
// const INPUT_3 = ["<ab cd>ef gh<ij kl>"];
// // <ab cd>fe hg<ij kl>
// const INPUT_4 = ["one1 two2 three3 4fourr 5five 6six"];
// // 1eno 2owt 3eerht rruof4 evif5 xis6
// const INPUT_5 = ["<int><max>2147483647<long long><max>9223372036854775807"];
// // <int><max>7463847412<long long><max>7085774586302733229
// const INPUT_6 = ["<problem>17413<is hardest>problem ever<end>"];
// // <problem>31471<is hardest>melborp reve<end>
// const INPUT_7 = ["<   space   >space space space<    spa   c e>"];
// // <   space   >ecaps ecaps ecaps<    spa   c e>

// const input = INPUT_7;

// // Solution
// function solution(input) {
//   // Variables
//   const stack = [];
//   const origin = input[0].split("");
//   let flag = 1;
//   let processed = "";

//   // Functions
//   function emptyStack() {
//     while (stack.length > 0) {
//       processed += stack.pop();
//     }
//   }

//   function solve() {
//     // initialize variables
//     for (let i = 0; i < origin.length; i++) {
//       const cur = origin[i];
//       if (cur === "<") flag = -1;

//       if (flag === 1 && cur !== " ") {
//         stack.push(cur);
//         continue;
//       }

//       emptyStack();
//       processed += cur;

//       if (cur === ">") flag = 1;
//     }
//     if (stack.length > 0) emptyStack();

//     console.log(processed);
//   }

//   // Run
//   solve();
// }

// solution(input);
