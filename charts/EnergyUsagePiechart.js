// Data to Display: wattIn vs wattOut for a particular time period (daily, weekly, or monthly).
// Shows the proportion of energy used compared to the energy generated. This chart is perfect for giving users a quick glance at how much solar energy was utilized vs. how much was excess (for storage or other purposes).


import React from 'react'
import {Text, StyleSheet, View, Dimensions} from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import { solarData } from '../data/solarData';

const screenWidth = Dimensions.get('window').width - 40;

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,
    strokeWidth: 2, 
    useShadowColorFromDataset: false, 
    
  };


const EnergyUsagePiechart = () => {
  const totalWattIn = solarData.daily.reduce((total, data) => total + data.wattIn, 0);
  const totalWattOut = solarData.daily.reduce((total, data) => total + data.wattOut, 0);
  const unusedEnergy = totalWattIn - totalWattOut; 

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Energy Usage Breakdown</Text>
        <PieChart
        data={[
          {
            name: 'Energy Used',
            population: totalWattOut,
            color: '#C49ACF',
            legendFontColor: '#C49ACF',
            legendFontSize: 10,
          },
          {
            name: 'Excess Energy',
            population: unusedEnergy,
            color: '#A4BA75',
            legendFontColor: '#A4BA75',
            legendFontSize: 10
          },
        ]}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        accessor={'population'} 
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 10]}
        absolute
      />        
      </View>
        )}

styles = StyleSheet.create({
    text: {
        color: '#FFF1CF',
        fontFamily: 'asl-Bold',
        fontSize: 16
    },
    container: {
        height: 300,
        padding: 20,
    }
})

export default EnergyUsagePiechart;