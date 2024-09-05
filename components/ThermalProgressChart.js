// This chart component renders some dummy data found in the page into a progress bar. This is imported in the widget component.


import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width / 2; // Adjust the width to fit two charts side by side

const data = {
  labels: ["Thermal"], // Label for the progress ring
  data: [0.74], // 70% usage
};

const chartConfig = {
  backgroundGradientFromOpacity: 0, // Transparent BG
  backgroundGradientToOpacity: 0, // Transparent BG
  color: (opacity = 1) => `rgba(196, 154, 207, ${opacity})`,
  strokeWidth: 16, // Adjust thickness of the ring
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Disable shadows
};

const ThermalProgressChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thermal Usage</Text>
      <ProgressChart
        data={data}
        width={screenWidth - 20}
        height={220}
        strokeWidth={8}
        radius={70}
        chartConfig={chartConfig}
        hideLegend={true}
      />
            <View style={styles.overlayContainer}>
        <Text style={styles.percentageText}>74%</Text>
        <Text style={styles.labelText}>Battery Charge</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        height: screenWidth,
      },
      overlayContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      percentageText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFD568', 
        fontFamily: 'Text-Light'
      },
      labelText: {
        fontSize: 16,
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
      },
      header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF1CF',
    fontFamily: 'Text-Light',
  },
});

export default ThermalProgressChart;