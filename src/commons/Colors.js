export const Colors = {
  primary_01: '#1A87BC',
  primary_shade_06_disable: '#60A3C3',
  blueSecondary: '#5885FE',
  white: '#ffffff',
  black: '#000000',

  // new color:
  neutral_02: '#252729',
  neutral_03: '#373B3D',
  neutral_04: '#6C7478',
  neutral_05: '#919394',
  neutral_06: '#E1E4E6',
  neutral_07: '#F5F8FA',
  neutral_08: '#FAFDFF',
  silver: '#C0C0C0',
  gray: '#808080',
  black_neutral_03: '#26282E',
  black_neutral_05: '#9F9FA2',
  secondary_01: '#79B92B',
  secondary_02: '#F83115',
  secondary_05: '#3C71FE',
  secondary_02_shade_01: '#FDBDB4',
  secondary_02_shade_03: '#F3523C',
  primary_shade_02: '#28A5E1',
  primary_shade_01: '#14678F',

  bg_primary: '#FAFDFF',
};

const percentToHex = p => {
  const intValue = Math.floor((p / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
};

export const colorOpacityMaker = (color, opacity) =>
  `${color}${percentToHex(opacity)}`;
