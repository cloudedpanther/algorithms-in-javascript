// const INPUT_1 = ["2 7", "2 3 2 3 1 2 7"]; // 2

// const input = INPUT_1;

// // Solution
// function solution(input) {
//   // Variables
//   const N = parseInt(input[0].split(" ")[0]); // 멀티탭 구멍의 개수
//   const K = parseInt(input[0].split(" ")[1]); // 전기 기구의 개수
//   const gajets = input[1].split(" ").map((gajet) => parseInt(gajet));
//   let nowUsing = [];
//   let plugOuts = 0;
//   // Functions
//   function solve() {
//     for (let i = 0; i < K; i++) {
//       const gajetNow = gajets[i];
//       // 꽂혀 있지 않을 때
//       if (nowUsing.findIndex((gajet) => gajet === gajetNow) == -1) {
//         // 꽂을 자리가 없을 때
//         if (nowUsing.length >= N) {
//           let mostAfterGajetIndex = 0;
//           let mostAfterGajetName = 0;
//           const tmpArr = [];

//           while (nowUsing.length > 0) {
//             const plugNow = nowUsing.pop();
//             const nextUseTime = gajets.findIndex(
//               (gajet, index) => gajet === plugNow && index > i
//             );
//             if (nextUseTime > mostAfterGajetIndex || nextUseTime === -1) {
//               if (mostAfterGajetName !== 0) tmpArr.push(mostAfterGajetName);
//               mostAfterGajetIndex = nextUseTime;
//               mostAfterGajetName = plugNow;
//             }
//             if (mostAfterGajetIndex === -1) {
//               while (nowUsing.length > 0) {
//                 tmpArr.push(nowUsing.pop());
//               }
//               break;
//             }
//           }

//           nowUsing = tmpArr;
//           plugOuts++;
//         }
//         nowUsing.push(gajetNow);
//       }
//     }

//     console.log(plugOuts);
//   }

//   // Run
//   solve();
// }

// solution(input);
