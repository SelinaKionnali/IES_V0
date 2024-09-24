import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, View, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');

const LoadingScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/loadingScreen.jpg')}
      style={styles.background}
      resizeMode='cover' // Ensure it stretches while maintaining aspect ratio
    >
    <View style={styles.textContainer}>
      <Text style={styles.title}>Welcome home!</Text>
      <Text style={styles.subtitle}>Day 137 off grid.</Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width, 
    height: height + 150, 
    position: 'absolute', 
    top: -180, 
    left: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: width,
    borderWidth: 5,
    borderColor: 'red',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'asl-Bold',
    color: '#fff1cf',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF1cf',
    marginBottom: 40, // Give it some space between the title and subtitle
  },
});

export default LoadingScreen;