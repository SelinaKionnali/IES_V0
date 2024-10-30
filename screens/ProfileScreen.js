import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import profileHeader from '../assets/BGs/profileHeader.png'
import Profile50 from '../components/Widgets/Profile50'
import LF from '../assets/icons/lightFormIcon.png'
import wifi from '../assets/icons/wifi.png'
import device from '../assets/icons/device.png'
import Searchbar from '../components/Searchbar'
import loginImg from '../assets/BGs/loginImg.png'
import { colours } from '../Utilities/colours'


const {width, height} = Dimensions.get('window')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const isTablet = width >= 600;

const ProfileScreen = () => {
   
    return (
    <ScrollView >
        <View style={styles.container}>
            <View style={[
            styles.profileBG,
            isLargeTablet && styles.largeTabletProfileBG,
            isSmallTablet && styles.smallTabletProfileBG,
            isPhone && styles.phoneProfileBG,
          ]}
          >
                <Image style={[
            styles.image,
            isLargeTablet && styles.largeTabletImage,
            isSmallTablet && styles.smallTabletImage,
            isPhone && styles.phoneImage,
            ]} 
            source={profileHeader} 
            />
            </View>
         
            <Searchbar placeholder='What are you looking for?' />
            <Image source={loginImg} style={styles.loginImage} resizeMethod='auto' />
            <Profile50
                title='Basic Set Up'
                subtitle='Edit profile, family and optimization'
                icon={LF}
            />
            <Profile50
                title='LightForm Optimization '
                subtitle='Optimize resource usage'
                icon={wifi}
            />
            <Profile50
                title='Connected devices'
                subtitle='Bluetooth, Cast, NFC'
                icon={device}
            />
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        gap: 8,
        backgroundColor: colours.darkestBlue,
    }, 
    profileBG: {
        width: wp(100),
        height: hp(40),
    },
    phoneProfileBG: {
        width: wp(100),
        height: hp(20),
    },
    image: {
        width: width,
        height: hp(40),
    },
    phoneImage: {
        resizeMode: 'contain'

    },
    loginImage: {
        width: wp(100),
        height: isTablet ? hp(80) : hp(70), 
        resizeMode: 'contain',
        marginVertical: isTablet ? 10 : 5, 
    }
})

export default ProfileScreen;