import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg';

const WaterProgressCircle = () => {
  return (
    <View style={styles.container}>
      <Text>Water Progress Circle</Text>
      <Svg style={styles.svg}>
      <Circle 
      cx="100" 
      cy="100" 
      r="80" 
      stroke="#FFF1CF" 
      strokeWidth="8" 
      fill="transparent"
       />
       <Path d="M 10 H 10" stroke="black" fill="none" />

      </Svg>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    margin: 20,

  },
});

export default WaterProgressCircle;