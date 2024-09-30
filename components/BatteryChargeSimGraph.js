import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import BaseThermalLoad from '../data/BaseThermalLoad.json'; // Ensure the path is correct
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const screenWidth = Dimensions.get('screen').width; // Get the correct screen width

dayjs.extend(relativeTime); // Extend Day.js with the plugin

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 213, 104, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    fillShadowGradient: '#C49ACF',
    fillShadowGradientOpacity: 1,
};


const BatteryChargeSimGraph = () => {
    const [chartData, setChartData] = useState(null);


    useEffect(() => {
        try {
          // Extracting and logging inside useEffect
          const hours = BaseThermalLoad.map((data) => `Hour ${data.hour}`);
          const percentages = BaseThermalLoad.map((data) => parseFloat(data.percentage) * 100);
    
          // Set chart data
          setChartData({
            labels: hours,
            datasets: [
              {
                data: percentages,
                strokeWidth: 2, // Optional: line width
              }
            ]
          });
    
        } catch (error) {
          console.error('Error inside useEffect:', error);
        }
      }, []); // Empty dependency array to run once on mount
    
      // Render a placeholder or loading text if chartData is still null
      if (!chartData) {
        return <Text>Loading Chart...</Text>;
      }

        return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>State of Charge</Text>
                <Text style={styles.subtitle}>Your battery level over time</Text>
            </View>
            <View style={styles.lineGraphContainer}>
                <LineChart
                    data={chartData}
                    width={screenWidth - 60} 
                    height={220}
                    chartConfig={chartConfig}
                    bezier 
                    yAxisSuffix="%"
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>&lt;6 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>6 - 12 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>12 - 18 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>18 - 24 hrs</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: screenWidth - 20,
        justifyContent: 'center',
        padding: 12,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#21436B',
        shadowColor: 'rgba(0, 0, 0, 0.8)', 
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7, 
        shadowRadius: 5,
    },
    textContainer: {
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        color: '#FFB45C',
    },
    subtitle: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        color: '#9AAFCF',
    },
    lineGraphContainer: {
        borderWidth: 2,
        borderColor: '#FFB45C',
        borderRadius: 10,
        padding: 10,
        margin: 'auto'
    },
    btnContainer: {
        backgroundColor: '#21436B',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FFB45C',
        borderRadius: 10,
        padding: 8,
        gap: 8,
        margin: 'auto'
    },
    btn: {
        padding: 10,

    },
    btnText: {
        color: '#9AAFCF',
        fontFamily: 'Text-Regular'
    }
});

export default BatteryChargeSimGraph;