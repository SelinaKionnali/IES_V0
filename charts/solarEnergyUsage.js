// This chart will show how much solar energy was generated (wattIn) and used (wattOut) throughout the day. 
// It gives users a sense of their solar system’s performance at different times of the day.

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const SolarEnergyUsage = () => {
    return (
        <View>
            <Text style={styles.text}>solar usage chart</Text>
        </View>
    )
}

styles = StyleSheet.create ({
    text: {
        fontFamily: 'Text-Regular',
        color: 'red'
    }
});

export default SolarEnergyUsage;
