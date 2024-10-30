import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Text, ImageBackground, Dimensions, View, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import logo from '../assets/yellowLogo.png'
import BGimg from '../assets/loadingScreen.jpg'
import { colours } from '../Utilities/colours';

const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;
const LoadingScreen = ({setIsLoggedIn}) => {
    const handleLogin = () => {
        setIsLoggedIn(true);
      };

  return (
        <ImageBackground
          source={BGimg}
          style={[
            styles.background,
            isLargeTablet && styles.largeTabletBackground,
            isSmallTablet && styles.smallTabletBackground,
            isPhone && styles.phoneBackground,
          ]}
          resizeMode='cover'
        >
          <View style={[
            styles.overlay,
            isSmallTablet && styles.overlaySmlTab
          ]}>
              <Image source={logo} style={styles.image} />
                <View style={[
                  styles.bottomContainer,
                  isSmallTablet && styles.smallTabletBottomContainer
                ]}>
                  <View style={styles.textContainer}>
                      <Text style={styles.title}>Welcome home!</Text>
                      <Text style={styles.subtitle}>Day 137 off grid.</Text>
                  </View>

                  <TouchableOpacity style={styles.button} onPress={handleLogin}>
                      <Text style={styles.btnText}>Log In</Text>
                  </TouchableOpacity>
                </View>
          </View>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: wp(100),
    height: isLargeTablet ? hp(150) : hp(100),
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: isLargeTablet ? -650 : 0,
  },
  largeTabletBackground: {
    height: hp(150), 
  },
  smallTabletBackground: {
    height: hp(140), 
    top: -450
  },
  phoneBackground: {
    height: hp(100), 
  },
  overlay: {
    flex: 1,
    justifyContent: isLargeTablet ? 'flex-end' : 'space-between',
    alignItems: 'center',
    paddingTop: isLargeTablet ? 150 : 100, 
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  overlaySmlTab: {
    justifyContent: 'flex-end'
  },
    image: {
      width: wp(70),
      height: hp(30),
  },

  bottomContainer: {
    height: isLargeTablet ? hp(70) : hp(60),
    justifyContent: 'space-between'
  },
  smallTabletBottomContainer: {
    height: hp(65)
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: width,
    padding: wp(8),
    gap: 8,

  },
  title: {
    fontSize: hp(3),
    fontFamily: 'asl-Bold',
    color: '#fff1cf',
    
  },
  subtitle: {
    fontSize: hp(1.5),
    color: colours.whiteGlow,
  },
  button: {
    color: colours.whiteGlow,
    backgroundColor: colours.darkestBlue,
    width: isLargeTablet ? wp(50) : wp(70),
    height: hp(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    shadowColor: 'rgba(255, 241, 207, 0.8)', 
    shadowOffset: 5, 
    shadowOpacity: 0.7, 
    shadowRadius: 5,
    elevation: 4,
    marginBottom: hp(8)

  },
  btnText: {
    fontFamily: 'asl-Bold',
    color: colours.sweetYellow,
    alignSelf: 'center',
    fontSize: hp(2)
  },
});

export default LoadingScreen;