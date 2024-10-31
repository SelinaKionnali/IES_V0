//The dashboard screen contains an update component and a widget showing some progress charts from solar and thermal.

import React, {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, ScrollView, Dimensions, Modal, Pressable, Text, TouchableOpacity } from 'react-native'
import GeneralUpdateComponent from '../components/GeneralUpdateComponent.js'
import SystemsTopTabNavigator from '../components/SystemsTopTabNavigator.js'
import WidgetContainer from '../components/Widgets/WidgetContainer.js'
import SquareWidget from '../components/Widgets/SquareWidget.js'
import coffee from '../assets/icons/coffee2.png'
import lightbulb from '../assets/icons/Lightbulb.png'
import {colours} from '../Utilities/colours.js'

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const DashboardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('')

  const handleChatPress = () => {
    setModalVisible(true)
    setModalContent('Chat Pressed')
  }

  const handleUpdatePress = () => {
    setModalVisible(true)
    setModalContent('Update Pressed')
  }

  return (
    <ScrollView style={styles.scroll} >
      <View style={styles.container}>
        <SystemsTopTabNavigator />
        <GeneralUpdateComponent 
          updateText="Pick systems to compare and I will help explain the data."
          onChatPress={handleChatPress}
          onUpdatePress={handleUpdatePress}
          />

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

        <View style={styles.squareWidgetRow}>
          <SquareWidget watt='2 W' icon={coffee} title='Morning Mode' />
          <SquareWidget watt='2 W' icon={lightbulb} title='Smart Light' />
        </View>
        {isLargeTablet ? (
          <>
            <View style={styles.ltWidgetRow}>        
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
            </View>

            <View style={styles.ltWidgetRow}>        
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
            </View>

            <View style={styles.ltWidgetRow}>        
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
              <TouchableOpacity>    
                  <WidgetContainer />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <WidgetContainer />
            <WidgetContainer />
            <WidgetContainer />
            <WidgetContainer />
          </>
      )}
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll: {
      backgroundColor: colours.darkestBlue,
      flex: 1
    },
    container: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: colours.darkestBlue,
    },
    squareWidgetRow: {
      flexDirection: 'row',
      gap: 16
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
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


    // ***** Large Table ***** //
    ltWidgetRow: {
      flexDirection: 'row',
      gap: 16
    }

})

export default DashboardScreen;