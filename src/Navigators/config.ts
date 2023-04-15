import {ForgotPassword, TrendingThisWeek, MovieDetail} from '@Container/index';
import TabNavigator from '@Container/Tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Unauthorized = [
  {
    name: 'TrendingThisWeek',
    component: TrendingThisWeek,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'MovieDetailScreen',
    component: MovieDetail,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
    },
  },
];

export const AuthorizedScreen = [
  {
    name: 'Tabs',
    component: TabNavigator,
    options: {
      headerShown: false,
      // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    },
  },
];

export const UnauthorizedScreen = [...Unauthorized];
