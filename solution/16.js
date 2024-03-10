function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  // ➊ 각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let count = 0; // ➋ 배포될 작업의 수 카운트
  let maxDay = daysLeft[0]; // ➌ 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) { // ➍ 배포 가능일이 가장 늦은 배포일보다 빠르면
      count++;
    } else { // ➎ 배포 예정일이 기준 배포일보다 느리면
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count); // ➏ 마지막으로 카운트된 작업들을 함께 배포
  return answer;
}
