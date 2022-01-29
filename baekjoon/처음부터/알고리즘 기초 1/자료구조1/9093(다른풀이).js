// const INPUT_1 = ["2", "I am happy today", "We want to win the first prize"];

// const input = INPUT_1;

// const solution = (input) => {
//   let answer = [];
//   for (const originalString of input.slice(1)) {
//     // 공백으로 구분되는 각 단어마다 뒤집어서 출력.
//     const stringArray = originalString.split(" ");
//     const reversedArray = stringArray.map((originalWord) => {
//       const stack = [];
//       let reversedWord = "";
//       originalWord.split("").forEach((letter) => stack.push(letter));
//       while (stack.length > 0) {
//         reversedWord += stack.pop();
//       }
//       return reversedWord;
//     });
//     answer.push(reversedArray.join(" "));
//   }
//   console.log(answer.join("\n"));
// };

// solution(input);
