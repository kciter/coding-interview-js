function solution(board) {
  // ➊ 주어진 2차원 보드의 행과 열의 개수를 변수에 저장합니다.
  const ROW = board.length;
  const COL = board[0].length;

  // ➋ 각 행과 열을 순회하며 최적의 정사각형을 찾습니다.
  for (let i = 1; i < ROW; i++) {
    for (let j = 1; j < COL; j++) {
      // ➌ 현재 위치의 값이 1인 경우를 확인합니다.
      if (board[i][j] === 1) {
        // ➍ 현재 위치에서 위, 왼쪽, 대각선 왼쪽 위의 값들을 가져옵니다.
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const upLeft = board[i - 1][j - 1];

        // ➎ 현재 위치의 값을 이전 위치들의 값들 중 가장 작은 값에 1을 더한 값으로 업데이트합니다.
        board[i][j] = Math.min(up, left, upLeft) + 1;
      }
    }
  }

  // ➏ 보드에서 가장 큰 값(최대 정사각형의 한 변의 길이)을 찾습니다.
  const maxVal = Math.max(...board.map((row) => Math.max(...row)));

  // ➐ 최대 정사각형의 넓이를 반환합니다.
  return maxVal * maxVal;
}
