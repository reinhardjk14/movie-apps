import {useTheme} from '@Hooks/index';
import {Container, Header} from '@Organism/Basic';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {getMovies} from '@Actions/movies';
import {width} from '@Theme/Layout';
import FastImage from 'react-native-fast-image';
import {navigate} from '@Navigators/utils';
import {useNavigation} from '@react-navigation/native';

const TrendingThisWeek = props => {
  const {movieList, _getMovies} = props;
  const {Common, Fonts, Gutters, Layout, Colors, MetricsSizes} = useTheme();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovieList = async () => {
    setIsLoading(true);
    try {
      const movies = await _getMovies();
      setData(movies?.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <>
        <View style={[Layout.justifyContentCenter]}>
          <TouchableOpacity
            onPress={() => navigate('MovieDetailScreen', {movie: item})}>
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w200${item?.poster_path}`,
              }}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                width: width * 0.4,
                height: width * 0.4,
                margin: MetricsSizes.small,
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const handleBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return true;
    }

    return false;
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <Container style={{backgroundColor: Colors.white}}>
        <Header title="Trending This Week" onPress={handleBackButtonPress} />
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          onEndReachedThreshold={0}
          keyExtractor={item => item.id}
          contentContainerStyle={[{alignSelf: 'center'}]}
          ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        />
      </Container>
    </>
  );
};

const mapStateToProps = ({movies}: any) => ({
  moviesList: movies.movieList,
});

const mapDispatchToProps = (dispatch: any) => ({
  _getMovies: (payload: any) => dispatch(getMovies(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingThisWeek);
