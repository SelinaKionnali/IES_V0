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
    backgroundColor: '#183564',
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default ProgressChartsWidget;
