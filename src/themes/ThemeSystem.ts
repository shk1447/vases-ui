export type HslaColor = {
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
};

export type ColorPallete = {
  main: HslaColor['hue'];
  mainscale: HslaColor[];
  greyscale: HslaColor[];
};

export class ColorSystem {
  private _mode: 'dark' | 'light';
  private _pallete: ColorPallete;

  public get mode() {
    return this._mode;
  }

  public get pallete() {
    return this._pallete;
  }
  constructor(
    mode: 'dark' | 'light' = 'light',
    main: HslaColor['hue'] = 260,
    step: number = 11,
  ) {
    this._mode = mode;

    this._pallete = {
      main: main,
      mainscale: new Array(step).map((d, i) => {
        return {
          hue: main,
          saturation: 100,
          lightness: i * 10,
          alpha: 1,
        };
      }),
      greyscale: new Array(step).map((d, i) => {
        return {
          hue: main,
          saturation: 0,
          lightness: i * 10,
          alpha: 1,
        };
      }),
    };
  }
}
