function solution(n) {
  // ➊ 바닥의 가로 길이가 1인 경우, 바닥을 채우는 방법의 수는 1
  if (n === 1) {
    return 1;
  }

  // ➋ 바닥의 가로 길이가 2인 경우, 바닥을 채우는 방법의 수는 2
  if (n === 2) {
    return 2;
  }

  // ➌ 동적 계획법을 위한 리스트 초기화
  // dp[i]는 가로 길이가 i일 때 바닥을 채우는 방법의 수
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  // ➍ 가로 길이가 3부터 n까지의 각각의 경우에 대해 바닥을 채우는 방법의 수를 구함
  for (let i = 3; i <= n; i++) {
    // ➎ dp[i]는 dp[i-1]과 dp[i-2]를 더한 값
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  // ➏ 바닥의 가로 길이가 n일 때 바닥을 채우는 방법의 수인 dp[n]을 반환
  return dp[n];
}


// function solution(n) {
//   let a = 1;
//   let b = 2;
  
//   for (let i = 2; i < n; i += 1) {
//     const temp = b;
//     b = (a + b) % 1000000007;
//     a = temp;
//   }
  
//   return b;
// }
