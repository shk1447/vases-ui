/**
 * 커맨드는 이 클래스의 인스턴스를 리턴함으로서
 * Drawing Editor Core에 Redo 가능한 액션임을 알린다.
 */
import Undoable from './Undoable';
export default class Redoable extends Undoable {
    constructor(key: string, before: Record<any, any>[] | null, after: Record<any, any>[] | null);
}
