const INPUT_1 = ["3 15", "1", "5", "12"];
const INPUT_2 = ["3 30", "3", "8", "4"];
const INPUT_3 = ["1 1", "15"];

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const n = parseInt(input[0].split(" ")[0]); // 동전의 종류
  const k = parseInt(input[0].split(" ")[1]); // 목표 금액
  const coins = [];
  let dp = new Array(k + 1).fill(k + 1);

  // Functions
  function solve() {
    // initialize variables
    for (let i = 1; i < n + 1; i++) {
      coins.push(parseInt(input[i]));
    }
    coins.sort((a, b) => a - b);
    dp[0] = 0;

    // bottom-up approach
    for (let i = 0; i < k; i++) {
      for (let j = 0; j < n; j++) {
        const value = i + coins[j];
        if (value <= k) {
          dp[value] = Math.min(dp[value], dp[i] + 1);
        }
      }
    }

    if (dp[k] === k + 1) console.log(-1);
    else console.log(dp[k]);
  }

  // Run
  solve();
}

solution(input);
