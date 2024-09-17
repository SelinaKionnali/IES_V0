// The bottom tab navigator is a navigational component and is imported in the app.js file

import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import ThermalScreen from '../screens/ThermalScreen';
import PowerScreen from '../screens/PowerScreen';
import lightFormIcon from '../assets/icons/lightFormIcon.png';
import heatSystemsIcon from '../assets/icons/heatSystemsIcon.png';
import powerSystemsIcon from '../assets/icons/powerSystemsIcon.png';
import CircularComponentScreen from '../screens/CircularComponentScreen';

// Create stack navigators for each tab
const DashboardStack = createStackNavigator();
const ThermalStack = createStackNavigator();
const PowerStack = createStackNavigator();

function CustomHeaderTitle({ title }) {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerUnderline} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: 'center',
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

function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Compare Systems' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#183564',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </DashboardStack.Navigator>
  );
}

function ThermalStackNavigator() {
  return (
    <ThermalStack.Navigator>
      <ThermalStack.Screen 
        name="Thermal" 
        component={ThermalScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Thermal' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#183564',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
      <ThermalStack.Screen 
        name='Circular Component'
        component={CircularComponentScreen}
      />
    </ThermalStack.Navigator>
  );
}

function PowerStackNavigator() {
    return (
        <PowerStack.Navigator>
            <PowerStack.Screen 
            name="Power"
            component={PowerScreen}
            options={{ 
              headerTitle: () => <CustomHeaderTitle title='Power'/>, // Use custom header title
              headerStyle: {
                backgroundColor: '#183564',
                shadowOpacity: 0, // Remove shadow on iOS
                borderBottomWidth: 0, // Remove border line on iOS
              },
            }} 
            />
        </PowerStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, size}) => {
            let iconSource;

            if (route.name === 'DashboardTab') {
                iconSource = lightFormIcon
            } else if (route.name === 'ThermalTab') {
                iconSource = heatSystemsIcon;
            } else if (route.name === 'PowerTab') {
                iconSource = powerSystemsIcon;
            
            }
            
            return (
                <Image
                  source={iconSource}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                  }}
                />
              );            },
            tabBarActiveTintColor: '#ff9700',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
      })}
      
    >
      <Tab.Screen 
        name="DashboardTab" 
        component={DashboardStackNavigator} 
        options={{ 
            tabBarLabel: 'Dashboard', 
        }}
      />
      <Tab.Screen 
        name="ThermalTab" 
        component={ThermalStackNavigator} 
        options={{ 
            tabBarLabel: 'Thermal',
        }}
      />
      <Tab.Screen 
      name="PowerTab"
      component={PowerStackNavigator}
      options={{ tabBarLabel: 'Power',

      }}
      />
    </Tab.Navigator>
  );
}