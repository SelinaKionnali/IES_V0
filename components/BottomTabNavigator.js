// The bottom tab navigator is a navigational component and is imported in the app.js file

import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import ThermalScreen from '../screens/SystemsScreens/ThermalScreen';
import PowerScreen from '../screens/SystemsScreens/PowerScreen';
import LumiScreen from '../screens/LumiScreen';
import SettingsScreen from '../screens/SettingsScreen';
import lightFormIcon from '../assets/icons/lightFormIcon.png';
import CircularComponentScreen from '../screens/CircularComponentScreen';
import hamburger from '../assets/icons/hamburger.png'
import lumi2 from '../assets/icons/lumi2.png'
import mktPlace from '../assets/icons/mktPlaceIcon.png'
import profile3 from '../assets/icons/profile3.png'
import ProfileScreen from '../screens/ProfileScreen';
import MarketplaceScreen from '../screens/MarketplaceScreen';

// Create stack navigators for each tab
const ProfileStack = createStackNavigator();
const MarketplaceStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const LumiStack = createStackNavigator();
const SettingsStack = createStackNavigator()
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


function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Profile' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </ProfileStack.Navigator>
  );
}

function MarketplaceStackNavigator() {
  return (
    <MarketplaceStack.Navigator>
      <MarketplaceStack.Screen 
        name="Marketplace" 
        component={MarketplaceScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Marketplace' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </MarketplaceStack.Navigator>
  );
}


function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Compare Systems' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </DashboardStack.Navigator>
  );
}

function LumiStackNavigator() {
  return (
    <LumiStack.Navigator>
      <LumiStack.Screen 
        name="Lumi" 
        component={LumiScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Lumi' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </LumiStack.Navigator>
  );
}

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ 
          headerTitle: () => <CustomHeaderTitle title='Settings' />, // Use custom header title
          headerStyle: {
            backgroundColor: '#0E1E38',
            shadowOpacity: 0, // Remove shadow on iOS
            borderBottomWidth: 0, // Remove border line on iOS
          },
        }} 
      />
    </SettingsStack.Navigator>
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
            backgroundColor: '#0E1E38',
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
                backgroundColor: '#0E1E38',
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

            if (route.name === 'ProfileTab') {
                iconSource = profile3
            } else if (route.name === 'MarketplaceTab') {
                iconSource = mktPlace
            } else if (route.name === 'DashboardTab') {
                iconSource = lightFormIcon
            } else if (route.name === 'LumiTab') {
                iconSource = lumi2;
            } else if (route.name === 'SettingsTab') {
                iconSource = hamburger;
            
            }
            
            return (
                <Image
                  source={iconSource}
                  style={{
                    width: size + 10,
                    height: size + 10,
                    tintColor: color,
                  }}
                />
              );            },
            tabBarActiveTintColor: '#ff9700',
            tabBarInactiveTintColor: '#fff1cf',
            headerShown: false,
            tabBarStyle: { 
              backgroundColor: '#0E1E38',
              borderTopWidth: 0
             },
            })}
      
             >
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileStackNavigator} 
        options={{ 
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen 
        name="MarketplaceTab" 
        component={MarketplaceStackNavigator} 
        options={{ 
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen 
        name="DashboardTab" 
        component={DashboardStackNavigator} 
        options={{ 
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen 
        name="LumiTab" 
        component={LumiStackNavigator} 
        options={{ 
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen 
      name="SettingsTab"
      component={SettingsStackNavigator}
      options={{ 
        tabBarShowLabel: false,

      }}
      />
    </Tab.Navigator>
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
