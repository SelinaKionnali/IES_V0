// This screen contains a navigational bar at the top, an update component, a widget and a chart.


import React from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../components/ProgressChartsWidget'
import BatteryChargeChart from '../components/BatteryChargeChart'
import GradientBackground from '../components/GradientBackground.js'
import ThermalProgressChart from '../components/ThermalProgressChart.js'
import DailyTempChart from '../charts/DailyTempLineChart.js'
import WeeklyVolumeChart from '../charts/WeeklyVolumeLevelBarChart.js'
import WaterProgressCircle from '../charts/WaterProgressCircle.js'
import ReanimatedComponent from '../ReanimatedFolder/Reanimated.js'
import AnimatedPropsExample from '../ReanimatedFolder/AnimatedProps.js'
import TranslateXexample from '../ReanimatedFolder/TranslateXExample.js'
import Shake from '../ReanimatedFolder/Shake.js'
import Gestures from '../ReanimatedFolder/Gestures.js'
import PanGesture from '../ReanimatedFolder/PanGesture.js'
import { solarData } from '../data/solarData.js';
import ProgressCircleFromData from '../ReanimatedFolder/ProgressCircleFromData.js';


const ThermalScreen = () => {

  const navigation = useNavigation();

  const weeklySolarData = solarData.weekly[0];
  

  return (
    <ScrollView >
      <GradientBackground>
      <View style={styles.container}>
        <ReanimatedComponent />
        <TranslateXexample />
        <AnimatedPropsExample />
        <Shake />
        <Gestures />
        <PanGesture />
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent updateText="You are recovering lots of heat from cooking today." />
        <Button
        title="Go to Circular Component"
        onPress={() => navigation.navigate('Circular Component')}
        />
        <ProgressChartsWidget
          thermalChart={<ThermalProgressChart />}
        />
        <ProgressCircleFromData wattIn={weeklySolarData.wattIn} wattOut={weeklySolarData.wattOut}/>
        <DailyTempChart />
        <WeeklyVolumeChart />
        <BatteryChargeChart />
      </View>
      </GradientBackground>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
    },
})
export default ThermalScreen;