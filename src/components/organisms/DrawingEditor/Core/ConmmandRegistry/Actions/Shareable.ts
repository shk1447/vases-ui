/**
 * 커맨드는 이 클래스의 인스턴스를 리턴함으로서
 * Drawing Editor Core에 커맨드 간 공유 가능한 데이터가 있는 액션임을 알린다.
 */
export default class Shareable {
  private _data: Record<any, any>[] | null = [];
  get data(): Record<any, any>[] | null {
    return this._data;
  }

  constructor(data: Record<any, any>[]) {
    this._data = data;
  }

  public merge(data: Shareable) {
    if (data.data) this._data?.push(...data.data);
  }
}
