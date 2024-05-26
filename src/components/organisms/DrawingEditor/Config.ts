class Config {
  public label: string = "";
  public eraserRadius: number = 5;
  public eraserMode: string = "pexel";
  public brushRadius: number = 5;
  public color: string = "#FFFFFF";
  public booleanOperation: boolean = true;
  public enableTransfromerOutOfScreen: boolean = true;

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
