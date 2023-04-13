import {
  ForgotPassword,
  LoginContainer,
  RegisterContainer,
} from '@Container/index';
import TabNavigator from '@Container/Tabs';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Unauthorized = [
  {
    name: 'LoginScreen',
    component: LoginContainer,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'RegisterScreen',
    component: RegisterContainer,
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
