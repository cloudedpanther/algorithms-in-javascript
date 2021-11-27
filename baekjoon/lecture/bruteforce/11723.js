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
  let S = Math.pow(2, 19);

  // Functions
  const calc = (input) => {
    const cmd = input.split(" ")[0];
    const num = input.length > 1 ? input.split(" ")[1] : null;
    if (cmd === "add") {
      S = S | (1 << (num - 1));
    } else if (cmd === "remove") {
      S = S & ~(1 << (num - 1));
    } else if (cmd === "check") {
      //
    } else if (cmd === "toggle") {
      const index = S.indexOf(num);
      if (index === -1) {
        S.push(num);
      } else {
        S.splice(index, 1);
      }
    } else if (cmd === "all") {
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
    } else if (cmd === "empty") {
      S = [];
    }
  };

  const solve = () => {
    // const M = Number(input[0]);
    // for (let i = 1; i <= M; i++) {
    //   calc(input[i]);
    // }
    let a = Math.pow(2, 10);
    console.log(a);
    a = a | (1 << 0);
    console.log(a);
  };

  // Run
  solve();
};

solution(input);
