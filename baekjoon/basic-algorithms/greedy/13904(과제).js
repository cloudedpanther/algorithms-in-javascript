const INPUT_1 = ["7", "4 60", "4 40", "1 20", "2 50", "3 30", "4 10", "6 5"];

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const MAX_NUMBER = 1001;
  const schedule = new Array(MAX_NUMBER).fill(0);
  let sum = 0;

  // Functions
  function solve() {
    const assignments = [];
    for (let i = 1; i <= N; i++) {
      const d = parseInt(input[i].split(" ")[0]);
      const w = parseInt(input[i].split(" ")[1]);
      assignments.push([d, w]);
    }

    assignments.sort((a, b) => b[1] - a[1] || b[0] - a[0]);

    for (let i = 0; i < N; i++) {
      const current = assignments[i];
      for (let j = current[0]; j > 0; j--) {
        if (schedule[j] === 0) {
          schedule[j] = 1;
          sum += current[1];
          break;
        }
      }
    }

    console.log(sum);
  }

  // Run
  solve();
}

solution(input);
