//The dashboard screen contains an update component and a widget showing some progress charts from solar and thermal.

import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator.js'
import ProgressChartsWidget from '../components/ProgressChartsWidget.js'
import BatteryChargeChart from '../components/BatteryChargeChart.js'
import GradientBackground from '../components/GradientBackground.js'
import SolarProgressChart from '../components/SolarProgressChart.js'
import ThermalProgressChart from '../components/ThermalProgressChart.js'


const DashboardScreen = () => {
  return (
    <ScrollView >
       <GradientBackground>
      <View style={styles.container}>
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent updateText="Pick systems to compare and I will help explain the data."/>
        <ProgressChartsWidget 
          charts={[
            <SolarProgressChart />,
            <ThermalProgressChart />,
          ]}
        />
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

export default DashboardScreen;