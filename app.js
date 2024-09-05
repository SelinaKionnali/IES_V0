// This is the main file of the app. It is responsible for loading the fonts and other resources, and then rendering the app.
// The app uses the SplashScreen module to prevent the splash screen from hiding automatically until the app is ready to render.
// The app uses the Font module to load custom fonts, and then renders the app with the loaded fonts.

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import BottomTabNavigator from './components/BottomTabNavigator';
import GradientBackground from './components/GradientBackground';



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Text-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
          'Text-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
          'Text-Light': require('./assets/fonts/Quicksand-Light.ttf'),
          'Text-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
          'Text-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
          'asl-regular': require('./assets/fonts/AveriaSansLibre-Regular.ttf'),
          'asl-Light': require('./assets/fonts/AveriaSansLibre-Light.ttf'),
          'asl-Bold': require('./assets/fonts/AveriaSansLibre-Bold.ttf')
           });

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GradientBackground>
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <BottomTabNavigator />  
      </NavigationContainer>
    </View>
    </GradientBackground>

  );
}