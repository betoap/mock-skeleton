import { Proxy } from './../proxy';

describe('Proxy', () => {
  it('deve criar uma função proxy que chama o método original com o escopo e argumentos corretos', () => {
    const scope = { value: 42 };
    const method = function (arg1: number, arg2: number) {
      return this.value + arg1 + arg2;
    };

    const proxyFunction = Proxy.create(scope, method, 1);
    const result = proxyFunction(2);

    expect(result).toBe(45); // 42 (scope.value) + 1 (primeiro argumento) + 2 (segundo argumento)
  });

  it('deve criar uma função proxy que chama o método original com múltiplos argumentos', () => {
    const scope = { value: 10 };
    const method = function (arg1: number, arg2: number, arg3: number) {
      return this.value + arg1 + arg2 + arg3;
    };

    const proxyFunction = Proxy.create(scope, method, 1, 2);
    const result = proxyFunction(3);

    expect(result).toBe(16); // 10 (scope.value) + 1 (primeiro argumento) + 2 (segundo argumento) + 3 (terceiro argumento)
  });

  it('deve criar uma função proxy que chama o método original sem argumentos adicionais', () => {
    const scope = { value: 5 };
    const method = function () {
      return this.value;
    };

    const proxyFunction = Proxy.create(scope, method);
    const result = proxyFunction();

    expect(result).toBe(5); // 5 (scope.value)
  });
});
