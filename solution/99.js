// 파괴되지 않은 건물
// https://school.programmers.co.kr/learn/courses/30/lessons/92344

function solution(board, skill) {
  const N = board.length; // ➊ 보드의 행 길이
  const M = board[0].length; // ➋ 보드의 열 길이

  let answer = 0; // ➌ 살아남은 건물의 개수를 저장할 변수
  let dp = [...Array.from(Array(N), () => [...Array.from(Array(M), () => 0)])]; // ➍ 변화량을 기록할 2차원 배열 초기화

  // ➎ 스킬로 인한 변화량을 기록한다.
  for ([type, r1, c1, r2, c2, degree] of skill) {
    const d = type === 1 ? -degree : degree; // ➏ type이 1이면 공격이므로 음수, 2이면 회복이므로 양수로 설정
    dp[r1][c1] += d; // ➐ 스킬의 시작 지점에 변화량을 추가
    if (c2 + 1 < M) dp[r1][c2 + 1] -= d; // ➑ 행의 범위를 벗어나지 않으면 오른쪽 끝에 변화량을 빼줌
    if (r2 + 1 < N) dp[r2 + 1][c1] -= d; // ➒ 열의 범위를 벗어나지 않으면 아래쪽 끝에 변화량을 빼줌
    if (r2 + 1 < N && c2 + 1 < M) dp[r2 + 1][c2 + 1] += d; // ➓ 오른쪽 아래 모서리의 변화량을 추가하여 보정
  };

  // ⓫ 변화량에 대한 누적합을 구한다.
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      const top = i > 0 ? dp[i - 1][j] : 0; // ⓬ 위쪽 셀의 누적합
      const left = j > 0 ? dp[i][j - 1] : 0; // ⓭ 왼쪽 셀의 누적합
      const intersection = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0; // ⓮ 왼쪽 위 대각선의 누적합

      dp[i][j] = top + left - intersection + dp[i][j]; // ⓯ 누적합 계산 (상하좌우 값을 고려하여 현재 셀에 추가)

      // ⓰ 변화량과 기존 보드 값의 합이 0보다 크다면 건물이 존재하는 것이므로 answer를 증가시킴
      answer += dp[i][j] + board[i][j] > 0;
    }
  }

  return answer; // ⓱ 최종적으로 살아남은 건물의 개수를 반환
}
