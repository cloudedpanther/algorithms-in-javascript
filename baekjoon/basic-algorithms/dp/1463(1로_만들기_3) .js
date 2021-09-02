// 3으로 나눈다
// 2로 나눈다
// 1을 뺀다
// 위 세가지 연산에서 골라 거듭해 1을 만든다
// 가장 적게 한 연산의 횟수

// Top-Down Method: Stack-Size-Exceed
// Must use loop, not recursive pattern

const INPUT_1 = ["2"]; // 1
const INPUT_2 = ["10"]; // 3
const INPUT_3 = ["1000000"];

const input = INPUT_3;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const memo = new Array(N + 1).fill(-1);

  // Functions
  function dp(n) {
    if (n === 1) return 0;
    if (memo[n] !== -1) return memo[n];

    let value = dp(n - 1) + 1;
    if (n % 3 === 0) value = Math.min(value, dp(n / 3) + 1);
    if (n % 2 === 0) value = Math.min(value, dp(n / 2) + 1);

    memo[n] = value;
    return value;
  }

  function solve() {
    console.log(dp(N));
  }

  // Run
  solve();
}

solution(input);
