export class Queue<T> {
  private _queue: Array<T>;
  private _limit: number;

  protected get queue(): Array<T> {
    return this._queue;
  }

  constructor(items: Array<T> = new Array<T>(), limit: number = Number.MAX_VALUE) {
    if (limit <= 0) {
      throw new Error('Limit must be a positive number');
    }
    this._limit = limit;
    this._queue = items.slice(0, limit);
  }

  enqueue(...items: Array<T>) {
    items.forEach(item => {
      if (this._queue.length >= this._limit) {
        this._queue.shift();
      }
      this._queue.push(item);
    });
  }

  dequeue(count: number = 1): Array<T> {
    return this._queue.splice(0, count);
  }

  size(): number {
    return this._queue.length;
  }

  isEmpty(): boolean {
    return this._queue.length === 0;
  }

  get items(): Array<T> {
    return this._queue;
  }

  peek(): T | undefined {
    return this._queue[0];
  }

  findItem(item: T): T | undefined {
    return this._queue.find(queueItem => queueItem === item);
  }

  findItemIndex(item: T): number {
    return this._queue.findIndex(queueItem => queueItem === item);
  }

  removeItem(item: T): boolean {
    const index = this.findItemIndex(item);
    if (index !== -1) {
      this._queue.splice(index, 1);
      return true;
    }
    return false;
  }
}

// // Exemplo de uso:
// const queue = new Queue<number>([1, 2, 3, 4], 4);
// console.log(queue.items); // [1, 2, 3, 4]
// queue.enqueue(5);
// console.log(queue.items); // [2, 3, 4, 5]
// queue.dequeue();
// console.log(queue.items); // [3, 4, 5]
