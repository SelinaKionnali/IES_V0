import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,
    Image,
    View,
    StyleSheet,
    FlatList, Dimensions } from 'react-native'
import compostImg from '../assets/icons/compost.png'
import foodImg from '../assets/icons/foodApple.png'
import waterImg from '../assets/icons/water.png'
import greywaterImg from '../assets/icons/greywater.png'
import heatImg from '../assets/icons/thermal.png'
import powerImg from '../assets/icons/lightbulb1.png'
import {colours} from '../Utilities/colours.js'

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

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
        width: wp(5),
        height: hp(5),
        justifyContent: 'space-around',

      },
      container: {
        width: width * 0.9,
        height: hp(8),
        backgroundColor: colours.Blue,
        borderRadius: 100,
        marginVertical: 20,
      },
      iconContainers: {
        width: wp(8),
        alignItems: 'center'

      },
      flatlistContent: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 1
      }
})

export default SystemsTopTabNavigator;