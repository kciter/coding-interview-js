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

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.pop()); // 1
console.log(queue.pop()); // 2

queue.push(4);

console.log(queue.first()); // 3
console.log(queue.last()); // 4
console.log(queue.isEmpty()); // false

console.log(queue.pop()); // 3
console.log(queue.pop()); // 4

console.log(queue.isEmpty()); // true
