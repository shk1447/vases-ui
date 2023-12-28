declare class Config {
    label: string;
    eraserRadius: number;
    color: string;
    /**
     * 그린 후, 지운 후 boolean operation 할지
     * - 그리는 경우
     *  (나중에 그려진 것이..)
     *    - 색 같은것은 병합
     *    - 색 다른것은 나중에 그려진 것과 Different boolean operation 진행
     * - 지우는 경우
     *  - 지우는게 분리된 도형이면 개별 도형으로 만드는지
     */
    booleanOperation: boolean;
    /**Zoom sacle */
    zoomSacle: number;
    showMinimap: boolean;
    private static instance;
    private constructor();
    static getInstance(): Config;
}
declare const ConfigManager: Config;
export default ConfigManager;
