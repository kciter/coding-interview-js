function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function solution(orders, course) {
  const answer = [];

  for (const c of course) { // ➊ 각 코스 요리 길이에 대해
    const menu = [];
    for (const order of orders) { // 모든 주문에 대해
      const orderArr = order.split("").sort(); // 주문을 배열로 만든 후 정렬
      const comb = combinations(orderArr, c); // ➋ 조합(combination)을 이용해 가능한 메뉴 구성을 모두 구함
      menu.push(...comb);
    }

    // ➌ 각 메뉴 구성이 몇 번 주문되었는지 세어줌
    const counter = {};
    for (const m of menu) {
      const key = m.join(''); // 배열을 문자열로 변환
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) { // ➍ 가장 많이 주문된 구성이 2번 이상 주문된 경우
      for (const [key, value] of Object.entries(counter)) {
        if (value === max) { // ➎ 가장 많이 주문된 구성을 찾아서
          answer.push(key); // ➏ 정답 리스트에 추가
        }
      }
    }
  }

  // ➐ 오름차순 정렬 후 반환
  return answer.sort();
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])); // ["AC", "ACDE", "BCFG", "CDE"]