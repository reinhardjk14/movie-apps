import {
  StatusBarProps,
  StatusBarPropsAndroid,
  StatusBarPropsIOS,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';

import Text from './Text';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import Icon from './Icon';
import {Button} from './Button';
export * from './ButtonGroup';

export type TFontSizes =
  | 'tiny'
  | 'xsmall'
  | 'caption'
  | 'small'
  | 'body'
  | 'lead'
  | 'headline5'
  | 'headline4'
  | 'headline3'
  | 'headline2'
  | 'headline1'
  | number;

export interface IText extends TextProps {
  children?: React.ReactNode;
  text?: string;
  size?: TFontSizes;
  variant?: 'regular' | 'medium' | 'sbold' | 'bold';
  style?: StyleProp<TextStyle>;
  color?: string;
}

export type IStatusBarProps = StatusBarProps &
  StatusBarPropsAndroid &
  StatusBarPropsIOS;

// declare type iconname list here
export type IconName =
  | 'close'
  | 'close-filled'
  | 'history'
  | 'upvote'
  | 'downvote';

export interface IconSet {
  icons: Array<any>;
}

export interface SvgIconProps {
  iconSet: IconSet;
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number; // some icon might have different padding, use this to offset it
  width?: number;
  height?: number;
  viewBoxWidthPercentage?: number;
  viewBoxHeightPercentage?: number;
}

export interface IconMap {
  name: string;
  paths: Array<string>;
}

export type TIconSizes =
  | 'tiny'
  | 'xsmall'
  | 'caption'
  | 'small'
  | 'body'
  | 'lead'
  | 'headline5'
  | 'headline4'
  | 'headline3'
  | 'headline2'
  | 'headline1'
  | number;

export interface IIcon extends Omit<SvgIconProps, 'iconSet' | 'name' | 'size'> {
  name: IconName;
  color?: string;
  size?: TIconSizes;
  strokeWidth?: number;
  offset?: number;
}

export {FocusAwareStatusBar, Text, Icon, Button};
