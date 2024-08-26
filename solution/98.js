// 보석 쇼핑
// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  let answer = [0, gems.length];  // ➊ 초기 범위를 최대 범위로 설정
  const gemKinds = new Set(gems).size;  // ➋ 보석의 종류 수
    
  let start = 0, end = 0;
  const gemsCount = new Map();  // ➌ 보석의 개수를 저장할 Map
  gemsCount.set(gems[0], 1);  // ➍ 첫 번째 보석을 초기값으로 설정

  while (start < gems.length && end < gems.length) {
    if (gemsCount.size === gemKinds) {  // ➎ 모든 보석 종류를 포함하는지 확인
      // ➏ 현재 구간이 더 짧으면 결과 갱신
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];  // 1-based index로 변환하여 저장
      }

      // ➐ start 포인터를 옮겨서 구간을 줄이기
      gemsCount.set(gems[start], gemsCount.get(gems[start]) - 1);

      // ➑ 보석의 개수가 0이 되면 Map에서 제거
      if (gemsCount.get(gems[start]) === 0) {
        gemsCount.delete(gems[start]);
      }
      start += 1;
    } else {
      // ➒ end 포인터를 옮겨서 구간을 늘리기
      end += 1;
      if (end >= gems.length) break;  // end가 배열을 넘어서면 종료
      gemsCount.set(gems[end], (gemsCount.get(gems[end]) || 0) + 1);
    }
  }

  return answer;  // ➓ 최종 구간 반환
}
