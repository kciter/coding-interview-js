function solution(n) {
  // ❶ n 크기의 2차원 배열 생성
  const snailArray = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // ❷ 달팽이 수열의 시작 숫자

  // ❸ 행과 열의 시작과 끝 인덱스를 설정
  let startRow = 0, endRow = n - 1;
  let startCol = 0, endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // ❹ 첫 번째 행 채우기
    for (let i = startCol; i <= endCol; i++) {
      snailArray[startRow][i] = num;
      num += 1;
    }
    startRow += 1;

    // ❺ 마지막 열 채우기
    for (let i = startRow; i <= endRow; i++) {
      snailArray[i][endCol] = num;
      num += 1;
    }
    endCol -= 1;

    // ❻ 마지막 행 채우기
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        snailArray[endRow][i] = num;
        num += 1;
      }
      endRow -= 1;
    }

    // ❼ 첫 번째 열 채우기
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        snailArray[i][startCol] = num;
        num += 1;
      }
      startCol += 1;
    }
  }
  
  return snailArray;
}

console.log(solution(3));
// [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]

console.log(solution(4));
// [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7]
// ]
