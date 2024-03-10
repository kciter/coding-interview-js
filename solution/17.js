class Queue {
  items = [];
  front = 0;
  rear = 0;

  // 생성자를 이용해 편하게 초기화
  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}


function solution(cards1, cards2, goal) {
  // cards와 goal을 Queue로 변환
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  // ➊ goal의 문자열을 순차적으로 순회
  while (!goal.isEmpty()) {
    if (!cards1.isEmpty() && cards1.first() === goal.first()) { // ➋ card1의 front와 일치하는 경우
      cards1.pop();
      goal.pop();
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) { // ➌ card2의 front와 일치하는 경우
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No"; // ➍ goal이 비었으면 “Yes” 아니면 “No”를 반환
}
