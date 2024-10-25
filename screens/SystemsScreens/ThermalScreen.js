// This screen contains a navigational bar at the top, an update component, a widget and a chart.


import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import { Dimensions } from 'react-native';
import HeatConsumptionSimChart from '../../components/HeatConsumptionSimChart.js';
import HeatRecoverySimChart from '../../components/HeatRecoverySimChart.js';

const { height} = Dimensions.get('screen')


const ThermalScreen = () => {

  

  return (
    <ScrollView >
      <View style={styles.container}>
        <GeneralUpdateComponent updateText="You are recovering lots of heat from cooking today." />
        <HeatConsumptionSimChart title='Heat Consumption' subtitle='Energy used each hour' />
        <HeatRecoverySimChart title='Heat Recovery' subtitle='Reclaimed Heat' />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: height *2,
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#0E1E38'
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})
export default ThermalScreen;