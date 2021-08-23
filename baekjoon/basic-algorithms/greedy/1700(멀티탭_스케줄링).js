const INPUT_1 = ["2 7", "2 3 2 3 1 2 7"]; // 2

const input = INPUT_1;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0].split(" ")[0]); // 멀티탭 구멍의 개수
  const K = parseInt(input[0].split(" ")[1]); // 전기 기구의 개수
  const gajets = input[1].split(" ");
  const sortedGajets = [];

  // Functions
  function solve() {
    for (let i = 0; i < K; i++) {
      const gajetName = gajets[i];
      const gajetIndex = sortedGajets.findIndex(
        (gajet) => gajet.name === gajetName
      );
      if (gajetIndex !== -1) {
        sortedGajets[gajetIndex].used++;
      } else {
        const gajet = {
          name: gajetName,
          used: 1,
        };
        sortedGajets.push(gajet);
      }
    }
    sortedGajets.sort((a, b) => b.used - a.used);
    console.log(sortedGajets);
  }

  // Run
  solve();
}

solution(input);
