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
import ProfileInfoForm from '../components/ProfileInfoForm';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
            <ProfileInfoForm />
            <TouchableOpacity>
            <Profile50
                title='Basic Set Up'
                subtitle='Edit profile, family and optimization'
                icon={LF}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Profile50
                title='LightForm Optimization '
                subtitle='Optimize resource usage'
                icon={wifi}
            />
            </TouchableOpacity>      
            <TouchableOpacity>     
             <Profile50
                title='Connected devices'
                subtitle='Bluetooth, Cast, NFC'
                icon={device}
            />
            </TouchableOpacity>
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
    image: {
        width: wp(100),
        height: hp(40),
    },
    
    loginImage: {
        width: wp(100),
        resizeMode: 'contain',
    },

    // ***** Mobile Phone ***** //
    phoneProfileBG: {
        width: wp(100),
        height: hp(30),
    },
    phoneImage: {
        resizeMode: 'cover',
        height: hp(30),
        top: -20
    },
    phoneLoginImage: {
        resizeMode: 'cover',
        width: wp(90),
        height: hp(60)
    },

    // ***** Small Tablet  ***** //
    smallTabletLoginImage: {
        resizeMode: 'contain',
        height: hp(90)
    },
    smallTabletImage: {
        height: hp(45),
        top: -120

    },

    // ***** Large Tablet ***** //
    largeTabletLoginImage: {
        resizeMode: 'contain',
        height: hp(100)
    },
    largeTabletImage: {
        height: hp(50),
        top: -120
    }

})

export default ProfileScreen;