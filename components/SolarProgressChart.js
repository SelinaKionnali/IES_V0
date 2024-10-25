// This chart component renders some dummy data found in the page into a progress bar. This is imported in the widget component.
// if i want the chart to show dynamically in widget, then this component stays the same and is imported to parent component (screens) to pass the props to widget.

import React from 'react';
import { View, Dimensions, Text, StyleSheet, Platform } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width / 2; // Adjust the width to fit two charts side by side

const data = {
  labels: ["Solar"], // Label for the progress ring
  data: [0.41]
};

const chartConfig = {
  backgroundGradientFromOpacity: 0, // Transparent BG
  backgroundGradientToOpacity: 0, // Transparent BG
  color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,  barPercentage: 1,
  useShadowColorFromDataset: false, // Disable shadows
};

const SolarProgressChart = ({ text, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Solar Usage</Text>
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
        <Text style={styles.percentageText}>{number}</Text>
        <Text style={styles.labelText}>{text}</Text>
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
        fontWeight: Platform.OS === "ios" ? "300" : "100",
        color: '#FFD568', 
        fontFamily: Platform.OS === "ios" ? "Text-Light" : "Helvetica"
      },
      labelText: {
        fontSize: 16,
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
      },
      header: {
    fontSize: 16,
    fontWeight: Platform.OS === "ios" ? "300" : "100",
    marginBottom: 10,
    color: '#FFF1CF',
    fontFamily: 'Text-Light',
  },
});

export default SolarProgressChart;