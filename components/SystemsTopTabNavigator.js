import React from 'react'
import { useNavigation } from '@react-navigation/native';
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
import {colours} from '../Utilities/colours.js'

const screenWidth = Dimensions.get('screen').width;

const systemsIconData = [
    {
        id: 1,
        image: foodImg,
        route: 'Food'
    },
    {
        id: 2,
        image: waterImg,
        route: 'Water'
    }, {
        id: 3,
        image: powerImg,
        route: 'Power'
    }, {
        id: 4,
        image: heatImg,
        route: 'Heat'
    }, {
        id: 5,
        image: compostImg,
        route: 'Compost'
    }, {
        id: 6,
        image: greywaterImg,
        route: 'Greywater'
    }
]

const SystemsTopTabNavigator = () => {
    const navigation = useNavigation();

    const handlePress = (route) => {
        if (route) {
            navigation.navigate('SystemsStack', { screen: route });
        }
    }
    return (
            <View style={styles.container}>
                <FlatList 
                    data={systemsIconData}
                    horizontal
                    renderItem={({item}) => (
                    <View style={styles.iconContainers}>
                        <TouchableOpacity onPress={() => handlePress(item.route)} >
                            <Image source={item.image} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    )}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View>
    )
}

const styles = StyleSheet.create ({
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        justifyContent: 'space-around'

      },
      container: {
        width: screenWidth * 0.9,
        height: 70,
        padding: 10,
        backgroundColor: colours.Blue,
        borderRadius: 100,
        marginVertical: 20,
      },
      iconContainers: {
        width: 50,
        height: 50
      },
      flatlistContent: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 1
      }
})

export default SystemsTopTabNavigator;