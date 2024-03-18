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

// ➊ 트리 구축 함수
function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  for (const [from, to] of edges) {
    tree[from].push(to);
  }
  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges); // ➋ 트리 생성
  let maxSheep = 0; // ➌ 최대 양의 수를 저장할 변수 초기화
  
  // ➍ BFS를 위한 큐 생성 및 초기 상태 설정
  const q = new Queue();
  q.push([0, 1, 0, new Set()]); // (현재 위치, 양의 수, 늑대의 수, 방문한 노드 집합)

  // BFS 시작
  while (!q.isEmpty()) {
    // ➎ 큐에서 상태 가져오기
    const [current, sheepCount, wolfCount, visited] = q.pop();
    // ➏ 최대 양의 수 업데이트
    maxSheep = Math.max(maxSheep, sheepCount);
    // ➐ 방문한 노드 집합에 현재 노드의 이웃 노드 추가
    for (const next of tree[current]) {
      visited.add(next);
    }
    // ➑ 인접한 노드들에 대해 탐색
    for (const next of visited) {
      if (info[next]) { // ➒ 늑대일 경우
        if (sheepCount !== wolfCount + 1) {
          const newVisited = new Set(visited)
          newVisited.delete(next)
          q.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else { // ➓ 양일 경우
        const newVisited = new Set(visited)
        newVisited.delete(next)
        q.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }

  return maxSheep;
}
