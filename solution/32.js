// ➊ Node 클래스 정의
class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info; // 노드의 좌표 정보 저장
    this.left = left; // 노드의 왼쪽 자식 노드
    this.right = right; // 노드의 오른쪽 자식 노드
    this.num = num; // 노드의 번호
  }

  // ➋ 왼쪽 자식 노드가 있는지 확인하는 함수
  hasLeft() {
    return this.left !== null;
  }

  // ➌ 오른쪽 자식 노드가 있는지 확인하는 함수
  hasRight() {
    return this.right !== null;
  }
}

// ➍ 이진 트리 생성 함수
function makeBT(nodeinfo) {
  const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1); // ➎ 노드의 번호 리스트 생성
  nodes.sort((a, b) => {
    const [ax, ay] = nodeinfo[a - 1];
    const [bx, by] = nodeinfo[b - 1];
    return ay === by ? ax - bx : by - ay;
  });

  let root = null;
  for (const node of nodes) {
    if (!root) {
      root = new Node(nodeinfo[node - 1], node);
    } else {
      let parent = root;
      const newNode = new Node(nodeinfo[node - 1], node);
      while (true) {
        // ➏ 부모 노드의 x좌표가 더 크면 왼쪽으로
        if (newNode.info[0] < parent.info[0]) {
          if (parent.hasLeft()) {
            parent = parent.left;
            continue;
          }
          parent.left = newNode;
          break;
        } else {
          // ➐ 부모 노드의 x좌표가 더 작거나 같으면 오른쪽으로
          if (parent.hasRight()) {
            parent = parent.right;
            continue;
          }
          parent.right = newNode;
          break;
        }
      }
    }
  }
  return root;
}

// ➑ 전위 순회 함수
function preOrder(root, answer) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }
    answer[0].push(node.num);
    stack.push(node.right);
    stack.push(node.left);
  }
}

// ➒ 후위 순회 함수
function postOrder(root, answer) {
  const stack = [[root, false]];
  while (stack.length) {
    const [node, visited] = stack.pop();
    if (!node) {
      continue;
    }
    if (visited) {
      answer[1].push(node.num);
    } else {
      stack.push([node, true]);
      stack.push([node.right, false]);
      stack.push([node.left, false]);
    }
  }
}

// ➓ 주어진 좌표 정보를 이용하여 이진 트리를 생성하고, 전위 순회와 후위 순회한 결과를 반환하는 함수
function solution(nodeinfo) {
  const answer = [[], []]; // 결과를 저장할 리스트 초기화
  const root = makeBT(nodeinfo); // 이진 트리 생성
  preOrder(root, answer); // 전위 순회
  postOrder(root, answer); // 후위 순회
  return answer; // 결과 반환
}
