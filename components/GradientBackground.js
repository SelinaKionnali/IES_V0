// This is a reusable gradient background component that can be imported and applied wherever needed
// Will import to the app.js file to be used in this app universally

import React from 'react';
import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#0F2241', '#304D76', '#324F77', '#4C698B']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default GradientBackground;