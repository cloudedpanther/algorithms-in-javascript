const INPUT_1 = ["7", "1 1 2 3 4 2 1"];

const input = INPUT_1;

const solution = (input) => {
  const N = parseInt(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const MAX = Math.max(...numbers);
  let frequency = new Array(MAX + 1).fill(0);
  numbers.forEach((e) => frequency[e]++);

  let answer = new Array(N);
  const stack = [];
  for (let i = N - 1; i >= 0; i--) {
    const num = numbers[i];
    while (1) {
      if (stack.length === 0) {
        answer[i] = -1;
        break;
      } else {
        const top = stack[stack.length - 1];
        if (frequency[num] < frequency[top]) {
          answer[i] = top;
          break;
        } else {
          stack.pop();
        }
      }
    }
    stack.push(num);
  }

  console.log(answer.join(" "));
};

solution(input);
