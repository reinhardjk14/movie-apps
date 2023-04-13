import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const RegisterContainer = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>RegisterContainer</Text>
    </View>
  );
};

export default RegisterContainer;
