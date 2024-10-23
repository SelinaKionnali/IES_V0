import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-reanimated';
import LoadingScreen from './screens/LoadingScreen';
import BottomTabNavigator from './components/BottomTabNavigator';
import SystemsStackNavigator from './navigators/SystemsStackNavigator.js'

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator(); // Create a stack navigator for loading and main navigation

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

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

        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading time
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Show nothing until the app is ready
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            {!isLoggedIn ? (
              <Stack.Screen
                name="Loading"
                options={{ headerShown: false }} 
              >
                {(props) => <LoadingScreen {...props} setIsLoggedIn={setIsLoggedIn} />} 
              </Stack.Screen>
            ) : (
              <>
              <Stack.Screen
                name="MainApp"
                component={BottomTabNavigator}
                options={{ headerShown: false }} 
              />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
}