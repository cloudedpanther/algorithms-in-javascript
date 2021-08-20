// N개의 수업, 시작시간과 종료시간이 주어진다.
// 가능한 적은 강의실을 사용해서 모든 수업을 진행해야 한다.
// 시작시간과 종료시간은 같을 수 없다.
// 최대의 수업을 한 강의실에 배정하는 방식을 응용한다.
// 빨리 수업이 끝난 강의실에 빨리 시작하는 수업을 할당해야 한다. -> 시작시간에 따라 정렬한다.

const INPUT_1 = ["3", "1 3", "2 4", "3 5"]; // expected output: 2
const INPUT_2 = ["5", "1 3", "2 4", "3 5", "5 7", "4 7"]; // expected output: 2
const INPUT_3 = ["200000"].concat(new Array(200000).fill("1 2"));

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const lectures = input
    .slice(1)
    .map((e) => e.split(" ").map((e) => parseInt(e)))
    .sort((a, b) => a[0] - b[0]);
  const endTimes = [0];

  // Functions
  function solve() {
    for (let i = 0; i < N; i++) {
      const S = lectures[i][0];
      const T = lectures[i][1];
      const fastestEndTime = endTimes[0];

      if (S < fastestEndTime) {
        endTimes.push(T);
      } else {
        for (let j = 0; j < endTimes.length; j++) {
          if (endTimes[j] <= S) {
            endTimes[j] = T;
            break;
          }
        }
      }

      endTimes.sort((a, b) => a - b);
    }

    console.log(endTimes.length);
  }

  // Run
  solve();
}

solution(input);
