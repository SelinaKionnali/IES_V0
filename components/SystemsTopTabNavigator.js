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

const screenWidth = Dimensions.get('window').width;

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
            console.log("route:>>> ", route); // Check what is being passed
            navigation.navigate('SystemsStack', { screen: route });
        }
    }
    return (
            <View style={styles.container}>
                <FlatList 
                    data={systemsIconData}
                    horizontal
                    renderItem={({item}) => <TouchableOpacity onPress={() => handlePress(item.route)} ><Image source={item.image} style={styles.icon} /></TouchableOpacity>}
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
        width: screenWidth -10,
        height: 70,
        padding: 10,
        backgroundColor: '#183564',
        borderRadius: 100,
        marginVertical: 20,

      }
})

export default SystemsTopTabNavigator;