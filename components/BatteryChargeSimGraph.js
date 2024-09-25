import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import BaseThermalLoad from '../data/BaseThermalLoad.json'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'



dayjs.extend(relativeTime); // Extend Day.js with the plugin

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    fillShadowGradient: '#C49ACF',
    fillShadowGradientOpacity: 1,
  };


const BatteryChargeSimGraph = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>State of Charge</Text>
                <Text style={styles.text}>Your battery level over time</Text>
            </View>
            <View style={styles.lineGraphContainer}>
            <LineChart
                data={{
                    labels: solarData.daily.map((data) => {
                        const date = dayjs(data.timestamp)
                        return date.format('hh.mm A'); // Simply show day of the week (Mon, Tue, Wed)
                 } ),
                 datasets: [
                    {
                      data: solarData.daily.map((data) => data.wattIn),
                      color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`, 
                      label: 'Watt In'
                    },
                    {
                      data: solarData.daily.map((data) => data.wattOut),
                      color: (opacity = 1) => `rgba(196, 154, 207, ${opacity})`,
                      label: 'Watt Out'
                    }
                  ],
                  legend: ['Watt In', 'Watt Out'] // Labels for the lines in the chart
                    }}
                    width={Dimensions.get('window').width - 40}
                    height={220}
                    yAxisSuffix="W"
                    chartConfig={chartConfig}
                    
            />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#21436B',
        shadowColor: 'rgba(0, 0, 0, 0.8)', 
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.7, 
        shadowRadius: 5,
    },
    textContainer: {
        borderWidth:2,
    },
    text: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        color: '#fff1cf'
    },
    lineGraphContainer: {
        borderWidth: 2
    }
})

export default BatteryChargeSimGraph;