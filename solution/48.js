function solution(board) {
  function isValid(num, row, col) {
    // ❶ 현재 위치에 num이 들어갈 수 있는지 검사
    return !(
      inRow(num, row) ||
      inCol(num, col) ||
      inBox(num, row, col)
    );
  }

  function inRow(num, row) {
    // ❷ 해당 행에 num이 있는지 확인
    return board[row].includes(num);
  }

  function inCol(num, col) {
    // ❸ 해당 열에 num이 있는지 확인하는 함수
    return board.some(row => row[col] === num);
  }

  function inBox(num, row, col) {
    // ❹ 현재 위치의 3x3 박스에 num이 있는지 확인
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) {
          return true;
        }
      }
    }
    return false;
  }

  function findEmptyPosition() {
    // ❺ 스도쿠 보드에서 비어 있는 위치 반환
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  function findSolution() {
    // ❻ 비어 있는 위치에 가능한 숫자를 넣어가며 스도쿠 해결
    const emptyPos = findEmptyPosition();
    // ❼ 빈 칸이 없으면 스도쿠가 해결된 것으로 간주
    if (!emptyPos) {
      return true;
    }
    const [row, col] = emptyPos;
    for (let num = 1; num <= 9; num++) {
      if (isValid(num, row, col)) {
        board[row][col] = num;
        if (findSolution()) {
          return true; // ❽ 다음 빈 칸으로 재귀적으로 탐색
        }
        board[row][col] = 0; // ❾ 가능한 숫자가 없으면 원래의 0으로 되돌림
      }
    }
    return false;
  }

  findSolution();
  return board;
}

console.log(
  solution(
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]
  )
)

// [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ]


console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
  )
)

// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 4, 5, 6, 7, 8, 9, 1],
//   [5, 6, 7, 8, 9, 1, 2, 3, 4],
//   [8, 9, 1, 2, 3, 4, 5, 6, 7],
//   [3, 4, 5, 6, 7, 8, 9, 1, 2],
//   [6, 7, 8, 9, 1, 2, 3, 4, 5],
//   [9, 1, 2, 3, 4, 5, 6, 7, 8],
// ]
