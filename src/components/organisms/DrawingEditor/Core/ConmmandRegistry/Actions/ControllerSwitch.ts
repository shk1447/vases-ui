/**
 * 커맨드는 이 클래스의 인스턴스를 리턴함으로서
 * Drawing Editor Core에 Controller가 바뀌었다고 알린다.
 */
export default class ControllerSwitch {
  private _actionName: string | null = '';
  constructor(actionName: string | null) {
    this._actionName = actionName;
  }
  get actionName(): string | null {
    return this._actionName;
  }
}
