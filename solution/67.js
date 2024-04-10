function solution(brown, yellow) {
  // ❶ 격자의 총 개수 (갈색 격자 + 노란 격자)
  const totalSize = brown + yellow;

  // ❷ 세로 길이의 범위는 3부터 (갈색 격자 + 노란 격자)의 제곱근
  for (let vertical = 3; vertical <= Math.sqrt(totalSize); vertical++) {
    // ❸ 사각형 구성이 되는지 확인
    if (totalSize % vertical === 0) {
      const horizontal = totalSize / vertical; // ❹ 사각형의 가로 길이
      // ❺ 카펫 형태로 만들 수 있는지 확인
      if (brown === (horizontal + vertical - 2) * 2) {
        return [horizontal, vertical]; // ❻ [가로 길이, 세로 길이]
      }
    }
  }

  return []; // ❼ 만약 답을 찾지 못했다면 빈 리스트를 반환
}
