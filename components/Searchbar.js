import React from 'react'
import { Image } from 'react-native'
import { View,  StyleSheet, Dimensions, TextInput } from 'react-native'
import sound from '../assets/icons/voice.png'
import search from '../assets/icons/search.png'

const {width, height} = Dimensions.get('screen')

const Searchbar = ({label, placeholder}) => {
    console.log(label)
    console.log(placeholder)
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
        width: width - 120,
        height: 42,
        borderRadius: 100,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#21436b',
        flexDirection: 'row',


    },
    input: {
        fontFamily: 'Text-Regular',
        fontSize: 16,
        height: 25,
    },
    image: {
        width: 30,
        height: 31,
    },
    image2: {
        width: 25,
        height: 24,
        marginLeft: 16
    }
    
})

export default Searchbar;