const INPUT_1 = ["4 6", "101111", "101010", "101011", "111011"];

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  const fl = input[0].split(" ");
  const N = Number(fl[0]);
  const M = Number(fl[1]);
  let board = new Array(N);

  // Functions
  const solve = () => {
    for (let i = 0; i < N; i++) {
      board[i] = input[i + 1].split("").map(Number);
    }
    console.log(board);
  };

  // Run
  solve();
};

solution(input);
