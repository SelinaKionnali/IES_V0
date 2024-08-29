import React from 'react'
import { View, Text, Image } from 'react-native'
import compostImg from '../assets/icons/compostSystemsIcon.png'
import foodImg from '../assets/icons/foodSystemsIcon.png'
import waterImg from '../assets/icons/waterSystemsIcon.png'
import greywaterImg from '../assets/icons/greywaterSystemsIcon.png'
import heatImg from '../assets/icons/heatSystemsIcon.png'
import powerImg from '../assets/icons/powerSystemsIcon.png'

const SystemsTopTabNavigator = () => {
    return (
        <View>
            <Image source={foodImg} />
            <Image source={waterImg} />
            <Image source={powerImg} />
            <Image source={heatImg} />
            <Image source={compostImg} />
            <Image source={greywaterImg} />
            </View>
    )
}

const styles = StyleSheet.create ({})

export default SystemsTopTabNavigator;