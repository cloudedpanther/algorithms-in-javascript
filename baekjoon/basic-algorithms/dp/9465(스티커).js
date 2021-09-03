// Top-Down Method fail again(Stack Size Exceeded)

const INPUT_1 = [
  "2",
  "5",
  "50 10 100 20 40",
  "30 50 70 10 60",
  "7",
  "10 30 10 50 100 20 40",
  "20 40 30 50 60 20 80",
];
const INPUT_2 = ["1", "2", "50 10", "40 30"];

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const MAX = 100000;
  const T = parseInt(input[0]);
  let stickers = [];
  let lastRow = 0;
  let dp = new Array(MAX);

  // Functions
  function findBest(state, startColumn) {
    const nextColumn = startColumn + 1;
    if (startColumn === lastRow) return 0;
    if (dp[startColumn][state] !== -1) return dp[startColumn][state];

    let value = findBest(0, nextColumn);
    if (state !== 1)
      value = Math.max(
        value,
        findBest(1, nextColumn) + stickers[startColumn][0]
      );
    if (state !== 2)
      value = Math.max(
        value,
        findBest(2, nextColumn) + stickers[startColumn][1]
      );

    dp[startColumn][state] = value;
    return value;
  }

  function solve() {
    let answer = "";

    for (let i = 1; i < T * 3 + 1; i += 3) {
      // initialize stickers
      const n = parseInt(input[i]);
      const firstRow = input[i + 1].split(" ").map((e) => parseInt(e));
      const secondRow = input[i + 2].split(" ").map((e) => parseInt(e));
      const newStickers = [];
      for (let j = 0; j < n; j++) {
        newStickers.push([firstRow[j], secondRow[j]]);
      }
      stickers = newStickers;
      lastRow = n;
      for (let i = 0; i < MAX; i++) {
        dp[i] = [-1, -1, -1];
      }

      // calculate
      answer += findBest(0, 0) + "\n";
    }

    console.log(answer.slice(0, -1));
  }

  // Run
  solve();
}

solution(input);
