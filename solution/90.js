// 쿼드압축 후 개수 세기
// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  const answer = [0, 0]; // ➊ 최종 결과를 저장할 배열

  // ➋ 주어진 배열의 크기를 저장
  const n = arr.length;

  // ➌ 주어진 배열에 대해 재귀적으로 탐색
  const dfs = (r, c, size) => {
    // ➍ 현재 영역의 모든 값이 같은지 확인
    const first = arr[r][c];
    let isUniform = true;
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (arr[i][j] !== first) {
          isUniform = false;
          break;
        }
      }
      if (!isUniform) break;
    }

    // ➎ 만약 모든 값이 같다면 해당 값의 개수를 증가
    if (isUniform) {
      answer[first] += 1;
      return;
    }

    // ➏ 같지 않다면 4개의 영역으로 나누어 재귀적으로 탐색
    const half = size / 2;
    dfs(r, c, half);
    dfs(r, c + half, half);
    dfs(r + half, c, half);
    dfs(r + half, c + half, half);
  };

  // ➐ 시작 위치와 배열의 크기를 전달하여 DFS 탐색
  dfs(0, 0, n);

  return answer; // ➑ 최종 결과 반환
}
