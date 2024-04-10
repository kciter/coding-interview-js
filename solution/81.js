// ❶ 각 물건의 단위 무게당 가치를 계산하여 items 리스트에 추가
function calculateUnitValue(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].push(items[i][1] / items[i][0]);
  }
  return items;
}

// ❷ 단위 무게당 가치가 높은 순으로 물건을 정렬
function sortByUnitValue(items) {
  items.sort((a, b) => b[2] - a[2]);
  return items;
}

function knapsack(items, weightLimit) {
  let totalValue = 0; // ❸ 선택한 물건들의 총 가치를 저장하는 변수
  let remainingWeight = weightLimit; // ❹ 남은 무게 한도를 저장하는 변수

  // ❺ 물건을 선택합니다.
  for (let i = 0; i < items.length; i++) {
    if (items[i][0] <= remainingWeight) {
      // ❻ 남은 무게 한도 내에서 물건을 통째로 선택
      totalValue += items[i][1];
      remainingWeight -= items[i][0];
    } else {
      // ❼ 남은 무게 한도가 물건의 무게보다 작으면 쪼개서 일부분만 선택
      const fraction = remainingWeight / items[i][0];
      totalValue += items[i][1] * fraction;
      break; // ❽ 이미 배낭의 무게 한도를 모두 사용한 경우,
    }
  }
  return totalValue;
}

function solution(items, weightLimit) {
  items = calculateUnitValue(items);
  items = sortByUnitValue(items);

  // ❾ 배낭의 무게 한도 내에서 담을 수 있는 물건들의 최대 가치를 반환
  return knapsack(items, weightLimit);
}


console.log(solution([[10, 19], [7, 10], [6, 10]], 15)) // 27.333..
console.log(solution([[10, 60], [20, 100], [30, 120]], 50)) // 240