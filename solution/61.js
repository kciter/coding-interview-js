class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][0] <= this.items[index][0]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[index][0] <= this.items[smallerChild][0]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}


function solution(land, height) {
  let answer = 0
  const n = land.length;
  
  // ➊ 주변 노드 탐색을 위한 di, dj
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  const visited = Array.from(Array(n), () => Array(n).fill(false));

  // ➋ 시작 노드 추가
  const q = new MinHeap();

  q.push([0, 0, 0]);  // [비용, i, j]

  // ➌ BFS + 우선 순위 큐로 다음 노드 관리
  while (q.size() > 0) {
    const [cost, i, j] = q.pop();
    // ➍ 아직 방문하지 않은 경로만 탐색
    if (!visited[i][j]) {
      visited[i][j] = true;
      // ➎ 현재까지 비용을 합산
      answer += cost;
      for (let d = 0; d < 4; d++) {
        const ni = i + di[d];
        const nj = j + dj[d];
        // ➏ 유효한 인덱스일 경우
        if (0 <= ni && ni < n && 0 <= nj && nj < n) {
          const tempCost = Math.abs(land[i][j] - land[ni][nj]);
          // ➐ 입력으로 주어진 height보다 높이차가 큰 경우
          const newCost = tempCost > height ? tempCost : 0;
          // ➑ 다음 경로를 푸시
          q.push([newCost, ni, nj]);
        }
      }
    }
  }

  return answer;
}
