import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator.js'
import ProgressChartsWidget from '../components/ProgressChartsWidget.js'
import BatteryChargeChart from '../components/BatteryChargeChart.js'

const DashboardScreen = () => {
  return (
    <ScrollView >
      <View style={styles.container}>
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent updateText="Pick systems to compare and I will help explain the data."/>
        <ProgressChartsWidget />
        <BatteryChargeChart />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#183564',
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})

export default DashboardScreen;