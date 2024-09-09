// This screen contains a navigational bar at the top, an update component, a widget and a chart.


import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../components/ProgressChartsWidget'
import BatteryChargeChart from '../components/BatteryChargeChart'
import GradientBackground from '../components/GradientBackground.js'
import ThermalProgressChart from '../components/ThermalProgressChart.js'
import DailyTempChart from '../charts/DailyTempLineChart.js'


const ThermalScreen = () => {
  return (
    <ScrollView >
      <GradientBackground>
      <View style={styles.container}>
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent updateText="You are recovering lots of heat from cooking today." />
        <ProgressChartsWidget
          thermalChart={<ThermalProgressChart />}
        />
        <DailyTempChart />
        <BatteryChargeChart />
      </View>
      </GradientBackground>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})
export default ThermalScreen;