import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import {UnauthorizedScreen} from './config';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const _onNavigationStateChanges = (navState: any) => {
    if (navState.hasOwnProperty('index')) {
      //   dispatch(setNavigationState(navState));
    }
    return;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer
        // TODO: implement general deeplinking
        ref={navigationRef}>
        {/* <StatusBar /> */}
        <Stack.Navigator
          screenListeners={{
            state: (e: any) => {
              _onNavigationStateChanges(e.data?.state);
            },
          }}
          screenOptions={{
            keyboardHandlingEnabled: true,
            title: '',
            headerTitle: '',
          }}>
          {/* {isLoggedIn ? (
                <Stack.Group>
                {AuthorizedScreen.map((i, idx): JSX.Element => {
                    return (
                    <Stack.Screen
                        key={idx}
                        name={i.name}
                        component={i.component}
                        options={i.options}
                    />
                    );
                })}
                </Stack.Group>
            ) : ( */}
          <Stack.Group>
            {UnauthorizedScreen.map((i, idx): JSX.Element => {
              return (
                <Stack.Screen
                  key={idx}
                  name={i.name}
                  component={i.component}
                  options={i.options}
                />
              );
            })}
          </Stack.Group>
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
