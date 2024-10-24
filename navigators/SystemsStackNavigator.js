import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FoodSystemsScreen from '../screens/SystemsScreens/FoodSystemsScreen';
import WaterSystemsScreen from '../screens/SystemsScreens/WaterSystemsScreen';
import PowerSystemsScreen from '../screens/SystemsScreens/PowerScreen';
import HeatSystemsScreen from '../screens/SystemsScreens/ThermalScreen';
import CompostSystemsScreen from '../screens/SystemsScreens/CompostSystemsScreen';
import GreywaterSystemsScreen from '../screens/SystemsScreens/GreywaterSystemsScreen';

const SystemsStack = createStackNavigator();

function CustomHeaderTitle({ title }) {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerUnderline} />
    </View>
  );
}

function SystemsStackNavigator() {
  return (
    <SystemsStack.Navigator>
      <SystemsStack.Screen name="Food" component={FoodSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='FOOD SYSTEM' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }}  />
      <SystemsStack.Screen name="Water" component={WaterSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='WATER SYSTEM' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} />
      <SystemsStack.Screen name="Power" component={PowerSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='POWER SYSTEM' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} />
      <SystemsStack.Screen name="Heat" component={HeatSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='THERMAL SYSTEM' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} />
      <SystemsStack.Screen name="Compost" component={CompostSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='COMPOST SYSTEM' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} />
      <SystemsStack.Screen name="Greywater" component={GreywaterSystemsScreen} options={{ 
          headerTitle: () => <CustomHeaderTitle title='GREYWATER' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} />
    </SystemsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: 'center',
    backgroundColor: '#0E1E38'
  },
  headerTitle: {
    fontFamily: 'asl-regular',
    color: '#FFF1CF',
    fontSize: 24,
  },
  headerUnderline: {
    marginTop: 8, // Adjust the spacing between the title and the underline
    width: 120,    // Length of the underline
    height: 4,    // Thickness of the underline
    backgroundColor: '#ff9700', // Color of the underline
    borderRadius: 30
  },
});


export default SystemsStackNavigator;