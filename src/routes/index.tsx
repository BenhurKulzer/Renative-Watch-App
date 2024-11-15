import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Locations from '../screens/Locations';
import Robots from '../screens/Robots';
import Summary from '../screens/Summary';
import { AppRoutesData } from '../@types/routes';

const Stack = createNativeStackNavigator<AppRoutesData>();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          () => ({
            headerShown: false,
            unmountOnBlur: true
          })
        }
      >
        <Stack.Screen name="Home" component={Locations} />
        <Stack.Screen name="Robots" component={Robots} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
