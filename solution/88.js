// 개인정보 수집 유효기간
// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const answer = [];
  const todayDate = new Date(today);  // ➊ 오늘 날짜를 Date 객체로 변환
  
  // ➋ 약관 유형별 유효기간을 객체로 저장
  const termMap = {};
  terms.forEach(term => {
    const [type, period] = term.split(' ');
    termMap[type] = parseInt(period);
  });

  // ➌ 각 개인정보에 대해 만료일을 계산하고, 만료 여부를 확인
  for ([index, privacy] of privacies.entries()) {
    const [date, type] = privacy.split(' ');
    const expireDate = new Date(date);  // 편리한 날짜 계산을 위해 수집일을 Date 객체로 변환
    expireDate.setMonth(expireDate.getMonth() + termMap[type]);  // ➍ 약관에 따른 유효기간을 더함
    
    // ➎ 만료일이 오늘보다 이전이거나 같은 경우, 만료된 것으로 간주
    if (expireDate <= todayDate) {
      answer.push(index + 1);  // 인덱스는 1부터 시작
    }
  };
  
  return answer;  // ➏ 만료된 개인정보의 인덱스를 반환
}
