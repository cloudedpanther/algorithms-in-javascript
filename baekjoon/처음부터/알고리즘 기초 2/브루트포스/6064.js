const INPUT_1 = ["3", "10 12 3 9", "10 12 7 2", "13 11 5 6"];

const input = INPUT_1;

const getYear = (M, N, x, y) => {
  for (let i = 0; i <= N; i++) {
    if ((i * M + x - y) % N === 0) return i * M + x;
  }
  return -1;
};

const solution = (input) => {
  const answer = [];
  input.slice(1).forEach((e) => {
    const [M, N, x, y] = e.split(" ").map(Number);
    answer.push(getYear(M, N, x, y));
  });
  console.log(answer.join("\n"));
};

solution(input);
