
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import ThermalScreen from '../screens/ThermalScreen';
import PowerScreen from '../screens/PowerScreen';
import lightFormIcon from '../assets/icons/lightFormIcon.png';
import heatSystemsIcon from '../assets/icons/heatSystemsIcon.png';
import powerSystemsIcon from '../assets/icons/powerSystemsIcon.png';

// Create stack navigators for each tab
const DashboardStack = createStackNavigator();
const ThermalStack = createStackNavigator();
const PowerStack = createStackNavigator();

function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ headerTitle: 'Dashboard' }} 
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
        options={{ headerTitle: 'Thermal'}} 
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
            options={{ headerTitle: 'Power'}}
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