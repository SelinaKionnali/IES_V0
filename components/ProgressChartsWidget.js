// This widget component is a container which holds two charts.
// The charts in this component have been sized in their own component files to be half the size of the screen width.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import SolarProgressChart from './SolarProgressChart';
import ThermalProgressChart from './ThermalProgressChart';

const ProgressChartsWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
      <SolarProgressChart />
      </View>
      <View style={styles.chartContainer}> 
      <ThermalProgressChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Space them evenly
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#21436B',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,

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
});

export default ProgressChartsWidget;
