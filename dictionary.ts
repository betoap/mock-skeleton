export class Dictionary<TKey, TValue> extends Map<TKey, TValue> {
  constructor(entries?: ReadonlyArray<[TKey, TValue]> | null) {
    super(entries);
  }

  getForValue(_value: TValue): [TKey, TValue] | undefined {
    return [...this].find(([_, value]) => value === _value);
  }

  getKeysForValue(_value: TValue): Array<TKey> {
    return [...this].filter(([_, value]) => value === _value).map(([key, _]) => key);
  }

  hasValue(_value: TValue): boolean {
    return [...this.values()].includes(_value);
  }

  removeByValue(_value: TValue): void {
    for (const [key, value] of this) {
      if (value === _value) {
        this.delete(key);
      }
    }
  }

  clear(): void {
    super.clear();
  }
}
