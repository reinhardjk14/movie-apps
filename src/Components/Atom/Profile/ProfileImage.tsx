import {Image} from 'react-native';
import React from 'react';
import {IProfileImage} from '.';
import {Colors} from '@Theme/Variables';
import useTheme from '@Hooks/useTheme';
import {ProfileBody} from './Profile';

const ProfileImage = ({
  size = 56,
  outlineColor = Colors.outlineProfile,
  outlineWidth = 1.5,
  borderRadius = size / 2,
  backgroundColor = Colors.white,
  containerStyle,
  image,
  onPress,
}: IProfileImage) => {
  const {Common} = useTheme();
  return (
    <ProfileBody
      children={
        <Image
          style={Common.profile.container(
            size,
            outlineWidth,
            outlineColor,
            borderRadius,
            backgroundColor,
          )}
          source={image}
        />
      }
      containerStyle={containerStyle}
      onPress={onPress}
      outlineWidth={0}
    />
  );
};

export default ProfileImage;
