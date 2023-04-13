import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from './HomeContainer';
import PortfolioContainer from './PortfolioContainer';
import SocialContainer from './SocialContainer';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  <Tab.Navigator
    // tabBar={bottomTabView}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Portfolio" component={PortfolioContainer} />
    <Tab.Screen name="Home" component={HomeContainer} />
    <Tab.Screen name="Social" component={SocialContainer} />
  </Tab.Navigator>;
}
