function solution(str1, str2) {
  // ❶ 두 문자열의 길이를 저장
  const m = str1.length;
  const n = str2.length;

  // ❷ LCS를 저장할 테이블 초기화
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // ❸ 동적 프로그래밍을 통해 LCS 길이 계산
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // ❹ 현재 비교하는 문자가 같으면
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // ❺ 현재 비교하는 문자가 같지 않으면
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // ❻ LCS 길이 반환
  return dp[m][n];
}


console.log(solution("ABCBDAB","BDCAB")) // 4
console.log(solution("AGGTAB","GXTXAYB")) // 4
