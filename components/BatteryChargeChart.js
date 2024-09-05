//This is a component showing some dummy data in a progress chart which is imported in dashboard.

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: [], // No labels needed for this design
  data: [0.74], // Example data for 74% charge
};

const chartConfig = {
  backgroundColor: "transparent",  // Additional backgroundColor setting
  backgroundGradientFromOpacity: 0, // Transparent BG
  backgroundGradientToOpacity: 0, // Transparent BG
  color: (opacity = 1) => `rgba(196, 154, 207, ${opacity})`,
  strokeWidth: 16, // Thickness of the ring
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Disable shadows
  style: {
    borderRadius: 16,
    backgroundColor: 'transparent', // Ensure no background for style
  },
};

const BatteryChargeChart = () => {
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={screenWidth - 20}
        height={screenWidth - 20}
        strokeWidth={12}
        radius={100}
        chartConfig={chartConfig}
        hideLegend={true}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: 'transparent',  // Ensure the chart style itself has transparency
        }}
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
});

export default BatteryChargeChart;