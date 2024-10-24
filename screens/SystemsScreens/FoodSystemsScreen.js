import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'
import BatteryChargeChart from '../../components/BatteryChargeChart.js'
import StatusWidget from '../../components/StatusWidget.js'
import { solarData } from '../../data/solarData.js'

const {width, height} = Dimensions.get('screen')

const FoodSystemsScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
          <GeneralUpdateComponent updateText='Your garden and fish are both in great health!'/>
          <BatteryChargeChart number='12' label='Days until next harvest' />
          <View style={styles.rowContainer}>
          <StatusWidget 
          title="Irrigation" 
          status={solarData.systemStatus.status} 
          message='No leaks' 
          />
          <StatusWidget 
          title="Irrigation" 
          status={solarData.systemStatus.status} 
          message='No leaks' 
          />

          </View>
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
            backgroundColor: '#0E1E38'
            
        }, 
    text: {
        color: 'red'
    },
    rowContainer: {
        flexDirection: 'row',
        gap: 10
    }
})

export default FoodSystemsScreen;