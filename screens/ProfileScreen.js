import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import profileHeader from '../assets/BGs/profileHeader.png'
import Profile50 from '../components/Widgets/Profile50'
import LF from '../assets/icons/lightFormIcon.png'
import wifi from '../assets/icons/wifi.png'
import device from '../assets/icons/device.png'
import Searchbar from '../components/Searchbar'
import loginImg from '../assets/BGs/loginImg.png'


const {width, height} = Dimensions.get('screen')



const ProfileScreen = () => {
   
    return (
    <ScrollView >
        <View style={styles.container}>
            <View style={styles.profileBG}>
                <Image style={styles.image} source={profileHeader} />
            </View>
            <Searchbar placeholder='What are you looking for?' />
            <Image source={loginImg} style={styles.loginImage} />
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
        height: height + 250,
        width: width,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#0E1E38',
    }, 
    profileBG: {
        width: width,
        paddingBottom: 16,
    },
    image: {
        width: width,
        height: 240
    },
    loginImage: {
        width: width - 35,
        height: 530,
    }
})

export default ProfileScreen;