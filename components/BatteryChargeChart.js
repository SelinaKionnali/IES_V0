//This is a component showing some dummy data in a progress chart which is imported in dashboard.

import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const data = {
  labels: [], // No labels needed for this design
  data: [0.74], // Example data for 74% charge
};

const chartConfig = {
  backgroundColor: "transparent",  // Additional backgroundColor setting
  backgroundGradientFromOpacity: 0, // Transparent BG
  backgroundGradientToOpacity: 0, // Transparent BG
  color: (opacity = 1) => `rgba(255, 180, 92, ${opacity})`,
  strokeWidth: 16, // Thickness of the ring
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Disable shadows
  style: {
    borderRadius: 16,
    backgroundColor: 'transparent', // Ensure no background for style
  },
};

const BatteryChargeChart = ({ number, label}) => {
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={isLargeTablet ? wp(90) : isSmallTablet ? wp(60) : wp(90)}
        height={isLargeTablet ? hp(45) : isSmallTablet ? hp(40) : hp(40)}
        strokeWidth={12}
        radius={isLargeTablet ? 250 : isSmallTablet ? 200 : 150}
        chartConfig={chartConfig}
        hideLegend={true}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: 'transparent',  
        }}
      />
      <View style={styles.overlayContainer}>
        <Text style={styles.percentageText}>{number}</Text>
        <Text style={styles.labelText}>{label}</Text>
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
    fontSize: isLargeTablet ? hp(4) : isSmallTablet ? hp(5) : hp(5),
    color: '#FFD568', 
    fontFamily: 'Text-Regular',
    fontWeight: Platform.OS === 'android' ? '100' : '300'
  },
  labelText: {
    width: isLargeTablet ? 180 : isSmallTablet ? 160 : 100,
    fontSize: isLargeTablet ? hp(2) : isSmallTablet ? hp(2) : hp(2),
    color: '#FFF1CF',
    fontFamily: 'Text-Light',
    textAlign: 'center'
  },
});

export default BatteryChargeChart;