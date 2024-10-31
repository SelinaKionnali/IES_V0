import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image, Modal, View,  StyleSheet, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native'
import sound from '../assets/icons/voice.png'
import search from '../assets/icons/search.png'
import { colours } from '../Utilities/colours';

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const Searchbar = ({label, placeholder}) => {
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSearch = () => {
        setModalVisible(true);
      };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput  
                placeholder={placeholder} 
                placeholderTextColor={colours.dawnBlue} 
                style={styles.input} 
                />
                <TouchableOpacity>
                    <Image source={sound} style={styles.image}/>
                </TouchableOpacity>
            </View>
                <TouchableOpacity onPress={handleSearch}>
                    <Image source={search} style={styles.image2} />
                </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>No results found!</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp(5),
        marginBottom: wp(2)

    },
    inputContainer: {
        position: 'relative',
        width: isLargeTablet ? wp(50) : isSmallTablet ? wp(55) : wp(70),
        height: hp(5),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: colours.Blue,
        flexDirection: 'row',

    },
    input: {
        fontFamily: 'Text-Regular',
        fontSize: hp(2),
        flex: 1,
        height: hp(100),
        color: colours.dawnBlue
    },
    image: {
        width: wp(8),
        resizeMode: 'contain'
    },
    image2: {
        width: wp(8),
        resizeMode: 'contain',
        marginLeft: wp(3),
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '80%',
        backgroundColor: colours.dawnBlue,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        fontFamily: 'Text-Regular',
        color: colours.darkBlue,
        marginBottom: 20,
      },
      closeButton: {
        backgroundColor: colours.orange,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'white',
        fontFamily: 'Text-Bold',
        fontSize: 16,
      },
    
})

export default Searchbar;