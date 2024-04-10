function combinationsWithRepetition(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx);
    const combis = combinationsWithRepetition(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}


function solution(n, info) {
  let maxdiff = 0;
  let maxComb = {};

  // ➊ 주어진 조합에서 각각의 점수 계산
  function calculateScore(combi) {
    let score1 = 0;
    let score2 = 0;
    for (let i = 1; i <= 10; i++) {
      if (info[10 - i] < combi.filter((x) => x === i).length) {
        score1 += i;
      } else if (info[10 - i] > 0) {
        score2 += i;
      }
    }
    return [score1, score2];
  }

  // ➋ 최대 차이와 조합 저장
  function calculateDiff(diff, cnt) {
    if (diff > maxdiff) {
      maxComb = { ...cnt };
      maxdiff = diff;
    }
  }

  // ➌ 가능한 라이언의 과녁점수 조합의 모든 경우에 대해서 체크
  for (const combi of combinationsWithRepetition([...Array(11).keys()], n)) {
    const cnt = combi.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    const [score1, score2] = calculateScore(combi);
    const diff = score1 - score2;
    calculateDiff(diff, cnt);
  }

  // ➍ 최대 차이가 0 이상인 경우, 조합 반환
  if (maxdiff > 0) {
    const answer = Array(11).fill(0);
    for (const n of Object.keys(maxComb)) {
      answer[10 - n] = maxComb[n];
    }
    return answer;
  } else {
    // ➎ 최대 차이가 0인 경우, -1 반환
    return [-1];
  }
}
