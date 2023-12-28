class Config {
  public label: string = '';
  public eraserRadius: number = 10;
  public color: string = '#FFFFFF';

  /**
   * 그린 후, 지운 후 boolean operation 할지
   * - 그리는 경우
   *  (나중에 그려진 것이..)
   *    - 색 같은것은 병합
   *    - 색 다른것은 나중에 그려진 것과 Different boolean operation 진행
   * - 지우는 경우
   *  - 지우는게 분리된 도형이면 개별 도형으로 만드는지
   */
  public booleanOperation: boolean = true;

  /**Zoom sacle */
  public zoomSacle: number = 1.2;

  public showMinimap: boolean = false;
  private static instance: Config;
  private constructor() {}
  public static getInstance() {
    return this.instance || (this.instance = new this());
  }
}

const ConfigManager = Config.getInstance();
export default ConfigManager;
