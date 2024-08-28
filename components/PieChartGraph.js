import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  { name: '18-24', population: 31.47, color: '#8884d8', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: '25-29', population: 26.69, color: '#83a6ed', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: '30-34', population: 15.69, color: '#8dd1e1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: '35-39', population: 8.22, color: '#82ca9d', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: '40-49', population: 8.63, color: '#a4de6c', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: '50+', population: 2.63, color: '#d0ed57', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Unknown', population: 6.67, color: '#ffc658', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];

const PieChartGraph = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default PieChartGraph;