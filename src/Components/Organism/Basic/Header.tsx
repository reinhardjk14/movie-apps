import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '@Atom/index';
import useTheme from '@Hooks/useTheme';
import {width} from '@Theme/Layout';

export default function Header(props: any) {
  const {title, backAction} = props;

  const {Colors, MetricsSizes, Layout, Gutters} = useTheme();
  return (
    <View
      style={{
        backgroundColor: Colors.base,
        padding: MetricsSizes.large,
        borderBottomStartRadius: MetricsSizes.regular,
        borderBottomEndRadius: MetricsSizes.regular,
      }}>
      <View>
        <TouchableOpacity onPress={backAction} style={{zIndex: 999}}>
          <Image
            source={require('@Assets/Icon/backArrow.png')}
            style={{
              width: width * 0.05,
              height: width * 0.05,
              position: 'absolute',
              top: 4,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text
          text={title}
          size="headline5"
          variant="sbold"
          style={{textAlign: 'center'}}
        />
      </View>
    </View>
  );
}
