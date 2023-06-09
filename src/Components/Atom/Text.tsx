import useTheme from '@Hooks/useTheme';
import {Colors, FontSize} from '@Theme/Variables';
import React from 'react';
import {Text as RNText} from 'react-native';
import {IText} from '.';

const Text = ({
  text,
  size = 'body',
  variant = 'regular',
  style,
  children,
  color = Colors.text,
  ...props
}: IText) => {
  const {Fonts}: {Fonts: any} = useTheme();
  let fontSize = {fontSize: typeof size === 'number' ? size : FontSize[size]};

  return (
    <RNText
      style={[{color: color}, fontSize, Fonts[variant], style]}
      {...props}>
      {text}
      {children}
    </RNText>
  );
};

export default Text;
