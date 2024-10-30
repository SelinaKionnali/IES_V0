import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'react-native'
import { View,  StyleSheet, Dimensions, TextInput } from 'react-native'
import sound from '../assets/icons/voice.png'
import search from '../assets/icons/search.png'
import { colours } from '../Utilities/colours';

const {width, height} = Dimensions.get('screen')

const Searchbar = ({label, placeholder}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput  placeholder={placeholder} placeholderTextColor={'#9AAFCF'} style={styles.input} />
                <Image source={sound} style={styles.image}/>
            </View>
            <Image source={search} style={styles.image2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputContainer: {
        position: 'relative',
        width: wp(70),
        height: hp(5),
        borderRadius: 100,
        marginTop: wp(5),
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: colours.Blue,
        flexDirection: 'row',

    },
    input: {
        fontFamily: 'Text-Regular',
        fontSize: hp(2),
        flex: 1,
        height: hp(100)
    },
    image: {
        width: wp(8),
        resizeMode: 'contain'
    },
    image2: {
        width: wp(8),
        resizeMode: 'contain',
        marginLeft: wp(3)
    }
    
})

export default Searchbar;