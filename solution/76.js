function solution(land) {
  // ➊ 각 행마다 이전 행에서의 최대 점수를 더해가며 최대 점수를 구합니다.
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      // ➋ 이전 행에서 현재 열의 값을 제외한 나머지 열들 중에서 가장 큰 값을 더해줍니다.
      land[i][j] += Math.max(...land[i - 1].filter((_, index) => index !== j));
    }
  }

  // ➌ 마지막 행에서 얻을 수 있는 최대 점수를 반환합니다.
  return Math.max(...land[land.length - 1]);
}
