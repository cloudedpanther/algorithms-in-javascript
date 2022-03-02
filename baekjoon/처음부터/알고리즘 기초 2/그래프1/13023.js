// const INPUT_1 = ["5 5", "0 1", "1 2", "2 3", "3 0", "1 4"];
// const INPUT_2 = ["6 5", "0 1", "0 2", "0 3", "0 4", "0 5"];

// const input = INPUT_2;

// const solution = (input) => {
//   const [N, _] = input[0].split(" ").map(Number);
//   const friends = Array.from({ length: N }, () => []);
//   for (const relation of input.slice(1)) {
//     const [a, b] = relation.split(" ").map(Number);
//     friends[a].push(b);
//     friends[b].push(a);
//   }

//   for (let i = 0; i < N; i++) {
//     const chain = new Set();
//     chain.add(i);
//     if (isFiveChain(1, i, chain)) {
//       console.log(1);
//       return;
//     }
//   }

//   console.log(0);

//   function isFiveChain(index, cur, chain) {
//     if (index === 5) return true;

//     for (let i = 0; i < friends[cur].length; i++) {
//       const next = friends[cur][i];
//       if (!chain.has(next)) {
//         chain.add(next);
//         if (isFiveChain(index + 1, next, chain)) return true;
//         chain.delete(next);
//       }
//     }
//     return false;
//   }
// };

// solution(input);
