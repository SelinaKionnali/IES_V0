import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Lumi from '../assets/icons/Lumi (1).png'

const GeneralUpdateComponent = () => {
   return (
    <View style={styles.container}>
        <View>
            <Image source={Lumi} style={{marginRight: 20}}/>
        </View>
        <View>
            <Text style={styles.text}>Pick systems to compare and I will help explain the data.</Text>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 20,
        width: 360  ,
        height: 120,
        backgroundColor: '#4C698B',
        borderRadius: 30,
        padding: 10
    },
    text: {
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: 200
    }
})

export default GeneralUpdateComponent;