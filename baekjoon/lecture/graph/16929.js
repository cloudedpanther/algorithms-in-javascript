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
const INPUT_3 = ["3 4", "AAAA", "ABCA", "AAAA"];
const INPUT_4 = ["4 4", "YYYR", "BYBY", "BBBY", "BBBY"];
const INPUT_5 = ["2 13", "ABCDEFGHIJKLM", "NOPQRSTUVWXYZ"];

const input = INPUT_5;

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

  // Functions
  const dfs = (x, y, cnt) => {
    if (check[x][y] > 0) return cnt - check[x][y] >= 4;
    check[x][y] = cnt;
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (board[nx][ny] === board[x][y]) {
          if (dfs(nx, ny, cnt + 1)) return true;
        }
      }
    }
    return false;
  };

  const solve = () => {
    for (let i = 0; i < N; i++) {
      board[i] = input[i + 1].split("");
      check[i] = new Array(M).fill(0);
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (check[i][j] === 0) {
          if (dfs(i, j, 1)) {
            console.log("YES");
            return;
          }
        }
      }
    }
    console.log("NO");
  };

  // Run
  solve();
};

solution(input);
