// 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
  const answer = [];

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0], // 상하좌우
    [1, 1], [1, -1], [-1, 1], [-1, -1], // 대각선
    [2, 0], [0, 2], [-2, 0], [0, -2]  // 거리 2
  ];

  // ➊ 거리두기 규칙 확인 함수
  function check(place) {
    const n = place.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (place[i][j] === 'P') {
          // ➋ 현재 위치에서 모든 방향 탐색
          for (let [dx, dy] of directions) {
            const x = i + dx;
            const y = j + dy;

            // ➌ 유효한 좌표인지 확인
            if (x >= 0 && x < n && y >= 0 && y < n) {
              const distance = Math.abs(dx) + Math.abs(dy);

              if (place[x][y] === 'P') {
                if (distance === 1) {
                  return 0; // ➍ 맨해튼 거리 1에서 바로 옆에 사람이 있으면 규칙 위반
                } else if (distance === 2) {
                  // ➎ 맨해튼 거리 2인 경우, 사이에 파티션('X')이 있는지 확인
                  if (dx === 2 && place[i + 1][j] !== 'X') return 0;
                  if (dy === 2 && place[i][j + 1] !== 'X') return 0;
                  if (dx === -2 && place[i - 1][j] !== 'X') return 0;
                  if (dy === -2 && place[i][j - 1] !== 'X') return 0;
                  if (Math.abs(dx) === 1 && Math.abs(dy) === 1) {
                    if (place[i + dx][j] !== 'X' || place[i][j + dy] !== 'X') return 0;
                  }
                }
              }
            }
          }
        }
      }
    }

    return 1; // ➏ 규칙을 모두 만족하면 1 반환
  }

  // ➐ 모든 대기실에 대해 규칙 확인
  for (place of places) {
    answer.push(check(place));
  };

  return answer; // ➑ 결과 반환
}
