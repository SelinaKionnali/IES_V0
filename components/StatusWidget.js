import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusWidget = ({ title, status, message }) => {
  // Determine color based on status
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
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
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
    backgroundColor: '#1b3fa0',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: 180,
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
  }
});

export default StatusWidget;