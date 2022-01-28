function toSharpBits(num, n) {
  const stack = [];
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  while (stack.length < n) {
    stack.push(0);
  }
  return stack
    .reverse()
    .map((cell) => (cell === 1 ? "#" : " "))
    .join("");
}

function solution(n, arr1, arr2) {
  const answer = [];
  const mergedMap = [];
  for (let i = 0; i < n; i++) {
    mergedMap.push(arr1[i] | arr2[i]);
  }
  mergedMap.forEach((row) => answer.push(toSharpBits(row, n)));

  return answer;
}

const answer = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
console.log(answer);
