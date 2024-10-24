import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import SystemsTopTabNavigator from '../../components/SystemsTopTabNavigator.js'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'

const {width, height} = Dimensions.get('screen')

const CompostSystemsScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
            <GeneralUpdateComponent updateText='You don’t have to worry about your composter for 5 weeks.' />
            <WidgetContainer />
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

export default CompostSystemsScreen;