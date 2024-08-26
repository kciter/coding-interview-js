// 미로 탈출 명령어
// https://school.programmers.co.kr/learn/courses/30/lessons/150365

function solution(n, m, x, y, r, c, k) {
  const directions = ['d', 'l', 'r', 'u'];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];
  
  // ➊ 남은 거리 체크
  const dist = Math.abs(r - x) + Math.abs(c - y);
  
  // ➋ 남은 거리가 k보다 크거나 남은 거리와 k의 차이가 홀수이면 불가능
  if (dist > k || (k - dist) % 2 !== 0) return "impossible";
  
  let answer = "";
  
  // ➌ 가능한 한 가장 사전순으로 앞서는 경로를 탐색
  while (k > 0) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      // ➍ nx, ny가 유효한 범위 내에 있는지 확인
      if (nx > 0 && nx <= n && ny > 0 && ny <= m) {
        const remainingDist = Math.abs(r - nx) + Math.abs(c - ny);
        
        // ➎ 남은 거리가 가능한지 확인
        if (remainingDist <= k - 1) {
          answer += directions[i];
          x = nx;
          y = ny;
          k--;
          break;
        }
      }
    }
  }
  
  return answer;
}
