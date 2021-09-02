// 3으로 나눈다
// 2로 나눈다
// 1을 뺀다
// 위 세가지 연산에서 골라 거듭해 1을 만든다
// 가장 적게 한 연산의 횟수

// Bottom-Up Method

const INPUT_1 = ["2"]; // 1
const INPUT_2 = ["10"]; // 3
const INPUT_3 = ["1000000"];

const input = INPUT_3;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const MAX = 3000000;
  let memo = new Array(N + 1).fill(MAX);
  memo[1] = 0;

  function solve() {
    for (let i = 1; i < N; i++) {
      memo[i + 1] = Math.min(memo[i + 1], memo[i] + 1);
      if (i * 2 <= N) memo[i * 2] = Math.min(memo[i * 2], memo[i] + 1);
      if (i * 3 <= N) memo[i * 3] = Math.min(memo[i * 3], memo[i] + 1);
    }
    console.log(memo[N]);
  }

  // Run
  solve();
}

solution(input);
