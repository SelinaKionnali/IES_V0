// Line Chart
// This chart will show how much solar energy was generated (wattIn) and used (wattOut) throughout the day. 
// It gives users a sense of their solar system’s performance at different times of the day.

import React from 'react'
import {  View, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { solarData } from '../data/solarData'
import dayjs from 'dayjs'
import {RelativeTime} from 'dayjs/plugin/relativeTime'

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false // optional
  };

const SolarEnergyUsage = () => {
    return (
        <View>
            <LineChart
                data={{
                    labels: solarData.daily.map((data) => 
                        moment(data.timestamp).format('h:mm A') 
                        ),
                    datasets: [
                         { data: solarData.daily.map((data) => data.wattIn), label: 'Watt In' },
                        { data: solarData.daily.map((data) => data.wattOut), label: 'Watt Out' }
                    ]
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
});

export default SolarEnergyUsage;
