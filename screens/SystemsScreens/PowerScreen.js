// This screen contains a navigational bar at the top, an update component, a widget and a chart.

import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../../components/ProgressChartsWidget'
import SolarProgressChart from '../../components/SolarProgressChart.js'
import StatusWidget from '../../components/StatusWidget.js'
import {solarData} from '../../data/solarData.js'
import ThermalProgressChart from '../../components/ThermalProgressChart.js'
import { colours } from '../../Utilities/colours.js'
import BatteryChargeSimGraph from '../../components/BatteryChargeSimGraph.js'


const {width, height} = Dimensions.get('screen')


const PowerScreen = () => {

  const wattInToday = solarData.daily


    return (
      <ScrollView >

        <View style={styles.container}>
          <GeneralUpdateComponent updateText="Your batteries are full and there are no significant battery drains." />
          <ProgressChartsWidget 
            solarChart={<SolarProgressChart number='41%' text='Battery Charge'/>}
            thermalChart={<ThermalProgressChart number='92%' text='Battery Health' header='Battery Health' />}
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
          <BatteryChargeSimGraph title='State of Charge' subtitle='Your battery level over time' />
        </View>
        </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'top',
          alignItems: 'center',
          backgroundColor: colours.darkestBlue,
          height: height + 300
      },
      text: {
          color: '#FFF1CF',
          fontSize: 24,
          fontWeight: Platform.OS === 'android' ? '100' : '200',
      },
      widgetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        gap: 10
        
    
    
      }
  })

export default PowerScreen;