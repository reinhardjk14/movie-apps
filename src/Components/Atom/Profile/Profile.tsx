import React from 'react';
import {IProfile, IProfileBody} from '.';
import {Colors} from '@Theme/Variables';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useTheme from '@Hooks/useTheme';
import Avatar from './Avatar';
import ProfileImage from './ProfileImage';
import ProfileIcon from './ProfileIcon';

export const ProfileBody = ({
  children,
  size = 56,
  outlineColor = Colors.outlineProfile,
  outlineWidth = 1.5,
  borderRadius = size / 2,
  backgroundColor = Colors.white,
  containerStyle,
  onPress,
}: IProfileBody) => {
  const {Common} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        Common.profile.container(
          size,
          outlineWidth,
          outlineColor,
          borderRadius,
          backgroundColor,
        ),
        containerStyle,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const Profile = ({type = 'avatar', ...props}: IProfile) => {
  switch (type) {
    case 'avatar':
      return <Avatar {...props} />;
    case 'image':
      return <ProfileImage {...props} />;
    default:
      return <ProfileIcon {...props} />;
  }
};

export default Profile;
