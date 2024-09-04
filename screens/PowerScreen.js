// This screen contains a navigational bar at the top, an update component, a widget and a chart.

import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../components/ProgressChartsWidget'
import BatteryChargeChart from '../components/BatteryChargeChart'

const PowerScreen = () => {
    return (
      <ScrollView >
        <View style={styles.container}>
          <SystemsTopTabNavigator />
          <GeneralUpdateComponent updateText="Your batteries are full and there are no significant battery drains." />
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

export default PowerScreen;