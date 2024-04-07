class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
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

function solution(N, road, K) {
  // ➊ 각 노드에 연결된 간선들을 저장할 리스트
  const graph = Array.from({ length: N + 1 }, () => []);
  // ➋ 출발점에서 각 노드까지의 최단 거리를 저장할 리스트
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0; // 출발점은 0으로 초기화

  // ➌ 그래프 구성
  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  // ➍ 다익스트라 알고리즘 시작
  const heap = new MinHeap();
  heap.insert([0, 1]); // ➎ 출발점을 heap에 추가
  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    // ➏ 인접한 노드들의 최단 거리를 갱신하고 heap에 추가
    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }

  // ➐ distances 리스트에서 K 이하인 값의 개수를 구하여 반환
  return distances.filter((dist) => dist <= K).length;
}
