const INPUT_1 = ["abcd", "3", "P x", "L", "P y"];
const INPUT_2 = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L", "B", "P y"];

const input = INPUT_2;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[1]);

  // Functions
  function solve() {
    // initialize variables
    const leftSide = input[0].split("");
    const rightSide = [];

    for (let i = 2; i < N + 2; i++) {
      const command = input[i].split(" ");
      if (command[0] === "L" && leftSide.length !== 0)
        rightSide.push(leftSide.pop());
      if (command[0] === "D" && rightSide.length !== 0)
        leftSide.push(rightSide.pop());
      if (command[0] === "B" && leftSide.length !== 0) leftSide.pop();
      if (command[0] === "P") leftSide.push(command[1]);
    }

    // console.log(leftSide.join("") + rightSide.reverse().join(""));
    while (rightSide.length > 0) {
      leftSide.push(rightSide.pop());
    }
    console.log(leftSide.join(""));
  }

  // Run
  solve();
}

solution(input);
