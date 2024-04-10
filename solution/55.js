function solution(arr1, arr2) {
  const merged = []; // 정렬된 배열을 저장할 리스트 생성
  let i = 0, j = 0; // 두 배열의 인덱스 초기화

  // 두 배열을 순회하면서 정렬된 배열을 생성
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  // arr1이나 arr2 중 남아있는 원소들을 정렬된 배열 뒤에 추가
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j += 1;
  }

  return merged;
}

console.log(solution([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(solution([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]