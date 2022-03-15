const INPUT_1 = ["5 17"];

const input = INPUT_1;

const solution = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const MAX = 167000;
  const visited = new Array(MAX).fill(false);

  function bfs() {
    const q = new Queue();
    q.push(N);
    visited[N] = true;

    while (q.size() > 0) {
      const cur = q.pop();
      let teleported = cur * 2;
      while (teleported < MAX) {
        if (!visited[teleported]) {
          q.push(teleported);
          visited[teleported] = true;
        }
        teleported += cur;
      }
      if (cur > 0 && !visited[cur - 1]) {
        q.push(cur - 1);
        visited[cur - 1] = true;
      }
    }
  }
};

solution(input);
