import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import { Cards } from './examples/cards/Cards';
import { Faq } from './examples/faq/Faq';
import {
  Montserrat,
  MontserratBold,
  MontserratSemiBold,
  OpenSans,
  OpenSansBold,
  OpenSansSemiBold,
} from './fonts';
import { Home } from './Home';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    [OpenSans]: require('../assets/fonts/OpenSans-Regular.ttf'),
    [OpenSansBold]: require('../assets/fonts/OpenSans-Bold.ttf'),
    [OpenSansSemiBold]: require('../assets/fonts/OpenSans-SemiBold.ttf'),
    [Montserrat]: require('../assets/fonts/Montserrat-Regular.ttf'),
    [MontserratSemiBold]: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    [MontserratBold]: require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Examples' }}
        />
        <Stack.Screen name="FAQ" component={Faq} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
