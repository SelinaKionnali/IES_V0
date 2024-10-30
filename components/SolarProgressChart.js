// This chart component renders some dummy data found in the page into a progress bar. This is imported in the widget component.
// if i want the chart to show dynamically in widget, then this component stays the same and is imported to parent component (screens) to pass the props to widget.

import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Dimensions, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { colours } from '../Utilities/colours';

const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

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
        fontFamily: "Text-Light" 
      },
      labelText: {
        fontSize: 16,
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: isLargeTablet ? wp(20) : isSmallTablet ? wp(20) : wp(25),
        textAlign: 'center'

      },
      header: {
        borderWidth: 2,
        fontSize: 16,
        fontWeight: Platform.OS === "ios" ? "300" : "100",
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
  },
});

export default SolarProgressChart;