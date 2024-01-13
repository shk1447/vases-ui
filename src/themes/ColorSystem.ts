type CreateArrayWithLengthX<
    LENGTH extends number,
    ACC extends unknown[] = [],
> = ACC['length'] extends LENGTH
    ? ACC
    : CreateArrayWithLengthX<LENGTH, [...ACC,1]>

type NumericRange<
   START_ARR extends number[], 
   END extends number, 
   ACC extends number=never>
=START_ARR['length'] extends END 
   ? ACC | END
   : NumericRange<[...START_ARR,1], END, ACC | START_ARR['length']>

type RangeNumber<FROM extends number, TO extends number> = NumericRange<CreateArrayWithLengthX<FROM>,TO>



export type HslaColor = {
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
};

export type Colors = Record<RangeNumber<0,100>, HslaColor>;

export type ColorStep = (keyof Colors)[]

export type ColorPallete = {
  primary: Colors
  secondary: Colors
  success: Colors
  warning: Colors
  error: Colors
  info: Colors
  grey: Colors
};

export type ContrastColor = {
  main: HslaColor;
  contrast: HslaColor;
}

export class ColorSystem {
  private _pallete: ColorPallete;
  private _steps:ColorStep;
  
  public get pallete() {
    return this._pallete;
  }

  public setPallete(palleteKey: keyof ColorPallete, hsla: HslaColor) {
    this._steps.forEach((value, index) => {
      this._pallete[palleteKey][value] = {
        hue: hsla.hue,
        saturation: hsla.saturation,
        lightness: value,
        alpha:1
      };
    })
  }
  
  public color(palleteKey: keyof ColorPallete, lightness: RangeNumber<0,100>):HslaColor {
    return this._pallete[palleteKey][lightness];
  }
  public hexToHsl(hex: string):HslaColor | undefined {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if(!result) return undefined;

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h:number = 0, s:number = 0, l:number = (max + min) / 2;

    if(max == min){
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    return {
      hue:h,
      saturation: s,
      lightness: l,
      alpha:1
    }
  }
  public hslaToHex(color:HslaColor) {
    const hue = color.hue / 360;
    const saturation = color.saturation / 100;
    const lightness = color.lightness / 100;
    let r, g, b;
    if (saturation === 0) {
      r = g = b = lightness; // achromatic
    } else {
      const hue2rgb = (p:number, q:number, t:number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      r = hue2rgb(p, q, hue + 1 / 3);
      g = hue2rgb(p, q, hue);
      b = hue2rgb(p, q, hue - 1 / 3);
    }
    const toHex = (x:number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  constructor(
    primary: {
      hue:number;
      saturation:number;
    } = {hue:260, saturation:100},
    secondary: {
      hue:number;
      saturation:number;
    } = {hue:220, saturation:50},
    success: {
      hue:number;
      saturation:number;
    } = {hue:120, saturation:100},
    warning: {
      hue:number;
      saturation:number;
    } = {hue:40, saturation:100},
    error: {
      hue:number;
      saturation:number;
    } = {hue:0, saturation:100},
    info: {
      hue:number;
      saturation:number;
    } = {hue:200, saturation:100},
  ) {
    this._steps = [...Array(101).keys()] as any;
    console.log(this._steps)
    const _pallete:Record<keyof ColorPallete, any> = {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
      grey: {},
    };
    
    this._steps.forEach((value, index) => {
      _pallete.primary[value] = {
        hue: primary.hue,
        saturation: primary.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.secondary[value] = {
        hue: secondary.hue,
        saturation: secondary.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.success[value] = {
        hue: success.hue,
        saturation: success.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.warning[value] = {
        hue: warning.hue,
        saturation: warning.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.error[value] = {
        hue: error.hue,
        saturation: error.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.info[value] = {
        hue: info.hue,
        saturation: info.saturation,
        lightness: value,
        alpha:1
      }
      _pallete.grey[value] = {
        hue: 0,
        saturation: 0,
        lightness: value,
        alpha:1
      }
    });
    this._pallete = _pallete;
  }
}
