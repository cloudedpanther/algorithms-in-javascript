const INPUT_1 = ["2", "3 2", "1 3", "2 3", "4 4", "1 2", "2 3", "3 4", "4 2"];

const input = INPUT_1;

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    this.queue.push(value);
    this.tail++;
  }
  dequeue() {
    const returnValue = this.queue[this.head];
    // delete this.queue[this.head];
    this.queue[this.head] = null;
    this.head++;
    return returnValue;
  }
  size() {
    return this.tail - this.head;
  }
}

function makeTeam(graph, team, startNode) {
  const queue = new Queue();
  queue.enqueue(startNode);
  team[startNode] = 1;
  while (queue.size() > 0) {
    const currentNode = queue.dequeue();
    for (const nextNode of graph[currentNode]) {
      if (team[nextNode] === 0) {
        queue.enqueue(nextNode);
        team[nextNode] = 3 - team[currentNode];
      } else if (team[nextNode] === team[currentNode]) {
        return false;
      }
    }
  }
  return true;
}

function isBipartite(graph, V) {
  let team = new Array(V + 1).fill(0);

  for (let i = 1; i < V + 1; i++) {
    if (team[i] === 0) {
      if (!makeTeam(graph, team, i)) return false;
    }
  }

  return true;
}

const solution = (input) => {
  let answer = [];
  const K = parseInt(input[0]);
  for (let i = 0, j = 1; i < K; i++) {
    const [V, E] = input[j].split(" ").map(Number);
    const edges = input
      .slice(j + 1, j + E + 1)
      .map((e) => e.split(" ").map(Number));
    j += E + 1;

    const graph = Array.from({ length: V + 1 }, () => []);
    for (const [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }

    if (isBipartite(graph, V)) answer.push("YES");
    else answer.push("NO");
  }

  console.log(answer.join("\n"));
};

solution(input);
