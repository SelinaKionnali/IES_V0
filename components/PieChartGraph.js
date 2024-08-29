import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  { name: 'Solar', population: 45, color: '#FFD568', legendFontColor: '#FFF1CF', legendFontSize: 15 },
  { name: 'Wind', population: 20, color: '#9AAFCF', legendFontColor: '#FFF1CF', legendFontSize: 15 },
  { name: 'Thermal', population: 15, color: '#C49ACF', legendFontColor: '#FFF1CF', legendFontSize: 15 },
];

const PieChartGraph = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundColor: 'transparent', // Remove background color
          backgroundGradientFrom: '#183564', // Dark blue background to match the app theme
          backgroundGradientTo: '#183564', // Matching gradient for consistency
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White text for visibility
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#183564', // Dark blue background to fit your app theme
    padding: 20,
    borderRadius: 20,
  },
});

export default PieChartGraph;