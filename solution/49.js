// 백트래킹을 위한 DFS
function dfs(curK, cnt, dungeons, visited) {
  let answerMax = cnt;
  for (let i = 0; i < dungeons.length; i++) {
    // ➊ 현재 피로도(curK)가 i번째 던전의 최소 필요 피로도보다 크거나 같고,
    // i번째 던전을 방문한 적이 없다면
    if (curK >= dungeons[i][0] && visited[i] === 0) {
      visited[i] = 1;
      // ➋ 현재까지의 최대 탐험 가능 던전 수와
      // i번째 던전에서 이동할 수 있는 최대 탐험 가능 던전 수 중 큰 값을 선택하여 업데이트
      answerMax = Math.max(answerMax, dfs(curK - dungeons[i][1], cnt + 1, dungeons, visited));
      visited[i] = 0;
    }
  }

  return answerMax;
}

// 최대 탐험 가능 던전 수를 계산하는 함수
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0); // ➌ 던전 방문 여부를 저장할 지역 배열
  const answerMax = dfs(k, 0, dungeons, visited); // ➍ DFS 함수 호출
  return answerMax;
}
