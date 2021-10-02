const INPUT_1 = ["90"]; // 2

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  let dp = new Array(N + 1);

  // Functions
  function solve() {
    for (let i = 1; i < N + 1; i++) {
      dp[i] = new Array(2);
    }
    dp[1][0] = 0n;
    dp[1][1] = 1n;

    for (let i = 2; i < N + 1; i++) {
      dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
      dp[i][1] = dp[i - 1][0];
    }

    console.log(String(dp[N][0] + dp[N][1]));
  }

  // Run
  solve();
}

solution(input);
