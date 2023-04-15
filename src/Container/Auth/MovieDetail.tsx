import React, {useEffect} from 'react';
import {Container, Content, Header} from '@Organism/Basic';
import {View, BackHandler} from 'react-native';
import {Text} from '@Atom/index';
import FastImage from 'react-native-fast-image';
import {width} from '@Theme/Layout';
import useTheme from '@Hooks/useTheme';
import {useNavigation} from '@react-navigation/native';

const MovieDetail = (props: any) => {
  const {route} = props;
  const {movie} = route.params;
  const {Layout, Gutters} = useTheme();
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Movie'} backAction={handleBackButtonPress} />
      <Content
        contentContainerStyle={[
          Layout.center,
          Gutters.smallVPadding,
          Gutters.regularHPadding,
        ]}>
        <FastImage
          source={{uri: `https://image.tmdb.org/t/p/w200${movie?.poster_path}`}}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: width * 0.7, height: width * 0.7}}
        />
        <Text
          text={movie?.title ? movie?.title : movie?.name}
          variant="sbold"
          size={'lead'}
          style={[Gutters.regularTMargin, {textAlign: 'center'}]}
        />
        <Text
          text={`Release Date: ${
            movie?.release_date ? movie?.release_date : 'TBA'
          }`}
          size={'small'}
          variant="sbold"
        />
        <Text
          text={movie?.overview}
          variant="regular"
          size={'caption'}
          style={{textAlign: 'justify', ...Gutters.smallTMargin}}
        />
      </Content>
    </Container>
  );
};

export default MovieDetail;
