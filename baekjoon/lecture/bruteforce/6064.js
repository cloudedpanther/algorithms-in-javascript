const INPUT_1 = ["3", "10 12 3 9", "10 12 7 2", "13 11 5 6"];
// 33
// -1
// 83

const input = INPUT_1;

// Solution
const solution = (input) => {
  // Variables
  const T = parseInt(input[0]);

  // Functions
  const getYear = (index) => {
    const data = input[index].split(" ").map(Number);
    const M = data[0];
    const N = data[1];
    const givenX = data[2] - 1;
    const givenY = data[3] - 1;

    let y= givenX % N;
    while(1) {
        if()
        y = (y + M) % N;
    }
    return -1;
  };

  const solve = () => {
    let answer = "";
    for (let i = 0; i < T; i++) {
      answer += getYear(i + 1);
      if (i < T - 1) answer += "\n";
    }
    console.log(answer);
  };

  // Run
  solve();
};

solution(input);
