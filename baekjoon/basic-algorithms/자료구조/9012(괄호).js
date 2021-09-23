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

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  let stack = [];
  const N = parseInt(input[0]);

  // Functions
  function isVPS(index) {
    const seq = input[index].split("");
    for (let i = 0; i < seq.length; i++) {
      if (seq[i] === "(") stack.push(1);
      else if (stack.length === 0) return "NO";
      else stack.pop();
    }
    if (stack.length !== 0) return "NO";
    else return "YES";
  }

  function solve() {
    // initialize variables
    let answer = "";

    // solve
    for (let i = 1; i < N + 1; i++) {
      answer += isVPS(i);
      if (i < N) answer += "\n";
      stack = [];
    }
    console.log(answer);
  }

  // Run
  solve();
}

solution(input);
