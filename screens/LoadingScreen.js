import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const LoadingScreen = () => {

    return (
        <View>
            <Text style={styles.text}>Loading Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'FFF1CF',
        fontFamily: 'Text-Regular',
        fontSize: 30
    }
})

export default LoadingScreen;