// This chart component renders some dummy data found in the page into a progress bar. This is imported in the widget component.


import React from 'react';
import { View, Dimensions, Text, StyleSheet, Button, Platform } from 'react-native';
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

const ThermalProgressChart = ({header, number, text}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>

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
        color: '#FFD568', 
        fontWeight: Platform.OS === 'android' ? '100' : '100',
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
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#fff1cf',
    borderWidth: 2,
    color: "black"
  }
});

export default ThermalProgressChart;