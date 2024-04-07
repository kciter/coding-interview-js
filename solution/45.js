class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(board) {
  // ➊ 주어진 좌표가 보드의 범위 내에 있는지 확인
  function isValid(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N;
  }

  // ➋ 주어진 좌표가 차단되었거나 이동할 수 없는지 확인
  function isBlocked(x, y) {
    return (x === 0 && y === 0) || !isValid(x, y) || board[x][y] === 1;
  }

  // ➌ 이전 방향과 현재 방향에 따라 비용을 계산
  function calculateCost(direction, prevDirection, cost) {
    if (prevDirection === -1 || (prevDirection - direction) % 2 === 0) {
      return cost + 100;
    } else {
      return cost + 600;
    }
  }

  // ➍ 주어진 좌표와 방향이 아직 방문하지 않았거나 새 비용이 더 작은 경우
  function isShouldUpdate(x, y, direction, new_cost) {
    return visited[x][y][direction] === 0 || visited[x][y][direction] > new_cost;
  }

  const queue = new Queue();
  queue.push([0, 0, -1, 0]);
  const N = board.length;
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(0))
  );
  let answer = Infinity;

  // ➎ 큐가 빌 때까지 반복
  while (!queue.isEmpty()) {
    const [x, y, prevDirection, cost] = queue.pop();

    // ➏ 가능한 모든 방향에 대해 반복
    for (let direction = 0; direction < 4; direction++) {
      const [dx, dy] = directions[direction];
      const newX = x + dx;
      const newY = y + dy;

      // ➐ 이동할 수 없는 좌표는 건너뛰기
      if (isBlocked(newX, newY)) {
        continue;
      }

      const new_cost = calculateCost(direction, prevDirection, cost);

      // ➑ 도착지에 도달한 경우 최소 비용 업데이트
      if (newX === N - 1 && newY === N - 1) {
        answer = Math.min(answer, new_cost);
      }
      // ➒ 좌표와 방향이 아직 방문하지 않았거나 새 비용이 더 작은 경우 큐에 추가
      else if (isShouldUpdate(newX, newY, direction, new_cost)) {
        queue.push([newX, newY, direction, new_cost]);
        visited[newX][newY][direction] = new_cost;
      }
    }
  }

  return answer;
}
