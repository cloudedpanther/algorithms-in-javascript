const INPUT_1 = ["4", "-+0++++--+"];

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  const N = parseInt(input[0]);
  const sign = input[1].split("");
  const S = new Array(N);
  let start = 0;
  for (let i = 0; i < N; i++) {
    S[i] = new Array(N - i);
    for (let j = 0; j < N - i; j++) {
      S[i][j] = sign[start + j];
    }
    start += N - i;
  }

  // Functions
  const fits = (index, cur) => {
    for (let i = 0; i < cur; i++) {
      if (S[i][index] === "-") {
      }
    }
  };

  const go = (index) => {
    if (index === N) {
    }
  };

  const solve = () => {
    // console.log(S);
  };

  // Run
  solve();
};

solution(input);
