const INPUT_1 = ["5", "3 4", "1 1", "1 -1", "2 2", "3 3"];
// 1 -1
// 1 1
// 2 2
// 3 3
// 3 4

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const coordinates = [];
  let answer = "";

  // Functions
  function solve() {
    // initialize variables
    for (let i = 1; i < N + 1; i++) {
      const coor = input[i].split(" ");
      const x = parseInt(coor[0]);
      const y = parseInt(coor[1]);
      coordinates.push([x, y]);
    }

    // sort
    coordinates.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // print
    for (let i = 0; i < N; i++) {
      const sortedX = coordinates[i][0];
      const sortedY = coordinates[i][1];
      answer += `${sortedX} ${sortedY}`;
      if (i < N - 1) answer += "\n";
    }

    console.log(answer);
  }

  // Run
  solve();
}

solution(input);
