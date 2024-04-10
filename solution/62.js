function solution(arr, n) {
  // ❶ 2차원 배열을 인자로 받고, 90도 회전시키는 함수
  function rotate90(arr) {
    // ❷ 배열의 크기를 저장
    const n = arr.length;

    // ❸ 배열의 크기와 동일한 2차원 배열 생성(초기값은 0)
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    // ❹ 배열을 90도 회전
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = arr[i][j];
      }
    }

    // ❺ 90도로 회전한 배열 반환
    return rotated;
  }

  // ❻ 원본 배열 arr을 복사
  let rotated = arr.map((row) => [...row]);

  // ❼ 90도 회전 함수 호출
  for (let i = 0; i < n; i++) {
    rotated = rotate90(rotated);
  }

  return rotated;
}


console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    1
  )
)
// [
//   [13, 9, 5, 1],
//   [14, 10, 6, 2],
//   [15, 11, 7, 3],
//   [16, 12, 8, 4]
// ]

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14,15,16]
    ],
    2
  )
)
// [
//   [16, 15, 14, 13],
//   [12, 11, 10, 9],
//   [8, 7, 6, 5],
//   [4, 3, 2, 1]
// ]