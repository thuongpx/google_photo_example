import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

// Base design width and height
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const baseRatio = () => {
  return width < height
    ? width / guidelineBaseWidth
    : height / guidelineBaseHeight;
};

// sizeScale based on actual design size
export const sizeScale = size => Math.round(baseRatio() * size);

// sizeHeight calc height scale by base height
export const sizeHeight = size =>
  Math.round((height / guidelineBaseHeight) * size);

// sizeWidth calc width scale by base width and percentage of factor, default is 0.5
export const sizeWidth = (size, factor = 0.5) =>
  Math.round(size + (sizeScale(size) - size) * factor);

// Convert width percentage to independent pixel.
export const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

// Convert heihgt percentage to independent pixel.
export const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const sizeFont = size => size * PixelRatio.getFontScale();
