//The dashboard screen contains an update component and a widget showing some progress charts from solar and thermal.

import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator.js'
import ProgressChartsWidget from '../components/ProgressChartsWidget.js'
import BatteryChargeChart from '../components/BatteryChargeChart.js'
import GradientBackground from '../components/GradientBackground.js'
import SolarProgressChart from '../components/SolarProgressChart.js'
import ThermalProgressChart from '../components/ThermalProgressChart.js'
import BatteryChargeSimGraph from '../components/BatteryChargeSimGraph.js'

const width = Dimensions.get('screen')

const DashboardScreen = () => {
  return (
    <ScrollView >
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
        <BatteryChargeSimGraph 
        title="State of Charge"
        subtitle="Your battery level over time"
        />
       
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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