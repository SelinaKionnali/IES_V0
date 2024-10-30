// This chart component renders some dummy data found in the page into a progress bar. This is imported in the widget component.


import React from 'react';
import { View, Dimensions, Text, StyleSheet, Button, Platform } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

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

      <ProgressChart
        data={data}
        width={isLargeTablet ? wp(90) : isSmallTablet ? wp(60) : wp(90)}
        height={isLargeTablet ? hp(45) : isSmallTablet ? hp(40) : hp(40)}
        strokeWidth={8}
        radius={isLargeTablet ? wp(15) : isSmallTablet ? wp(15) : wp(20)}
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
        width: width,
        height: width,
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
        width: isLargeTablet ? wp(15) : isSmallTablet ? wp(20) : wp(25),
        textAlign: 'center'
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