export class Proxy {
  public static create(scope: any, method: Function, ...params): any {
    const aArgs: Array<any> = Array.prototype.slice.call(arguments, 2);
    return function () {
      const _arr = Array.prototype.slice.call(arguments, 0);
      return method.apply(scope, aArgs.concat(_arr));
    };
  }
}
