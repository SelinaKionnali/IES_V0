import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';
import { thermalData } from '../data/thermalData';
import dayjs from 'dayjs'

const screenWidth = Dimensions.get('window').width;

const DailyTempChart = () => {
  const data = {
    labels: thermalData.daily.map(item => item.timestamp.substring(11, 16)), // Show only the hour part of the timestamp
    datasets: [
      {
        data: thermalData.daily.map(item => item.coldTempIn),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue for cold temperature
        strokeWidth: 2,
        label: 'Cold Temp In'
      },
      {
        data: thermalData.daily.map(item => item.hotTempOut),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red for hot temperature
        strokeWidth: 2,
        label: 'Hot Temp Out'
      }
    ],
    legend: ['Cold Temp In', 'Hot Temp Out']
  };

  return (
    <ScrollView horizontal={true}>
      <LineChart
        data={data}
        width={screenWidth} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
          }
        }}
        bezier
      />
    </ScrollView>
  );
};

export default DailyTempChart;