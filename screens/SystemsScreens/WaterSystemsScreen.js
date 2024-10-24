import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'
import BatteryChargeChart from '../../components/BatteryChargeChart.js'
import StatusWidget from '../../components/StatusWidget.js'
import { solarData } from '../../data/solarData.js'

const {width, height} = Dimensions.get('screen')

const WaterSystemsScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
            <GeneralUpdateComponent updateText='Your water tanks are full, but you are not currently hooked up to a water source and there is no rain in the forecast. I suggest checking your tanks in a week.' />
            <BatteryChargeChart number='12' label='Days until next harvest' />
            <View style={styles.rowContainer}>
                <StatusWidget 
                 title="Water Quality" 
                 status={solarData.systemStatus.status} 
                 message='Safe' 
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
            borderWidth: 3,
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

export default WaterSystemsScreen;