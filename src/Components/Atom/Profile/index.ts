import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {IconName} from '..';
import Profile from './Profile';

type buttonTypes = 'avatar' | 'image' | 'icon';

export interface IProfile extends IProfileBody {
  type: buttonTypes;
}

export interface IProfileBody {
  children?: React.ReactNode;
  size?: number;
  outlineColor?: string;
  outlineWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export interface IProfileAvatar extends Omit<IProfileBody, 'type'> {
  avatar?: string;
  removable?: boolean;
  onClose?: boolean;
  onChangeClose?: () => void;
  status?: string;
}

export interface IProfileImage extends Omit<IProfileBody, 'type'> {
  image?: ImageSourcePropType;
}

export interface IProfileIcon extends Omit<IProfileBody, 'type'> {
  iconName?: IconName;
}

export {Profile};
