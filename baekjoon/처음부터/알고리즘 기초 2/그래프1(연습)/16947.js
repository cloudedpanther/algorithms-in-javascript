// const INPUT_1 = ["6", "1 2", "3 4", "6 4", "2 3", "1 3", "3 5"];
// const INPUT_2 = ["4", "1 3", "4 3", "4 2", "1 2"];
// const INPUT_3 = [
//   "51",
//   "1 2",
//   "2 3",
//   "3 4",
//   "4 5",
//   "5 6",
//   "6 7",
//   "7 8",
//   "8 9",
//   "9 10",
//   "10 11",
//   "11 12",
//   "12 13",
//   "13 14",
//   "14 15",
//   "15 16",
//   "16 17",
//   "17 18",
//   "18 19",
//   "19 20",
//   "20 21",
//   "21 22",
//   "22 23",
//   "23 24",
//   "24 25",
//   "25 26",
//   "26 27",
//   "27 28",
//   "28 29",
//   "29 30",
//   "30 31",
//   "31 32",
//   "32 33",
//   "33 34",
//   "34 35",
//   "35 36",
//   "36 37",
//   "37 38",
//   "38 39",
//   "39 40",
//   "40 41",
//   "41 42",
//   "42 43",
//   "43 1",
//   "11 44",
//   "44 45",
//   "45 46",
//   "46 47",
//   "34 48",
//   "48 49",
//   "49 50",
//   "50 51",
// ];
// const INPUT_4 = [
//   "12",
//   "1 3",
//   "3 4",
//   "4 5",
//   "5 6",
//   "6 7",
//   "7 8",
//   "8 4",
//   "2 3",
//   "7 9",
//   "9 12",
//   "7 10",
//   "10 11",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const N = parseInt(input[0]);
//   const connected = [null, ...Array.from({ length: N }, () => [])];
//   input.slice(1).forEach((e) => {
//     const [a, b] = e.split(" ").map(Number);
//     connected[a].push(b);
//     connected[b].push(a);
//   });
//   const distance = [null, ...new Array(N).fill(-1)];

//   checkCycle(1, 1);
//   for (let i = 1; i <= N; i++) {
//     if (distance[i] !== 0) distance[i] = -1;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (distance[i] === 0) {
//       checkTrees(i, 0);
//     }
//   }

//   console.log(distance.slice(1).join(" "));

//   function checkTrees(currentStation, dist) {
//     distance[currentStation] = dist;

//     for (let i = 0; i < connected[currentStation].length; i++) {
//       const nextStation = connected[currentStation][i];
//       if (distance[nextStation] === -1) {
//         checkTrees(nextStation, dist + 1);
//       }
//     }
//   }

//   function checkCycle(currentStation, dist) {
//     distance[currentStation] = dist;

//     let cycleLength = -1;
//     for (let i = 0; i < connected[currentStation].length; i++) {
//       const nextStation = connected[currentStation][i];
//       const currentLength = distance[currentStation] - distance[nextStation];
//       if (distance[nextStation] === -1) {
//         const returnedLength = checkCycle(nextStation, dist + 1);
//         if (returnedLength > 0) {
//           cycleLength = Math.max(cycleLength, returnedLength - 1);
//           distance[currentStation] = 0;
//         }
//       } else if (
//         currentLength > 1 &&
//         distance[currentStation] > 0 &&
//         distance[nextStation] > 0
//       ) {
//         cycleLength = Math.max(cycleLength, currentLength);
//         distance[currentStation] = 0;
//       }
//     }
//     return cycleLength;
//   }
// };

// solution(input);
