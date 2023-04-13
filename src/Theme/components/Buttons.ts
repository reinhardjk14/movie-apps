import {CommonParams} from '@Theme/theme';
import {StyleSheet} from 'react-native';

export default function <C>({Colors, Gutters, Layout}: CommonParams<C>) {
  const base = {
    ...Gutters.tinyVMargin,
    ...Gutters.tinyHMargin,
    ...Layout.fill,
    ...Layout.rowCenter,
    borderRadius: 12,
  };

  return StyleSheet.create({
    base,
    outline: {
      ...base,
      ...Layout.rowCenter,
      ...Gutters.smallVPadding,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.baseT,
    },
    icon: {
      ...Layout.center,
      ...Gutters.tinyHPadding,
      ...Gutters.tinyVPadding,
      ...Gutters.tinyHMargin,
      ...Gutters.tinyVMargin,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: Colors.outlineBase,
      flexGrow: 0,
    },
  });
}
