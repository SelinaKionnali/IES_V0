// CircularComponentScreen.js
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgressBar from '../ReanimatedFolder/CircularProgressBar';
import { ScrollView } from 'react-native-gesture-handler';


export default function CircularComponentScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <CircularProgressBar    />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});