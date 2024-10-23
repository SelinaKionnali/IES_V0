import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import dnd from '../assets/icons/dnd.png'

const {width, height} = Dimensions.get('screen')

const WidgetContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.text}>Placeholder</Text>
                <Image style={styles.image} source={dnd} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: 200,
        backgroundColor: '#21436b',
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'flex-end',
        padding: 20,
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#FFB45C',
        fontFamily: 'Text-Regular'
        
    },
    image: {
        width: 10,
        height: 20
    }
})

export default WidgetContainer;