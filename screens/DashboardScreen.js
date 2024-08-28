import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import RadialGraph from '../components/RadialGraph.js'

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <GeneralUpdateComponent />
      <RadialGraph />
      <Text style={styles.text}>Dashboard Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#183564',
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})

export default DashboardScreen;