import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ["Thermal", "Solar"], // Labels for the progress rings
  data: [0.7, 0.4] // Example data, normalized between 0 and 1
};

const chartConfig = {
  backgroundGradientFrom: "#183564",
  backgroundGradientTo: "#183564",
  
  color: (opacity = 5) => `rgba(255, 165, 0, ${opacity})`, // Adjust the color as needed
  strokeWidth: 8, // Adjust thickness of the rings
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Disable shadows
};

const ProgressGraph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Energy Usage</Text>
      <ProgressChart
        data={data}
        width={screenWidth - 40}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
        
      />
      <View style={styles.labelsContainer}>
        <View style={styles.labelWrapper}>
          <View style={[styles.circle, { backgroundColor: '#21436B' }]} />
          <Text style={styles.labelText}>Thermal - 70%</Text>
        </View>
        <View style={styles.labelWrapper}>
          <View style={[styles.circle, { backgroundColor: '#FFB45C' }]} />
          <Text style={styles.labelText}>Solar - 40%</Text>
        </View>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF1CF',
    fontFamily: 'Text-Light'
  },
  labelsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  labelText: {
    fontSize: 16,
    color: '#FFF1CF',
    fontFamily: 'Text-Light'
  },
});

export default ProgressGraph;