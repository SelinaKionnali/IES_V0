import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width / 2; // Adjust the width to fit two charts side by side

const data = {
  labels: ["Solar"], // Label for the progress ring
  data: [0.4], // 40% usage
};

const chartConfig = {
  backgroundGradientFrom: "#183564",
  backgroundGradientTo: "#183564",
  color: () => `#FFD700`, // Bright yellow for Solar
  strokeWidth: 16, // Adjust thickness of the ring
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Disable shadows
};

const SolarProgressChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Solar Usage</Text>
      <ProgressChart
        data={data}
        width={screenWidth - 20}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF1CF',
    fontFamily: 'Text-Light',
  },
});

export default SolarProgressChart;