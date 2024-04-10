function solution(triangle) {
  const n = triangle.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0)); // ➊ dp 테이블 초기화

  // ➋ dp 테이블의 맨 아래쪽 라인 초기화
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  // ➌ 아래쪽 라인부터 올라가면서 dp 테이블 채우기
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0]; // 꼭대기에서의 최댓값 반환
}
