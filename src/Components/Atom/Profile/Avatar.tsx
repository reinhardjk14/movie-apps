import {Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileBody} from './Profile';
import {linkAvatarV2} from '@Theme/Avatar';
import {Colors} from '@Theme/Variables';
import {IProfileAvatar} from '.';
import {Icon} from '..';
import useTheme from '@Hooks/useTheme';

const Avatar = ({
  avatar = 'AVATARV2_',
  size = 56,
  outlineWidth = 1.5,
  outlineColor = Colors.outlineProfile,
  borderRadius = size / 2,
  backgroundColor = Colors.white,
  status,
  containerStyle,
  removable,
  onChangeClose,
  onClose = false,
  onPress,
}: IProfileAvatar) => {
  const [value, setValue] = useState(1);
  const {Common} = useTheme();
  useEffect(() => {
    if (avatar) {
      let searchAvatar = avatar.split('AVATARV2_');
      if (searchAvatar && searchAvatar.length === 2 && searchAvatar[1]) {
        let isNusantara = searchAvatar[1].split('NUSANTARA_');
        if (isNusantara && isNusantara.length > 1) {
          setValue(Number(isNusantara[1]));
        } else {
          setValue(Number(searchAvatar[1]));
        }
      }
    } else {
      setValue(Math.floor(Math.random()));
    }
  }, [avatar]);

  return (
    <>
      {!onClose && (
        <ProfileBody
          children={
            <>
              <Image
                style={Common.profile.container(
                  size,
                  outlineWidth,
                  outlineColor,
                  borderRadius,
                  backgroundColor,
                )}
                source={{uri: linkAvatarV2({id: value, small: true})}}
              />
              {status && <View style={Common.profile.status(size, status)} />}
              {removable && (
                <TouchableOpacity
                  style={Common.profile.icon(size)}
                  onPress={onChangeClose}>
                  <Icon
                    name="close-filled"
                    size={18}
                    color={Colors.closeFilled}
                  />
                </TouchableOpacity>
              )}
            </>
          }
          outlineWidth={0}
          containerStyle={containerStyle}
          onPress={onPress}
        />
      )}
    </>
  );
};

export default Avatar;
