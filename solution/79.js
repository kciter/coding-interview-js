function solution(strs, t) {
  const n = t.length; // ➊ 타겟 문자열 t의 길이
  const dp = Array(n + 1).fill(Infinity); // ➋ 각 위치에서 필요한 최소 조각수를 저장할 배열(초기값은 INF로 함)
  dp[0] = 0; // ➌ 빈 문자열을 위해 필요한 최소 조각수는 0
  const sizes = new Set(strs.map((str) => str.length)); // ➍ strs 조각들의 길이를 저장한 집합

  for (let i = 1; i <= n; i++) { // ➎ dp[i]부터 dp[n]까지 채우기 위한 반복문
    for (const size of sizes) { // ➏ 각 str 조각의 문자열 길이에 대하여
      if (i - size >= 0 && strs.includes(t.slice(i - size, i))) { // ➐ 이미 구한 해와 strs 조각을 추가해서 문자열을 만들 수 있다면
        dp[i] = Math.min(dp[i], dp[i - size] + 1); // ➑ 해당 위치의 최소 조각수를 갱신
      }
    }
  }

  return dp[n] === Infinity ? -1 : dp[n]; // ➒ 최소 조각수를 반환
}
