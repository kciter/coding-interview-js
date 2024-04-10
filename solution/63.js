function multiplyMatrices(matrix1, matrix2) {
  // ❶ 결과 행렬을 0으로 초기화합니다.
  const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // ❷ 행렬 곱셈을 수행합니다.
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function transposeMatrix(matrix) {
  // ❸ 결과 행렬을 0으로 초기화합니다.
  const result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // 전치 행렬을 계산합니다.
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

function solution(matrix1, matrix2) {
  // 주어진 두 행렬을 곱합니다.
  const multiplied = multiplyMatrices(matrix1, matrix2);
  // 곱셈 결과의 전치 행렬을 계산합니다.
  const transposed = transposeMatrix(multiplied);
  return transposed;
}


console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ]
  )
);
// [
//   [30, 84, 138],
//   [24, 69, 114],
//   [18, 54, 90]
// ]
   
console.log(
  solution(
    [
      [2, 4, 6],
      [1, 3, 5],
      [7, 8, 9]
    ],
    [
      [9, 1, 2],
      [4, 5, 6],
      [7, 3, 8]
    ]
  )
);
// [
//   [76, 56, 158],
//   [40, 31, 74],
//   [76, 60, 134]
// ]
