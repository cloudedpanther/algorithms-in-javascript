const INPUT_1 = ["4", "1 2 3 4"];
const INPUT_2 = ["4", "4 3 2 1"];

const input = INPUT_1;

const solution = (input) => {
  const N = parseInt(input[0]);
  const seq = input[1].split(" ").map(Number);
  let stillPart = [];
  let newPart = false;
  for (let i = N - 1; i > 0; i--) {
    if (seq[i - 1] < seq[i]) {
      stillPart = seq.slice(0, i - 1);
      newPart = seq.slice(i - 1, N).reverse();
      break;
    }
  }
  if (!newPart) {
    console.log(-1);
    return;
  }

  const oldHead = newPart.pop();
  let stack = [];
  while (newPart.length > 0) {
    const cur = newPart.pop();
    if (cur > oldHead) {
      stack.push(cur);
      if (newPart.length > 0) continue;
    }
    const newHead = stack.pop();
    stack.push(oldHead);
    while (newPart.length > 0) {
      stack.push(newPart.pop());
    }
    stack = [newHead, ...stack.reverse()];
  }
  console.log([...stillPart, ...stack].join(" "));
};

solution(input);
