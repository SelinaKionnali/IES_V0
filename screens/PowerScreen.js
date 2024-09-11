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
import WeeklySolarBarChart from '../charts/WeeklySolarBarChart.js'
import EnergyUsagePiechart from '../charts/EnergyUsagePiechart.js'
import StatusWidget from '../components/StatusWidget.js'
import {solarData} from '../data/solarData.js'


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
          <View style={styles.widgetContainer}>
          <StatusWidget 
          title="System Status" 
          status={solarData.systemStatus.status} 
          message={solarData.systemStatus.message} 
          />
          <StatusWidget 
          title="Ghost Drain" 
          status={solarData.ghostDrainStatus.status} 
          message={solarData.ghostDrainStatus.message} 
          />
          </View>
          <SolarEnergyUsage />
          <WeeklySolarBarChart />
          <EnergyUsagePiechart />
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
      widgetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        
    
    
      }
  })

export default PowerScreen;