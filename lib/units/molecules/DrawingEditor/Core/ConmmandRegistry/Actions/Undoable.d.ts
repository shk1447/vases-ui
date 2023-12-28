/**
 * 커맨드는 이 클래스의 인스턴스를 리턴함으로서
 * Drawing Editor Core에 Undo 가능한 액션임을 알린다.
 */
export default class Undoable {
    private _before;
    private _after;
    private _key;
    private _clearRedo;
    constructor(key: string, before: Record<any, any>[] | null, after: Record<any, any>[] | null, clearRedo?: boolean);
    get key(): string;
    get before(): Record<any, any>[] | null;
    get after(): Record<any, any>[] | null;
    get clearRedo(): boolean;
}
