import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import dnd from '../assets/icons/dnd.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const StatusWidget = ({ title, status, message }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return '#00FF00'; // Green
      case 'warning':
        return '#FFA500'; // Amber
      case 'critical':
        return '#FF0000'; // Red
      default:
        return '#00FF00'; // Default to Green
    }
  };

  return (
    <View style={styles.widgetContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dotsContainer}>
          <Image style={styles.image} source={dnd} />
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={[styles.statusLight, { backgroundColor: getStatusColor(status) }]} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    backgroundColor: '#21436B',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: isLargeTablet ? wp(30) : isSmallTablet ? wp(40) : wp(40),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    fontFamily: 'Text-Regular',
    fontSize: 16,
    fontWeight: Platform.OS === 'android' ? '100' : '300',
    color: '#FF8C00'
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#cccccc',
    borderRadius: 3,
    marginLeft: 3
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  statusLight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10
  },
  message: {
    fontSize: 14,
    color: '#FFFFFF',
    flexShrink: 1,
    alignItems: 'center',
  },
  image: {
    width: 10,
    height: 20
}
});

export default StatusWidget;