const INPUT_1 = ["abcd", "3", "P x", "L", "P y"];
const INPUT_2 = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L", "B", "P y"];
const INPUT_3 = [
  "dmih",
  "11",
  "B",
  "B",
  "P x",
  "L",
  "B",
  "B",
  "B",
  "P y",
  "D",
  "D",
  "P z",
];

const input = INPUT_3;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[1]);

  // Functions
  function solve() {
    // initialize variables
    const leftSide = input[0].split("");
    const rightSide = [];
    let answer = "";

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
    while (leftSide.length > 0) {
      rightSide.push(leftSide.pop());
    }
    while (rightSide.length > 0) {
      answer += rightSide.pop();
    }
    console.log(answer);
  }

  // Run
  solve();
}

solution(input);
