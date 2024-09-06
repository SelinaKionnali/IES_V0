import React from 'react'
import {Text, StyleSheet, View, Dimensions} from 'react-native'
import { BarChart } from 'react-native-chart-kit';
import { solarData } from '../data/solarData';

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false // optional
  };


const EnergyUsagePiechart = () => {
    return (
        <View>
        <Text style={styles.text}>Energy Usage Breakdown</Text>
        <BarChart
            data={{
            labels: ['2024-08-28', '2024-08-29', '2024-09-02'],
            datasets: [
                { data: solarData.weekly.map((data) => data.wattIn), label: 'Watt In' },
                { data: solarData.weekly.map((data) => data.wattOut), label: 'Watt Out' }
            ]
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisSuffix="W"
            chartConfig={chartConfig}
        />
        </View>
        )}

styles = StyleSheet.create({
    text: {
        color: '#FFF1CF',
        fontFamily: 'Text-Regular'
    }
})

export default EnergyUsagePiechart;