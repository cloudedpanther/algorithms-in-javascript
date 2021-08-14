// 삼각수 Tn = 1 + 2 + 3 + ... + n = n(n+1)/2
// 가우스의 정리: 모든 자연수는 세 개 이하의 삼각수의 합으로 나타낼 수 있음
// 자연수 중에서 정확히 세 개의 삼각수의 합으로 표현될 수 있는 수를 판별(각 삼각수는 다르지 않아도 됨)
// 각 테스트케이스에 대해서 조건에 맞으면 1, 아니면 0을 반환

const INPUT_1 = [3, 10, 20, 1000]; // map(e => parseInt(e));

const input = INPUT_1;

// Solution

// Variables
const T = input[0];
const answer = Array(T + 1).fill(0);
const TRI_NUM = [];

let n = 0;
while (1) {
  const tri = (n * (n + 1)) / 2;
  if (tri > 1000) break;

  TRI_NUM.push(tri);
  n++;
}

const TRI_LENGTH = TRI_NUM.length - 1;

for (let i = 1; i <= T; i++) {
  const K = input[i];

  for (let j = 1; TRI_NUM[j] < K; j++) {
    const K_1 = K - TRI_NUM[j];
    console.log(i, K_1);
    if (K_1 > 0) {
      for (let k = 1; TRI_NUM[k] < K_1; k++) {
        const K_2 = K_1 - TRI_NUM[k];

        if (K_2 > 0) {
          for (let l = 1; TRI_NUM[l] <= K_2; l++) {
            const K_3 = K_2 - TRI_NUM[l];

            if (K_3 === 0) answer[i] === 1;
          }
        }
      }
    }
  }
}

console.log(answer);
