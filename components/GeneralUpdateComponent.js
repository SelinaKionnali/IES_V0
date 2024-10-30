import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Lumi from '../assets/icons/Lumi (1).png'

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const GeneralUpdateComponent = ({updateText, onUpdatePress, onChatPress}) => {
    
   return (
    <View style={[
        styles.columnContainer,
        isSmallTablet && styles.columnContainerSmTab
    ]}
    >
        <View style={styles.rowContainer}>
            <Image source={Lumi} style={{marginRight: 20}}/>
            <Text style={styles.text}>{updateText}</Text>
        </View>
    <View style={styles.rowTextContainer}>
    <TouchableOpacity
        onPress={onUpdatePress}
    >
            <Text style={styles.linkText}>Full update</Text>
    </TouchableOpacity>
    <TouchableOpacity 
        onPress={onChatPress}
    >
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
        width: isLargeTablet ? wp(50) : wp(90),
        backgroundColor: '#4C698B',
        borderRadius: 30,
        padding: 20,
        alignItems: 'center'
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
        marginTop: 10,
     },
 
    text: {
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: isLargeTablet ? wp(30) : wp(50),
        fontSize: hp(1.5)
    },
    linkText: {
        color: '#FFF1CF',
        fontFamily: 'Text-Light',
        width: isLargeTablet ? wp(15) : wp(25),
        textDecorationLine: 'underline',
        fontSize: hp(1.5)
    },
    // ***** Sml Tab ***** //
    columnContainerSmTab: {
        width: wp(55),
    }

})

export default GeneralUpdateComponent;