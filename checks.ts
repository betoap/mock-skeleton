export class Checks {
  static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
  static isEmpty(obj: object): boolean {
    return typeof obj !== 'object' || Object.keys(obj).length === 0;
  }
}
