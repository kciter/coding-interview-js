function solution(n, wires) {
  // ➊ 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // ➋ 깊이 우선 탐색 함수
  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) { // ➌ 현재 노드의 자식 노드들에 방문
      if (child !== parent) { // ➍ 부모 노드가 아닌 경우에만 탐색
        cnt += dfs(child, node);
      }
    }
    return cnt;
  }

  let minDiff = Infinity;
  for (const [a, b] of wires) {
    // ➎ 간선 제거
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    // ➏ 각 전력망 송전탑 개수 계산
    const cntA = dfs(a, b);
    const cntB = n - cntA;

    // ➐ 최소값 갱신
    minDiff = Math.min(minDiff, Math.abs(cntA - cntB));

    // ➑ 간선 복원
    graph[a].push(b);
    graph[b].push(a);
  }

  return minDiff;
}
