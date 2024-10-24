import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'

const {width, height} = Dimensions.get('screen')

const GreywaterSystemsScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
            <GeneralUpdateComponent updateText='Your grey water tank is filling.' />
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

export default GreywaterSystemsScreen;