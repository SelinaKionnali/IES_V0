import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import dnd from '../assets/icons/dnd.png'

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
    width: 160,
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
    fontWeight: 'bold',
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
    alignItems: 'center'
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
    flexShrink: 1
  },
  image: {
    width: 10,
    height: 20
}
});

export default StatusWidget;