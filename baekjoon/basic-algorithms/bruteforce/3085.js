// 사탕의 위치를 바꾼 경우를 모두 구한다
// 각 케이스별로 가장 긴 사슬을 구한다
// 가로 줄에서 가장 긴 사슬을 구한다
// 세로 줄에서 가장 긴 사슬을 구한다
// 둘 중에서 더 긴 사슬의 길이를 반환한다
// 이전의 값과 비교해서 최대 사슬 길이를 갱신한다

const INPUT_1 = ["3", "CCP", "CCP", "PPC"]; // expected output: 3
const INPUT_2 = ["4", "PPPP", "CYZY", "CCPY", "PPCC"]; // expected output: 4
const INPUT_3 = ["5", "YCPZY", "CYZZP", "CCPPP", "YCYZC", "CPPZZ"]; // expected output: 4

const input = INPUT_1;

// Solution
const N = parseInt(input[0]);
const candies = input.slice(1).map((e) => e.split(""));

console.log("a");
