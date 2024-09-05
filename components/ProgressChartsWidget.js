// This widget component is a container which holds two charts.
// The charts in this component have been sized in their own component files to be half the size of the screen width.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import SolarProgressChart from './SolarProgressChart';
import ThermalProgressChart from './ThermalProgressChart';

const ProgressChartsWidget = () => {
  return (
    <View style={styles.container}>
      <SolarProgressChart />
      <ThermalProgressChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-around', // Space them evenly
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#21436B',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default ProgressChartsWidget;
