import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from '../components/BottomTabNavigator'
import LoadingScreen from '../screens/LoadingScreen'

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <Drawer.Navigator initialRouteName='Loading Screen'>
            <Drawer.Screen name='Loading Screen' component={LoadingScreen} />
            <Drawer.Screen name='Tabs' component={BottomTabNavigator} />
        </Drawer.Navigator>
    )
}