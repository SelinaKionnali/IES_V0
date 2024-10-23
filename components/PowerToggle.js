import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const PowerToggle = () => {
    return (
        <View style={styles.container}>
            <Text  style={styles.text}>Power Toggle component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 176,
        height: 176,
        padding: 10,
        backgroundColor: '#21436B',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.8)', 
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7, 
        shadowRadius: 5,

    },
    text: {
        fontFamily: 'Text-Regular',
        color: '#FFB45C'
    }
});

export default PowerToggle;