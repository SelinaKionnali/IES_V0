import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, Text, StyleSheet, ScrollView } from 'react-native';
import { thermalData } from '../data/thermalData';
import dayjs from 'dayjs';

const screenWidth = Dimensions.get('window').width;

const WeeklyVolumeChart = () => {
  const data = {
    labels: thermalData.weekly.map((data) => {
        const date = dayjs(data.timestamp)
        return date.format('ddd'); // Simply show day of the week (Mon, Tue, Wed)
 } ),
    datasets: [
      {
        data: thermalData.weekly.map(item => item.volumeLevel)
      }
    ]
  };

  return (
    <ScrollView >
    <Text style={styles.text}>Weekly Volume Level</Text>

    <BarChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
            decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      verticalLabelRotation={0}
    />
    </ScrollView>

  );
};

styles = StyleSheet.create ({
    text: {
        color: '#FFF1CF',
        fontFamily: 'asl-Bold',
        fontSize: 16
    },

});

export default WeeklyVolumeChart;