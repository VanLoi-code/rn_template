import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '@themes';
import React from 'react';
import {StatusBar} from 'react-native';
import AuthContainer from './AuthContainer';
import BottomContainer from './BottomContainer';
import CommonContainer from './CommonContainer';
import {navigationRef} from './navigationRef';
import router from './router';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={router.BOTTOM_CONTAINER}>
        <RootStack.Screen
          name={router.AUTH_CONTAINER}
          component={AuthContainer}
        />
        <RootStack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
        <RootStack.Screen
          name={router.COMMON_CONTAINER}
          component={CommonContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
