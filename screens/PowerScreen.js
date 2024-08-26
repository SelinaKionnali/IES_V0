import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PowerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Power Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#183564',
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})

export default PowerScreen;