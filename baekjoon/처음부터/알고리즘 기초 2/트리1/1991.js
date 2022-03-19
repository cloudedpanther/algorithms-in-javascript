const INPUT_1 = [
  "7",
  "A B C",
  "B D .",
  "C E F",
  "E . .",
  "F . G",
  "D . .",
  "G . .",
];

const input = INPUT_1;

function dfs(tree, visited, order, currentIndex) {
  visited[currentIndex] = true;
  order.push(tree[currentIndex]);
  const leftIndex = currentIndex * 2;
  const rightIndex = currentIndex * 2 + 1;
  if (!visited[leftIndex] && !!tree[leftIndex]) {
    dfs(tree, visited, order, leftIndex);
  }
  if (!visited[rightIndex] && !!tree[rightIndex]) {
    dfs(tree, visited, order, rightIndex);
  }
}

function preorderTraversal(tree) {
  const visited = new Array(tree.length).fill(false);
  const order = [];
  dfs(tree, visited, order, 1);
  return order.join(" ");
}

const solution = (input) => {
  const tree = [null, "A"];
  input.slice(1).forEach((e) => {
    const [parent, left, right] = e.split(" ");
    const parentIndex = tree.findIndex((v, i) => v === parent);
    if (left !== ".") tree[parentIndex * 2] = left;
    if (right !== ".") tree[parentIndex * 2 + 1] = right;
  });
  const preorder = preorderTraversal(tree);
  console.log(preorder);
};

solution(input);
