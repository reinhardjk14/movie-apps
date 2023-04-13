import Variables from '@Theme/Variables';
import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';
import {IconName, TIconSizes} from '..';
import Button from './Button';

type buttonTypes = 'primary' | 'outline' | 'iconOnly';
type color = typeof Variables.Colors | string | string[];

export interface IButton extends TouchableOpacityProps {
  title?: string;
  type?: buttonTypes;
  loading?: boolean;
  titleSize?: typeof Variables.FontSize | number;
}

export interface IButtonPrimary extends Omit<IButton, 'type'> {
  colors?: Array<color>;
}

export interface IButtonOutline extends Omit<IButton, 'type'> {
  borderWidth?: number;
}

export interface IButtonBody extends IButton {
  icon?: IconName;
  iconSize?: TIconSizes;
  iconPosition?: 'left' | 'right';
  iconColor?: color;
  titleStyle?: StyleProp<TextStyle>;
}

export interface IButtonIcon extends TouchableOpacityProps {
  icon: IconName;
  iconSize?: TIconSizes;
  iconColor?: color;
  noBorder?: boolean;
}

export {Button};
