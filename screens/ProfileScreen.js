import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator'
import WidgetContainer from '../components/WidgetContainer'

const {width, height} = Dimensions.get('screen')



const ProfileScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
          <SystemsTopTabNavigator />
        </View>
        </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            height: height,
            width: width,
            justifyContent: 'top',
            alignItems: 'center',
            borderWidth: 3,
            backgroundColor: '#0E1E38'
            
        }, 
    text: {
        color: 'red'
    }
})

export default ProfileScreen;