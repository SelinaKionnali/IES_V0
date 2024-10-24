import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Image} from 'react-native'
import lumi from '../assets/BGs/lumi.png'
import {colours} from '../Utilities/colours'
import roundedTile from '../assets/BGs/roundedTile.png'

const {width, height} = Dimensions.get('screen')



const LumiScreen = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
            <Image source={lumi} style={styles.bg} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: width,
        height: height,
        backgroundColor: colours.darkestBlue,
        zIndex: 0
    }, 
    bg: {
        width: width,
        height: height / 2.5,
    },
    tile: {
        width: width - 40,
        height: 500,
        zIndex: 20,
    }
})

export default LumiScreen;