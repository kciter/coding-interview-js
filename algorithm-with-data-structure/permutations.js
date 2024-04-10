function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환하며 탈출 조건으로도 사용됩니다.
  if (n === 0) return [[]];
  const result = [];

  // 요소를 순환
  arr.forEach((fixed, idx) => {
    // 현재 요소를 제외한 나머지 요소들을 복사합니다.
    const rest = [...arr];
    rest.splice(idx, 1);

    // 나머지 요소들로 순열을 구합니다.
    const perms = permutations(rest, n - 1);

    // 나머지 요소들로 구한 순열에 현재 요소를 추가합니다.
    const combine = perms.map((p) => [fixed, ...p]);

    // 결과에 추가합니다.
    result.push(...combine);
  });

  return result;
}

console.log(permutations([1, 2, 3], 2)); // [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
