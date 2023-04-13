import useTheme from '@Hooks/useTheme';
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {IButtonPrimary, IButtonBody} from '.';
import {ButtonBody} from './Button';

const Primary = ({
  title,
  loading,
  colors,
  titleSize = 'small',
  ...props
}: IButtonPrimary) => {
  const {Colors, Gutters, Fonts, Common} = useTheme();
  const defaultColors = [Colors.base, Colors.baseT];

  return (
    <LinearGradient
      colors={
        props.disabled ? [Colors.disabled] : colors ? colors : defaultColors
      }
      style={[Common.button.base, props.style ? props.style : {}]}>
      <TouchableOpacity
        {...props}
        activeOpacity={0.8}
        style={[Common.button.base, Gutters.tinyVPadding]}>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <ButtonBody {...props} title={title} titleSize={titleSize} />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Primary;
