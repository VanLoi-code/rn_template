import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens';
import React from 'react';
import router from './router';

const TabStack = createBottomTabNavigator();

const BottomContainer = () => {
  return (
    <TabStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <TabStack.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
      />
      <TabStack.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
      />
    </TabStack.Navigator>
  );
};

export default BottomContainer;
