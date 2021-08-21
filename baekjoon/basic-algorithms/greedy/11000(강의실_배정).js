// N개의 수업, 시작시간과 종료시간이 주어진다.
// 가능한 적은 강의실을 사용해서 모든 수업을 진행해야 한다.
// 시작시간과 종료시간은 같을 수 없다.
// 최대의 수업을 한 강의실에 배정하는 방식을 응용한다.
// 빨리 수업이 끝난 강의실에 빨리 시작하는 수업을 할당해야 한다. -> 시작시간에 따라 정렬한다.

const INPUT_1 = ["3", "1 3", "2 4", "3 5"]; // expected output: 2
const INPUT_2 = ["5", "1 3", "2 4", "3 5", "5 7", "4 7"]; // expected output: 2
const INPUT_3 = ["200000"].concat(new Array(200000).fill("1 2"));

const input = INPUT_3;

// Class
class Priority_Queue_Min {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
    let currentIndex = this.size() - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parentNode = this.queue[parentIndex];

      if (parentNode > value) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else break;
    }
  }

  dequeue() {
    this.swap(0, this.size() - 1);
    const dequeueValue = this.queue.pop();
    const sortingValue = this.top();

    let currentIndex = 0;

    while (currentIndex < this.size()) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      const leftChild = this.queue[leftChildIndex];
      const rightChild = this.queue[rightChildIndex];

      // no children
      if (leftChildIndex >= this.size()) break;
      // only left child
      else if (rightChildIndex >= this.size() && leftChild < sortingValue) {
        this.swap(currentIndex, leftChildIndex);
        break;
      }
      // both chlidren
      else {
        // there are more than one child prior to parent
        if (leftChild < sortingValue || rightChild < sortingValue) {
          // only left is prior to parent
          if (rightChild >= sortingValue) {
            this.swap(currentIndex, leftChildIndex);
            currentIndex = leftChildIndex;
          }
          // only right is prior to parent
          else if (leftChildIndex >= sortingValue) {
            this.swap(currentIndex, rightChildIndex);
            currentIndex = rightChildIndex;
          }
          // both children are prior to parent
          else {
            // if left has more priority
            if (leftChild <= rightChild) {
              this.swap(currentIndex, leftChildIndex);
              currentIndex = leftChildIndex;
            }
            // if right has more priority
            else {
              this.swap(currentIndex, rightChildIndex);
              currentIndex = rightChildIndex;
            }
          }
        } else break;
      }
    }

    return dequeueValue;
  }

  swap(indexA, indexB) {
    const tmp = this.queue[indexA];
    this.queue[indexA] = this.queue[indexB];
    this.queue[indexB] = tmp;
  }

  size() {
    return this.queue.length;
  }

  top() {
    return this.queue[0];
  }
}

// Solution
function solution(input) {
  // Variables
  const N = parseInt(input[0]);
  const lectures = input
    .slice(1)
    .map((e) => e.split(" ").map((e) => parseInt(e)))
    .sort((a, b) => a[0] - b[0]);
  const endTimes = new Priority_Queue_Min();
  endTimes.enqueue(0);

  // Functions
  function solve() {
    for (let i = 0; i < N; i++) {
      const S = lectures[i][0];
      const T = lectures[i][1];

      if (endTimes.top() <= S) endTimes.dequeue();
      endTimes.enqueue(T);
    }

    console.log(endTimes.size());
  }

  // Run
  solve();
}

solution(input);
