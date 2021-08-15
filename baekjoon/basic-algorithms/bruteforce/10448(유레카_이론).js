// 삼각수 Tn = 1 + 2 + 3 + ... + n = n(n+1)/2
// 가우스의 정리: 모든 자연수는 세 개 이하의 삼각수의 합으로 나타낼 수 있음
// 1000보다 작거나 같은 삼각수를 모두 계산 후 저장
// 자연수 중에서 정확히 세 개의 삼각수의 합으로 표현될 수 있는 수를 판별(각 삼각수는 다르지 않아도 됨)
// 각 테스트케이스에 대해서 조건에 맞으면 1, 아니면 0을 반환

const INPUT_1 = [3, 10, 20, 1000]; // map(e => parseInt(e));

const input = INPUT_1;

// Solution

// Variables
const T = input[0];
const answer = Array(T + 1).fill(0);
const TRI_NUM = [];

// 1000보다 작거나 같은 삼각수 모두 계산 후 저장
let n = 0;
while (1) {
  const tri = (n * (n + 1)) / 2;
  if (tri > 1000) break;

  TRI_NUM.push(tri);
  n++;
}
const RANGE = TRI_NUM.length;

// Functions
function isTriSum(caseNum, level, caseOrder) {
  for (let i = 1; i <= RANGE; i++) {
    const newCaseNum = caseNum - TRI_NUM[i];
    if (level === 3) {
      if (newCaseNum === 0) {
        answer[caseOrder] = 1;
        return;
      }
      continue;
    }
    if (newCaseNum <= 0) return;

    isTriSum(newCaseNum, level + 1, caseOrder);
  }
}

function solve() {
  // 각각의 케이스에 대해 삼각수를 빼는 계산
  for (let i = 1; i <= T; i++) {
    const K = input[i];
    isTriSum(K, 1, i);
  }

  for (let i = 1; i <= T; i++) {
    console.log(answer[i]);
  }
}

solve();
