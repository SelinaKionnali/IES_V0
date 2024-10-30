import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, View, TouchableOpacity, Image, Platform } from 'react-native';
import logo from '../assets/yellowLogo.png'

const { width, height } = Dimensions.get('screen');

const LoadingScreen = ({setIsLoggedIn}) => {
    const handleLogin = () => {
        setIsLoggedIn(true);
      };

  return (
    <ImageBackground
      source={require('../assets/loadingScreen.jpg')}
      style={styles.background}
      resizeMode='cover' // Ensure it stretches while maintaining aspect ratio
    >
        <View style={styles.topContainer}>
            <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
                 <Text style={styles.title}>Welcome home!</Text>
                <Text style={styles.subtitle}>Day 137 off grid.</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width, 
    height: height + 110, 
    position: 'absolute', 
    top: -100,
    left: 0, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  topContainer: {
    height: height / 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomContainer: {
    height: height / 2,
    justifyContent: 'space-around',
    gap: 120,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: width,
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
  },
  button: {
    color: '#fff1cf',
    backgroundColor: '#0E1E38',
    width: 280,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    shadowColor: 'rgba(255, 241, 207, 0.8)', 
    shadowOffset: 5, 
    shadowOpacity: 0.7, 
    shadowRadius: 5,

  },
  btnText: {
    fontFamily: 'asl-Bold',
    color: '#FFB45C',
    alignSelf: 'center',
    fontSize: 16
  },
  image: {
    height: 99,
    width: 350,
  }
});

export default LoadingScreen;