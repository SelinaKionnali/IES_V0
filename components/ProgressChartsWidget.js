// This widget component is a container which holds two charts.
// The charts in this component have been sized in their own component files to be half the size of the screen width.

import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const ProgressChartsWidget = ({ solarChart, thermalChart, charts = [] }) => {
  return (
    <View style={styles.container}>
      {/* Render Solar Chart if provided */}
      {solarChart && (
        <View style={styles.chartContainer}>
          {solarChart}
        </View>
      )}

      {/* Render Thermal Chart if provided */}
      {thermalChart && (
        <View style={styles.chartContainer}>
          {thermalChart}
        </View>
      )}

      {/* Render dynamic charts array if provided */}
      {charts.map((ChartComponent, index) => (
        <View key={index} style={styles.chartContainer}>
          {ChartComponent}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: isLargeTablet ? wp(80) : isSmallTablet ? wp(80) : wp(95),
    height: isLargeTablet ? hp(40) : isSmallTablet ? hp(40) : hp(45),
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#21436B',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    gap: isLargeTablet ? wp(5) : isSmallTablet ? wp(5) : wp(8),
    

    // Shadow for iOS
    shadowColor: '#000',  // Color of the shadow
    shadowOffset: { width: 0, height: 10 },  // X and Y offset for the shadow
    shadowOpacity: 0.25,  // Transparency of the shadow
    shadowRadius: 10,  // Blurring radius
  },
  chartContainer: {
    flex: 1,  // Allows both charts to take equal space
    minWidth: 150,  // Set a minimum width to avoid the charts shrinking too much
    maxWidth: '50%',  // Ensure each chart takes up to 50% of the container
    alignItems: 'center',  // Center the charts in their container
  },
  singleChartContainer: {
    flex: 1,
    width: '100%',  // Allow the single chart to take full width
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressChartsWidget;
