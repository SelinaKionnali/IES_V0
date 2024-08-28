import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import ProgressGraph from '../components/ProgressGraph.js'
import PieChartGraph from '../components/PieChartGraph.js'

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <GeneralUpdateComponent />
      <ProgressGraph />
      <PieChartGraph />
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