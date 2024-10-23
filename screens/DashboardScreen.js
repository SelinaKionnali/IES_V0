//The dashboard screen contains an update component and a widget showing some progress charts from solar and thermal.

import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator.js'
import WidgetContainer from '../components/WidgetContainer.js'

const {width, height} = Dimensions.get('screen')

const DashboardScreen = () => {
  return (
    <ScrollView >
      <View style={styles.container}>
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent updateText="Pick systems to compare and I will help explain the data."/>
        <WidgetContainer />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'top',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: '#0E1E38'
        
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})

export default DashboardScreen;