export type CommonOptions = {
  design: {
    pallete: {
      neutral: {
        black: string;
        white: string;
        grey100: string;
        grey80: string;
        grey60: string;
        grey20: string;
        grey10: string;
        grey5: string;
      };
      brand: {
        navy: string;
        orange: string;
        skyblue: string;
        turquoise: string;
      };
      semantic: {
        success: string;
        warning: string;
        error100: string;
        error110: string;
      };
      primary110: string;
      primary100: string;
      primary60: string;
      primary40: string;
      primary20: string;
    };
  };
};

export const options: CommonOptions = {
  design: {
    pallete: {
      neutral: {
        black: '#2A2E39',
        white: '#FFFFFF',
        grey100: '#525458',
        grey80: '#A5A9B0',
        grey60: '#CACCD0',
        grey20: '#DFE0E3',
        grey10: '#E9EDF2',
        grey5: '#F3F6F9',
      },
      brand: {
        navy: '#191D46',
        orange: '#E68840',
        skyblue: '#60ABDD',
        turquoise: '#5AB9AB',
      },
      semantic: {
        success: '#8FD015',
        warning: '#8FD015',
        error100: '#8FD015',
        error110: '#8FD015',
      },
      primary110: '#474ACB',
      primary100: '#5457D8',
      primary60: '#7073E4',
      primary40: '#ADAEED',
      primary20: '#ADAEED',
    },
  },
};
