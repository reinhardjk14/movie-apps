/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {PixelRatio, Platform} from 'react-native';
import {width} from './Layout';
import {Variables} from './themes/default_dark';

/**
 * Colors
 */
export const Colors = {
  // seeds colors:
  primary: '#565656',
  base: '#69FFC9',
  baseT: '#50E6AF',
  outlineBase: '#262626',
  secondary: '#399BE0',
  disabled: '#DADADA',
  text: '#212529',
  buttonTitle: '#262626',
  buttonTitleDisabled: '#585858',
  red: '#E74C3C',
  outlineProfile: '#5E44FF',
  statusOffline: '#727272',
  statusOnline: '#69FFC9',
  statusBorder: '#F6F7F9',
  closeFilled: '#9E9E9E',
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  success: '#28a745',
  error: '#dc3545',
  container: 'white',
};

export const NavigationColors = {
  primary: Colors.primary,
};

const scale = width / 320;
export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

/**
 * FontSize
 */
export const FontSize: any = {
  xsmall: normalize(11),
  caption: normalize(12),
  small: normalize(13),
  body: normalize(14),
  lead: normalize(16),
  headline5: normalize(18),
  headline4: normalize(20),
  headline3: normalize(22),
  headline2: normalize(24),
  headline1: normalize(26),
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
