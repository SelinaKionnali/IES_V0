// This screen contains a navigational bar at the top, an update component, a widget and a chart.

import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../components/ProgressChartsWidget'
import BatteryChargeChart from '../components/BatteryChargeChart'
import SolarEnergyUsage from '../charts/SolarEnergyUsage.js'
import GradientBackground from '../components/GradientBackground.js'
import SolarProgressChart from '../components/SolarProgressChart.js'


const PowerScreen = () => {
    return (
      <ScrollView >
        <GradientBackground>

        <View style={styles.container}>
          <SystemsTopTabNavigator />
          <GeneralUpdateComponent updateText="Your batteries are full and there are no significant battery drains." />
          <ProgressChartsWidget 
            solarChart={<SolarProgressChart />}
          />
          <SolarEnergyUsage />
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

export default PowerScreen;