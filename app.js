// This is the main file of the app. It is responsible for loading the fonts and other resources, and then rendering the app.
// The app uses the SplashScreen module to prevent the splash screen from hiding automatically until the app is ready to render.
// The app uses the Font module to load custom fonts, and then renders the app with the loaded fonts.

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createStackNavigator();

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts and any other resources here
        await Font.loadAsync({
          'Text-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
          'Text-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
          'Text-Light': require('./assets/fonts/Quicksand-Light.ttf'),
          'Text-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
          'Text-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
              });

        // Artificial delay for demonstration purposes, remove in production
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Set the app as ready to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen after the root view has been laid out
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Keep returning null while fonts and other resources load
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dash"
          screenOptions={{
            headerTitle: 'Dashboard',
            headerStyle: { backgroundColor: '#183564' },
            headerTitleStyle: { fontFamily: 'Text-Bold', fontSize: 28, marginBottom: 10, color: '#FFF1CF'}, // Example of using the font in header
          }}
        >
          <Stack.Screen name="Dash" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}