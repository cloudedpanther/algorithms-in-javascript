const INPUT_1 = [
  "26",
  "add 1",
  "add 2",
  "check 1",
  "check 2",
  "check 3",
  "remove 2",
  "check 1",
  "check 2",
  "toggle 3",
  "check 1",
  "check 2",
  "check 3",
  "check 4",
  "all",
  "check 10",
  "check 20",
  "toggle 10",
  "remove 20",
  "check 10",
  "check 20",
  "empty",
  "check 1",
  "toggle 1",
  "check 1",
  "toggle 1",
  "check 1",
];

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  let S = [];

  // Functions
  const calc = (input) => {
    const cmd = input.split(" ");
    if (cmd[0] === "add") {
      if (!S.includes(cmd[1])) {
        S.push(cmd[1]);
      }
    } else if (cmd[0] === "remove") {
      const index = S.indexOf(cmd[1]);
      if (index !== -1) {
        S.splice(index, 1);
      }
    } else if (cmd[0] === "check") {
      if (S.includes(cmd[1])) {
        console.log(1);
      } else {
        console.log(0);
      }
    } else if (cmd[0] === "toggle") {
      const index = S.indexOf(cmd[1]);
      if (index === -1) {
        S.push(cmd[1]);
      } else {
        S.splice(index, 1);
      }
    } else if (cmd[0] === "all") {
      S = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ];
    } else if (cmd[0] === "empty") {
      S = [];
    }
  };

  const solve = () => {
    const M = Number(input[0]);
    for (let i = 1; i <= M; i++) {
      calc(input[i]);
    }
  };

  // Run
  solve();
};

solution(input);
