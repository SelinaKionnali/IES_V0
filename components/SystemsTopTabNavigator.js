import React from 'react'
import { TouchableOpacity,
    Image,
    View,
    StyleSheet,
    FlatList, Dimensions } from 'react-native'
import compostImg from '../assets/icons/compostSystemsIcon.png'
import foodImg from '../assets/icons/foodSystemsIcon.png'
import waterImg from '../assets/icons/waterSystemsIcon.png'
import greywaterImg from '../assets/icons/greywaterSystemsIcon.png'
import heatImg from '../assets/icons/heatSystemsIcon.png'
import powerImg from '../assets/icons/powerSystemsIcon.png'

const screenWidth = Dimensions.get('window').width;

const systemsIconData = [
    {
        id: 1,
        image: foodImg
    },
    {
        id: 2,
        image: waterImg
    }, {
        id: 3,
        image: powerImg
    }, {
        id: 4,
        image: heatImg
    }, {
        id: 5,
        image: compostImg
    }, {
        id: 6,
        image: greywaterImg
    }
]

const SystemsTopTabNavigator = () => {
    return (
            <View style={styles.container}>
                <FlatList 
                    data={systemsIconData}
                    horizontal
                    renderItem={({item}) => <TouchableOpacity><Image source={item.image} style={styles.icon} /></TouchableOpacity>}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                
                />
            </View>
    )
}

const styles = StyleSheet.create ({
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
      },
      container: {
        width: screenWidth,
        height: 120,
        padding: 10,
        paddingTop: 20
      }
})

export default SystemsTopTabNavigator;