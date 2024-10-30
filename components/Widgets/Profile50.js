import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import dnd from '../../assets/icons/dnd.png'

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const Profile50 = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image style={styles.icon} source={icon} />
                <View style={styles.columnContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <View style={styles.flex}>
                <Image style={styles.image} source={dnd} />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: isLargeTablet ? wp(70) : isSmallTablet ? wp(80) : wp(90),
        height: isLargeTablet ? hp(4) : isSmallTablet ? hp(5) : hp(6),
        backgroundColor: '#21436b',
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    columnContainer: {
        marginRight: 16
    },
    title: {
        color: '#FFF1CF',
        fontFamily: 'Text-Regular',
        fontSize: 16
        
    },
    subtitle: {
        color: '#FFF1CF',
        fontFamily: 'Text-Regular',
        fontSize: 12
    },
    icon: {
        width: 38,
        height: 38,
        marginRight: 16
    },
    image: {
        width: 10,
        height: 20,
    },
    flex: {
        flex: 1,
        alignItems: 'flex-end'
    }
})

export default Profile50;