function dfs(computers, visited, node) {
  visited[node] = true; // ➊ 현재 노드 방문 처리
  for (let idx = 0; idx < computers[node].length; idx++) {
    if (computers[node][idx] && !visited[idx]) { // ➋ 연결되어 있으며 방문하지 않은 노드라면
      dfs(computers, visited, idx); // ➌ 해당 노드를 방문하러 이동
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false); // ➍ 방문 여부를 저장하는 리스트
  for (let i = 0; i < n; i++) {
    if (!visited[i]) { // ➎ 아직 방문하지 않은 노드라면
      dfs(computers, visited, i); // ➏ DFS로 연결된 노드들을 모두 방문하면서 네트워크 개수 증가
      answer++;
    }
  }
  return answer;
}
