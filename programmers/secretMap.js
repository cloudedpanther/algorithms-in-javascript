function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const merged = arr1[i] | arr2[i];
    const bits = merged.toString(2);
    const blankString = " ".repeat(n - bits.length);
    const bitString = bits.replace(/1/gi, "#").replace(/0/gi, " ");
    answer.push(blankString + bitString);
  }

  return answer;
}

const answer = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
console.log(answer);
