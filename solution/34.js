function solution(nums) {
  const numSet = new Set(nums); // ➊ nums 배열에서 중복을 제거한 집합(set)을 구함
  const n = nums.length; // ➋ 폰켓몬의 총 수
  const k = n / 2; // ➌ 선택할 폰켓몬의 수
  return Math.min(k, numSet.size); // ➍ 중복을 제거한 폰켓몬의 종류 수와 선택할 폰켓몬의 수 중 작은 값 반환
}
