import { Dictionary } from '../dictionary';

describe('Dictionary', () => {
  let dictionary: Dictionary<string, number>;

  beforeEach(() => {
    dictionary = new Dictionary<string, number>([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('deve inicializar com as entradas fornecidas', () => {
    expect(dictionary.size).toBe(3);
    expect(dictionary.get('a')).toBe(1);
    expect(dictionary.get('b')).toBe(2);
    expect(dictionary.get('c')).toBe(3);
  });

  it('getForValue deve retornar a primeira entrada para um valor específico', () => {
    expect(dictionary.getForValue(2)).toEqual(['b', 2]);
    expect(dictionary.getForValue(4)).toBeUndefined();
  });

  it('getKeysForValue deve retornar todas as chaves para um valor específico', () => {
    dictionary.set('d', 2);
    expect(dictionary.getKeysForValue(2)).toEqual(['b', 'd']);
    expect(dictionary.getKeysForValue(4)).toEqual(new Array<string>());
  });

  it('hasValue deve retornar verdadeiro se o valor existir', () => {
    expect(dictionary.hasValue(2)).toBe(true);
    expect(dictionary.hasValue(4)).toBe(false);
  });

  it('removeByValue deve remover todas as entradas com o valor fornecido', () => {
    dictionary.set('d', 2);
    dictionary.removeByValue(2);
    expect(dictionary.size).toBe(2);
    expect(dictionary.has('b')).toBe(false);
    expect(dictionary.has('d')).toBe(false);
  });

  it('clear deve remover todas as entradas', () => {
    dictionary.clear();
    expect(dictionary.size).toBe(0);
  });
});
