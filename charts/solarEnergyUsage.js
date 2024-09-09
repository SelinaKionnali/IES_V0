// Line Chart
// This chart will show how much solar energy was generated (wattIn) and used (wattOut) throughout the day. 
// It gives users a sense of their solar system’s performance at different times of the day.

import React from 'react'
import {  View, StyleSheet, Dimensions, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { solarData } from '../data/solarData'
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

const SolarEnergyUsage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Daily Solar Energy Usage (Watts)</Text>
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
    )
}

styles = StyleSheet.create ({
    text: {
        color: '#FFF1CF',
        fontFamily: 'asl-Bold',
        fontSize: 16
    },
    container: {
      height: 300,
      padding: 20,
  }

});

export default SolarEnergyUsage;
