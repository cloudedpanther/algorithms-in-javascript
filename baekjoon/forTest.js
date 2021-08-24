const INPUT_1 = ["2 7", "2 3 2 3 1 2 7"]; // 2
const INPUT_2 = ["2 4", "5 3 1 5"]; // 1

const input = INPUT_2;

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0].split(" ")[0]);
  const K = parseInt(input[0].split(" ")[1]);
  const gajets = input[1].split(" ").map((gajet) => parseInt(gajet));
  const nowUsing = [];
  let plugOuts = 0;

  // Functions
  function solve() {
    for (let i = 0; i < K; i++) {
      const gajetName = gajets[i];
      const nextUseTime = gajets.findIndex(
        (gajet, index) => index > i && gajet === gajetName
      );
      const gajetNow = {
        name: gajetName,
        nextUse: nextUseTime,
      };
      const pluggedIndex = nowUsing.findIndex(
        (gajet) => gajet.name === gajetNow.name
      );

      // 이미 꽂혀있을 때: 아무 것도 안해도 됨
      if (pluggedIndex !== -1) {
        nowUsing[pluggedIndex].nextUse = nextUseTime;
      }
      // 꽂혀있지 않을 때
      else {
        // 더 꽂을 수 없을 때: 한 칸을 만든다(더이상 사용하지 않거나 가장 나중에 사용하는 것을 뺀다)
        if (nowUsing.length >= N) {
          // 더이상 사용하지 않는 것이 있을 때
          if (nowUsing[0].nextUse === -1) nowUsing.shift();
          // 그렇지 않아서 가장 나중에 사용하는 것을 빼려고 할 때
          else nowUsing.pop();

          plugOuts++;
        }

        nowUsing.push(gajetNow);
      }

      nowUsing.sort((a, b) => a.nextUse - b.nextUse);
    }

    console.log(plugOuts);
  }

  // Run
  solve();
}

solution(input);
