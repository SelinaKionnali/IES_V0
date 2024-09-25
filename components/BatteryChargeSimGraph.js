import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import BaseThermalLoad from '../data/BaseThermalLoad.json'


const BatteryChargeSimGraph = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>State of Charge</Text>
                <Text style={styles.text}>Your battery level over time</Text>
            </View>
            <View style={styles.lineGraphContainer}>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#21436B',
        shadowColor: 'rgba(0, 0, 0, 0.8)', 
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.7, 
        shadowRadius: 5,
    },
    textContainer: {
        borderWidth:2,
    },
    text: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        color: '#fff1cf'
    },
    lineGraphContainer: {
        borderWidth: 2
    }
})

export default BatteryChargeSimGraph;