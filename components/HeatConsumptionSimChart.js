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
    color: (opacity = 1) => `rgba(255, 180, 92, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    fillShadowGradient: '#ff9700',
    fillShadowGradientOpacity: 1,
};


const HeatConsumptionSimChart = ({title, subtitle}) => {
    const [chartData, setChartData] = useState(null);
    const [chartTimeframe, setChartTimeframe] = useState('6 hours');
    const [activeButton, setActiveButton] = useState('6 hours');

    const handleSix = () => {
        const hours = BaseThermalLoad.map((data) => `${data.hour}`);
        if (hours.includes("1") || hours.includes("2") || hours.includes("3") || hours.includes("4") || hours.includes("5") || hours.includes("6")) {
            setChartTimeframe('6 hours');
            setActiveButton('6 hours');
        }
    }

    const handleTwelve = () => {
        const hours = BaseThermalLoad.map((data) => `${data.hour}`);
        if (hours.includes("7") || hours.includes("8") || hours.includes("9") || hours.includes("10") || hours.includes("11") || hours.includes("12")) {
            setChartTimeframe('6-12 hours');
            setActiveButton('6-12 hours');
        }
    }

    const handleEighteen = () => {
        const hours = BaseThermalLoad.map((data) => `${data.hour}`);
        if (hours.includes("13") || hours.includes("14") || hours.includes("15") || hours.includes("16") || hours.includes("17") || hours.includes("18")) {
            setChartTimeframe('12-18 hours');
            setActiveButton('12-18 hours');
        }
    }

    const handleTwentyFour = () => {
        const hours = BaseThermalLoad.map((data) => `${data.hour}`);
        if (hours.includes("19") || hours.includes("20") || hours.includes("21") || hours.includes("22") || hours.includes("23") || hours.includes("24")) {
            setChartTimeframe('18-24 hours');
            setActiveButton('18-24 hours');
        }
    }



    useEffect(() => {
        try {
          let filteredData;
      
          // Filter the data based on chartTimeframe
          switch (chartTimeframe) {
            case '6 hours':
              filteredData = BaseThermalLoad.filter((data) => data.hour <= 6);
              break;
            case '6-12 hours':
              filteredData = BaseThermalLoad.filter((data) => data.hour > 6 && data.hour <= 12);
              break;
            case '12-18 hours':
              filteredData = BaseThermalLoad.filter((data) => data.hour > 12 && data.hour <= 18);
              break;
            case '18-24 hours':
              filteredData = BaseThermalLoad.filter((data) => data.hour > 18 && data.hour <= 24);
              break;
            default:
              filteredData = BaseThermalLoad; // Default to all data if no match
              break;
          }
      
          const hours = filteredData.map((data) => `${data.hour}`);
          const percentages = filteredData.map((data) => parseFloat(data.percentage) * 100);
          const consumptionData = filteredData.map(data => parseFloat(data.consumption));
        const heatRecoveryData = filteredData.map(data => parseFloat(data["heat recovery"]));
        const bodyHeatData = filteredData.map(data => parseFloat(data["body heat W"]));
        const totalRecoveryData = filteredData.map(data => parseFloat(data["total recovery"]));
      
          // Set chart data
          setChartData({
            labels: hours,
            datasets: [
              {
                data: consumptionData,
                strokeWidth: 2, // Optional: line width
              }
            ]
          });
      
        } catch (error) {
          console.error('Error inside useEffect:', error);
        }
      }, [chartTimeframe]); // Add chartTimeframe as a dependency
    
      // Render a placeholder or loading text if chartData is still null
      if (!chartData) {
        return <Text>Loading Chart...</Text>;
      }

        return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.lineGraphContainer}>
                <LineChart
                    data={chartData}
                    width={screenWidth - 60} 
                    height={220}
                    chartConfig={chartConfig}
                    bezier 
                    yAxisSuffix="%"
                    yAxisInterval={1} // Adjust if you want finer control over intervals
                    fromZero={true} // This ensures the chart starts from 0
                    yAxisMax={800} // Set the max value across both datasets
                    segments={6}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={activeButton === '6 hours' ? styles.btnFocus : styles.btn} onPress={handleSix}>
                    <Text style={activeButton === '6 hours' ? styles.btnTextFocus : styles.btnText}>&lt; 6 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === '6-12 hours' ? styles.btnFocus : styles.btn} onPress={handleTwelve}>
                    <Text style={activeButton === '6-12 hours' ? styles.btnTextFocus : styles.btnText}>6 - 12 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === '12-18 hours' ? styles.btnFocus : styles.btn} onPress={handleEighteen}>
                    <Text style={activeButton === '12-18 hours' ? styles.btnTextFocus : styles.btnText}>12 - 18 hrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton === '18-24 hours' ? styles.btnFocus : styles.btn} onPress={handleTwentyFour}>
                    <Text style={activeButton === '18-24 hours' ? styles.btnTextFocus : styles.btnText}>18 - 24 hrs</Text>
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
        marginLeft: 16
    },
    subtitle: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        color: '#9AAFCF',
        marginLeft: 16

    },
    lineGraphContainer: {
        borderRadius: 10,
        padding: 10,
        margin: 'auto'
    },
    btnContainer: {
        backgroundColor: '#21436B',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 8,
        gap: 8,
        margin: 'auto'
    },
    btn: {
        padding: 8

    },
    btnText: {
        color: '#9AAFCF',
        fontFamily: 'Text-Bold',
        fontSize: 14,
    },
    btnTextFocus: {
        color: '#21436B',
        fontFamily: 'Text-Bold',
        fontSize: 14,

    },
    btnFocus: {
        backgroundColor: '#FFB45C',
        borderRadius: 10,
        padding: 8
    }
});

export default HeatConsumptionSimChart;