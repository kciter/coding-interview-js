class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};
  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  const visited = new Set(); // ❶ 방문한 노드를 저장할 셋

  // ❷ 탐색시 맨 처음 방문할 노드 푸시 하고 방문처리
  const queue = new Queue()
  queue.push(start);
  visited.add(start);
  const result = [start];

  // ❸ 큐가 비어있지 않은 동안 반복
  while (!queue.isEmpty()) {
    const node = queue.pop(); // ❹ 큐에 있는 원소 중 가장 먼저 푸시된 원소 팝
    for (let neighbor of adjList[node] || []) { // ❺  인접한 이웃 노드들에 대해서
      if (!visited.has(neighbor)) { // ❻ 방문되지 않은 이웃 노드인 경우
        // ❼ 이웃노드를 방문 처리함
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }

  return result;
}

console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1)) // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1)) // 반환값 : [1, 2, 3, 4, 5, 0]
 