import useTheme from '@Hooks/useTheme';
import React from 'react';
import {View} from 'react-native';
import {IContainer} from '.';
import Base from './basic.style';

const Container = ({children, style}: IContainer) => {
  const {Common} = useTheme();
  return (
    <View
      style={[
        Base['Basic.Container'],
        Common.backgroundLayout.backgroundColor,
        style,
      ]}>
      {children}
    </View>
  );
};

export default Container;
