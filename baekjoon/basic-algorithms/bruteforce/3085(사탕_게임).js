// 사탕의 위치를 바꾼 경우를 모두 구한다
// 각 케이스별로 가장 긴 사슬을 구한다
// 가로 줄에서 가장 긴 사슬을 구한다
// 세로 줄에서 가장 긴 사슬을 구한다
// 둘 중에서 더 긴 사슬의 길이를 반환한다
// 이전의 값과 비교해서 최대 사슬 길이를 갱신한다

const INPUT_1 = ["3", "CCP", "CCP", "PPC"]; // expected output: 3
const INPUT_2 = ["4", "PPPP", "CYZY", "CCPY", "PPCC"]; // expected output: 4
const INPUT_3 = ["5", "YCPZY", "CYZZP", "CCPPP", "YCYZC", "CPPZZ"]; // expected output: 4

const input = INPUT_3;

// Solution

// Variables
const N = parseInt(input[0]);
const candies = input.slice(1).map((e) => e.split(""));

let max = 0;

// Functions
function checkMaxLength() {
  let currentBoardMax = 1;

  for (let i = 0; i < N; i++) {
    let rowSum = 1;
    let columnSum = 1;

    for (let j = 0; j < N - 1; j++) {
      // check row legnth
      if (candies[i][j] === candies[i][j + 1]) {
        rowSum++;
      } else {
        if (rowSum > currentBoardMax) currentBoardMax = rowSum;
        rowSum = 1;
      }

      // check column length
      if (candies[j][i] === candies[j + 1][i]) {
        columnSum++;
      } else {
        if (columnSum > currentBoardMax) currentBoardMax = columnSum;
        columnSum = 1;
      }
    }

    const biggerSum = Math.max(rowSum, columnSum);
    if (biggerSum > currentBoardMax) currentBoardMax = biggerSum;
  }

  // return max
  return currentBoardMax;
}

function swap(i, j) {
  const candyTmp = candies[i][j];
  let rowSwappedMax = 0;
  let columnSwappedMax = 0;

  // row-swap
  if (j < N - 1) {
    candies[i][j] = candies[i][j + 1];
    candies[i][j + 1] = candyTmp;

    rowSwappedMax = checkMaxLength();

    candies[i][j + 1] = candies[i][j];
    candies[i][j] = candyTmp;
  }

  // column-swap
  if (i < N - 1) {
    candies[i][j] = candies[i + 1][j];
    candies[i + 1][j] = candyTmp;

    columnSwappedMax = checkMaxLength();

    candies[i + 1][j] = candies[i][j];
    candies[i][j] = candyTmp;
  }

  // update max length
  if (rowSwappedMax || columnSwappedMax) {
    const currentMax = Math.max(rowSwappedMax, columnSwappedMax);

    if (max < currentMax) {
      max = currentMax;
    }
  }
}

function solve() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      swap(i, j);
    }
  }

  console.log(max);
}

// Run
solve();
