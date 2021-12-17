const INPUT_1 = ["6", "1 2", "3 4", "6 4", "2 3", "1 3", "3 5"];

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  const N = Number(input[0]);
  let list = new Array(N + 1);
  let dist = new Array(N + 1).fill(-1);
  let check = new Array(N + 1).fill(0);

  // Functions
  const findCycle = (x, p) => {
    if (check[x] === 1) return x;
    check[x] = 1;
    for (let i = 0; i < list[x].length; i++) {
      const y = list[x][i];
      if (y === p) continue;
      const res = findCycle(y, x);
      if (res === -2) return -2;
      if (res >= 0) {
        check[x] = 2;
        if (x === res) return -2;
        else return res;
      }
    }
  };

  const solve = () => {
    for (let i = 1; i < N + 1; i++) {
      list[i] = [];
    }
    for (let i = 0; i < N; i++) {
      const line = input[i + 1].split(" ");
      const n1 = Number(line[0]);
      const n2 = Number(line[1]);
      list[n1].push(n2);
      list[n2].push(n1);
    }
    console.log(list);
  };

  // Run
  solve();
};

solution(input);
