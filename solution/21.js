function isShallowEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

function solution(want, number, discount) {
  // ➊ want 리스트를 오브젝트로 변환
  const wantObj = {}
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }
  
  let answer = 0; // ➋ 총 일수를 계산할 변수 초기화

  // ➌ 특정일 i에 회원가입 시 할인받을 수 있는 품목 체크
  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d = {}; // ➍ i일 회원가입 시 할인받는 제품 및 개수를 담을 오브젝트

    // ➎ i일 회원가입 시 할인받는 제품 및 개수로 오브젝트 구성
    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        // discount10d[discount[j]]가 비어있다면 0으로 기본값 설정
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }

    // ➏ 할인하는 상품의 개수가 원하는 수량과 일치하면 정답 변수에 1 추가
    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }

  return answer;
}