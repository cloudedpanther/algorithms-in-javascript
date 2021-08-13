// 삼각수 Tn = 1 + 2 + 3 + ... + n = n(n+1)/2
// 가우스의 정리: 모든 자연수는 세 개 이하의 삼각수의 합으로 나타낼 수 있음
// 자연수 중에서 정확히 세 개의 삼각수의 합으로 표현될 수 있는 수를 판별(각 삼각수는 다르지 않아도 됨)
// 각 테스트케이스에 대해서 조건에 맞으면 1, 아니면 0을 반환

const INPUT_1 = [3, 10, 20, 1000]; // map(e => parseInt(e));

const input = INPUT_1;

// Solution

// Variables
const T = input[0];
const MAX = Math.max(...input);
const TRI_NUM = [];

while (1) {}

for (let i = 0; i <= T; i++) {
  const K = input[i];
  console.log(K);
}
