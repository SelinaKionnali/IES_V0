import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import profileHeader from '../assets/BGs/profileHeader.png'
import Profile50 from '../components/Widgets/Profile50'
import LF from '../assets/icons/lightFormIcon.png'
import Searchbar from '../components/Searchbar'
import wifi from '../assets/icons/wifi.png'
import device from '../assets/icons/device.png'
import data from '../assets/icons/dataPermissions.png'
import UI from '../assets/icons/UI.png'
import sound from '../assets/icons/sound.png'
import { colours } from '../Utilities/colours'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;



const SettingsScreen = () => {
    return (
    <ScrollView style={styles.scroll}>
        <View style={styles.container}>
            <View style={styles.profileBG}>
                <Image style={styles.image} source={profileHeader} />
            </View>
            <Searchbar placeholder='What are you looking for?' />
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

            <TouchableOpacity>

            <Profile50
                title='Data Permissions'
                subtitle='Permissions, default apps'
                icon={data}
            />
            </TouchableOpacity>

            <TouchableOpacity>

            <Profile50
                title='User Interface/Accessibility'
                subtitle='Wallpaper, font size, theme'
                icon={UI}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Profile50
                title='Sound'
                subtitle='Volume, vibration, Do Not Disturb'
                icon={sound}
            />
            </TouchableOpacity>   
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: colours.darkestBlue
    },
    container: {
        flex: 1,
        height: height,
        width: wp(100),
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: colours.darkestBlue,
        gap: isLargeTablet ? hp(1.3) : isSmallTablet ? hp(1) : hp(0.5),
    }, 
    profileBG: {
        width: wp(100),
        resizeMode: 'contain',
        height: isLargeTablet ? hp(40) : isSmallTablet ? hp(35) : hp(30),
        paddingBottom: 16,
    },
    image: {
        width: width,
        height: isLargeTablet ? hp(50) : isSmallTablet ? hp(45) : hp(30),
        top: isLargeTablet ? -120 : isSmallTablet ? -120 : 0
    }
})

export default SettingsScreen;