import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import profileHeader from '../assets/BGs/profileHeader.png'
import Profile50 from '../components/Widgets/Profile50'
import LF from '../assets/icons/lightFormIcon.png'
import Searchbar from '../components/Searchbar'
import wifi from '../assets/icons/wifi.png'
import device from '../assets/icons/device.png'
import data from '../assets/icons/dataPermissions.png'
import UI from '../assets/icons/UI.png'
import sound from '../assets/icons/sound.png'



const {width, height} = Dimensions.get('screen')



const SettingsScreen = () => {
    return (
    <ScrollView >
        <View style={styles.container}>
            <View style={styles.profileBG}>
                <Image style={styles.image} source={profileHeader} />
            </View>
            <Searchbar placeholder='What are you looking for?' />
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
            <Profile50
                title='Data Permissions'
                subtitle='Permissions, default apps'
                icon={data}
            />
            <Profile50
                title='User Interface/Accessibility'
                subtitle='Wallpaper, font size, theme'
                icon={UI}
            />
            <Profile50
                title='Sound'
                subtitle='Volume, vibration, Do Not Disturb'
                icon={sound}
            />
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'top',
        alignItems: 'center',
        borderWidth: 3,
        backgroundColor: '#0E1E38',
    }, 
    profileBG: {
        width: width,
        paddingBottom: 16,
    },
    image: {
        width: width,
        height: 240
    }
})

export default SettingsScreen;