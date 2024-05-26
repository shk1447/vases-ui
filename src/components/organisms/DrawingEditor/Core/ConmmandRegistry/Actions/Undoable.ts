/**
 * 커맨드는 이 클래스의 인스턴스를 리턴함으로서
 * Drawing Editor Core에 Undo 가능한 액션임을 알린다.
 */
export default class Undoable {
  private _before: Record<any, any>[] | null = null;
  private _after: Record<any, any>[] | null = null;
  private _key: string = '';
  private _clearRedo: boolean;
  constructor(
    key: string,
    before: Record<any, any>[] | null,
    after: Record<any, any>[] | null,
    clearRedo: boolean = true,
  ) {
    this._before = before;
    this._after = after;
    this._key = key;
    this._clearRedo = clearRedo;
  }

  get key(): string {
    return this._key;
  }

  get before(): Record<any, any>[] | null {
    return this._before;
  }

  get after(): Record<any, any>[] | null {
    return this._after;
  }

  get clearRedo(): boolean {
    return this._clearRedo;
  }
}
