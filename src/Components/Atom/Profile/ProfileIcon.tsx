import {View} from 'react-native';
import React from 'react';
import useTheme from '@Hooks/useTheme';
import {ProfileBody} from './Profile';
import {IProfileIcon} from '.';
import {Colors} from '@Theme/Variables';
import {Icon} from '..';

const ProfileIcon = ({
  size = 56,
  outlineColor = Colors.outlineProfile,
  outlineWidth = 1.5,
  borderRadius = size / 2,
  backgroundColor = Colors.white,
  containerStyle,
  iconName = 'close',
  onPress,
}: IProfileIcon) => {
  const {Common} = useTheme();
  return (
    <ProfileBody
      children={
        <View
          style={Common.profile.container(
            size,
            outlineWidth,
            outlineColor,
            borderRadius,
            backgroundColor,
          )}>
          <Icon name={iconName} />
        </View>
      }
      containerStyle={containerStyle}
      onPress={onPress}
      outlineWidth={0}
    />
  );
};

export default ProfileIcon;
