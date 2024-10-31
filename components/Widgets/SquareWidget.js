import React, {useState} from 'react'
import { View, Image, StyleSheet, Dimensions, Text, Platform, Modal, TouchableOpacity } from 'react-native'
import dnd from '../../assets/icons/dnd.png'
import { colours } from '../../Utilities/colours'
import ToggleRow from '../ToggleRow'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const SquareWidget = ({ watt, icon, title }) => {
    const [isToggled, setIsToggled] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('')

    const handlePressIcon1 = () => {
        setModalVisible(true)
        setModalContent('Alarm content')
    }
    const handlePressIcon2 = () => {
        setModalVisible(true)
        setModalContent('Settings content')
    }
   
    const handleToggleChange = () => {
        setIsToggled(!isToggled)
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.wattContainer}><Text style={styles.watt}>{watt}</Text></View>
                <Image style={styles.image} source={dnd} />
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={icon} />
            </View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.rowIcons}>
                <ToggleRow 
                    onPressIcon1={handlePressIcon1} 
                    onPressIcon2={handlePressIcon2} 
                    toggleValue={isToggled} 
                    onToggleChange={handleToggleChange} 
                />
            </View>
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalContent}</Text>
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
        width: width / 2.4,
        height: width / 2.4,
        backgroundColor: colours.Blue,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        padding: 8,
        maxWidth: 200,
        maxHeight: 200,
        justifyContent: 'space-around'
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
    },
    wattContainer: {
        width: 66,
        height: 26,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.Blue,
        paddingLeft: 10, 
        
        ...Platform.select({
            'ios': {
              shadowColor: 'rgba(0, 0, 0, 0.50)', // iOS shadow color
              shadowOffset: { width: 2, height: 2 }, // iOS shadow offset (X, Y)
              shadowOpacity: 1, // iOS shadow opacity
              shadowRadius: 4, // iOS shadow blur radius
              
            },
            'android': {
              elevation: 10, // Android shadow elevation
            },
          }),
        
        
    },
    text: {
        color: '#FFB45C',
        fontFamily: 'Text-Regular',
        width: '100%',
        fontSize: 16,
        marginBottom: 10,
    },
    watt: {
        color: '#FFB45C',
        fontFamily: 'Text-Regular',
    },
    image: {
        width: 10,
        height: 20
    },
    icon: {
        width: 70,
        height: 84,
        marginTop: -24
    },
    iconContainer: {
        width: '100%',
    },
    rowIcons: {
        flexDirection: 'row',
        width: '100%',
        height: 22,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: colours.dawnBlue,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalText: {
        margin: 15,
        textAlign: 'center',
      },

      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: isLargeTablet ? wp(50) : isSmallTablet ? wp(50) : wp(80),
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

export default SquareWidget;