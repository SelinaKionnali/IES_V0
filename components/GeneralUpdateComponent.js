import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Lumi from '../assets/icons/Lumi (1).png'

const GeneralUpdateComponent = ({updateText}) => {
   return (
    <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
            <Image source={Lumi} style={{marginRight: 20}}/>
            <Text style={styles.text}>{updateText}</Text>
        </View>
    <View style={styles.rowTextContainer}>
    <TouchableOpacity >
            <Text style={styles.linkText}>Full update</Text>
    </TouchableOpacity>
    <TouchableOpacity >
            <Text style={styles.linkText}>Quick chat</Text>
    </TouchableOpacity>
    </View>

    </View>
   )
}

const styles = StyleSheet.create({
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        width: 360  ,
        backgroundColor: '#4C698B',
        borderRadius: 30,
        padding: 20,
    },
    rowContainer: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'flex-start'
    },
    rowTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 70,
        marginTop: 10
     },
 
    text: {
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: 200
    },
    linkText: {
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: 140,
        textDecorationLine: 'underline',
    }

})

export default GeneralUpdateComponent;