/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet} from 'react-native';
import {ThemeVariables} from './theme';

export default function ({FontSize, Colors}: ThemeVariables) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    textButton: {
      fontSize: FontSize.body,
      color: Colors.buttonTitle,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontFamily: 'Montserrat-SemiBold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontFamily: 'Montserrat-Bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontFamily: 'Montserrat-Bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
    },
    sbold: {
      fontFamily: 'Montserrat-SemiBold',
    },
    bold: {
      fontFamily: 'Montserrat-Bold',
    },
  });
}
