import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IContent} from '.';

const Content = ({
  children,
  contentContainerStyle,
  keyboardShouldPersistTaps,
  showsVerticalScrollIndicator,
}: IContent) => {
  return (
    <KeyboardAwareScrollView
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={[{}, contentContainerStyle]}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default Content;
