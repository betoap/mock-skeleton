import { Queue } from '../queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>([1, 2, 3, 4], 4);
  });

  it('deve inicializar com os itens fornecidos e o limite', () => {
    expect(queue.items).toEqual([1, 2, 3, 4]);
    expect(queue.size()).toBe(4);
  });

  it('enqueue deve adicionar itens à fila e respeitar o limite', () => {
    queue.enqueue(5);
    expect(queue.items).toEqual([2, 3, 4, 5]);
    expect(queue.size()).toBe(4);
  });

  it('dequeue deve remover e retornar o número especificado de itens da fila', () => {
    const dequeuedItems = queue.dequeue(2);
    expect(dequeuedItems).toEqual([1, 2]);
    expect(queue.items).toEqual([3, 4]);
    expect(queue.size()).toBe(2);
  });

  it('size deve retornar o tamanho da fila', () => {
    expect(queue.size()).toBe(4);
    queue.dequeue(1);
    expect(queue.size()).toBe(3);
  });

  it('isEmpty deve retornar verdadeiro se a fila estiver vazia', () => {
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue(4);
    expect(queue.isEmpty()).toBe(true);
  });

  it('items deve retornar todos os itens da fila', () => {
    expect(queue.items).toEqual([1, 2, 3, 4]);
  });

  it('peek deve retornar o primeiro item da fila sem removê-lo', () => {
    expect(queue.peek()).toBe(1);
    queue.dequeue(1);
    expect(queue.peek()).toBe(2);
  });

  it('findItem deve encontrar um item específico na fila', () => {
    const item = queue.findItem(3);
    expect(item).toBe(3);
  });

  it('removeItem deve remover um item específico da fila', () => {
    const removed = queue.removeItem(3);
    expect(removed).toBe(true);
    expect(queue.items).toEqual([1, 2, 4]);
  });

  it('removeItem deve retornar falso se o item não estiver na fila', () => {
    const removed = queue.removeItem(5);
    expect(removed).toBe(false);
    expect(queue.items).toEqual([1, 2, 3, 4]);
  });

  it('findItem deve retornar undefined se o item não estiver na fila', () => {
    const item = queue.findItem(5);
    expect(item).toBeUndefined();
  });

  it('dequeue deve retornar um array vazio se a fila estiver vazia', () => {
    queue.dequeue(4);
    const dequeuedItems = queue.dequeue(1);
    expect(dequeuedItems).toEqual([]);
  });

  it('enqueue deve adicionar múltiplos itens à fila e respeitar o limite', () => {
    queue.enqueue(5, 6);
    expect(queue.items).toEqual([3, 4, 5, 6]);
    expect(queue.size()).toBe(4);
  });
});
