const INPUT_1 = [
  "7 6",
  "AAAAAB",
  "ABBBAB",
  "ABAAAB",
  "ABABBB",
  "ABAAAB",
  "ABBBAB",
  "AAAAAB",
];
const INPUT_2 = ["3 4", "AAAA", "ABCA", "AADA"];

const input = INPUT_2;

// Solution
const solution = (input) => {
  // Variables
  const fl = input[0].split(" ");
  const N = Number(fl[0]);
  const M = Number(fl[1]);
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let board = new Array(N);
  let check = new Array(N);
  let answer = "NO";

  // Functions
  const dfs = (x, y, px, py, cycle) => {
    check[x][y] = cycle;
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (board[nx][ny] === board[x][y]) {
          if ((px !== nx || py !== ny) && check[nx][ny] === check[x][y]) {
            answer = "YES";
          }
          if (!check[nx][ny]) dfs(nx, ny, x, y, cycle);
        }
      }
    }
  };

  const solve = () => {
    for (let i = 0; i < N; i++) {
      board[i] = input[i + 1].split("");
      check[i] = new Array(M).fill(0);
    }
    let cycle = 1;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!check[i][j]) {
          dfs(i, j, i, j, cycle);
          cycle++;
        }
      }
    }
    console.log(answer);
  };

  // Run
  solve();
};

solution(input);
