const INPUT_1 = ["5 4", "0 1", "1 2", "2 3", "3 4"];

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  const fl = input[0].split(" ");
  const N = Number(fl[0]); // number of people
  const M = Number(fl[1]); // number of relations
  let list = new Array(N);
  for (let i = 0; i < N; i++) {
    list[i] = [];
  }

  // Functions
  const connect = (index, past) => {
    for (let i = 0; i < list[index].length; i++) {
      const nextIndex = list[index][i];
      if (!past.includes(nextIndex)) connect(nextIndex, past.push(nextIndex));
    }
  };

  const solve = () => {
    for (let i = 1; i <= M; i++) {
      const cur = input[i].split(" ");
      const n1 = Number(cur[0]);
      const n2 = Number(cur[1]);
      list[n1].push(n2);
      list[n2].push(n1);
    }

    for (let i = 0; i < N; i++) {}
  };

  // Run
  solve();
};

solution(input);
