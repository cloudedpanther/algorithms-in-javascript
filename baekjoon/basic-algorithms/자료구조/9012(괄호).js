const INPUT_1 = [
  "6",
  "(())())",
  "(((()())()",
  "(()())((()))",
  "((()()(()))(((())))()",
  "()()()()(()()())()",
  "(()((())()(",
];
// NO
// NO
// YES
// NO
// YES
// NO
const INPUT_2 = ["3", "((", "))", "())(()"];
// NO
// NO
// NO

const input = INPUT_2;

// Solution
function solution(input) {
  // Variables
  let stack = [];
  const N = parseInt(input[0]);

  // Functions
  function solve() {
    // initialize variables
    let answer = "";

    // solve
    for (let i = 1; i < N + 1; i++) {
      const seq = input[i].split("");
      let flag = 1;
      for (let j = 0; j < seq.length; j++) {
        if (seq[j] === "(") stack.push(1);
        else if (stack.length === 0) {
          answer += "NO";
          flag = 0;
          break;
        } else stack.pop();
      }
      if (stack.length !== 0) answer += "NO";
      else if (flag === 1) answer += "YES";
      if (i < N) answer += "\n";
      stack = [];
    }
    console.log(answer);
  }

  // Run
  solve();
}

solution(input);
