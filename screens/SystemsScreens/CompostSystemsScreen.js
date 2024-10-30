import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Modal, Text, Button, TouchableOpacity } from 'react-native'
import SystemsTopTabNavigator from '../../components/SystemsTopTabNavigator.js'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'
import { useModal } from '../../Utilities/ModalContext.js'
import { colours } from '../../Utilities/colours.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const CompostSystemsScreen = () => {
    const { showModal, hideModal, modalVisible, modalContent } = useModal()

    const handleChatPress = () => {
        showModal('Chat pressed')
    }
    const handleUpdatePress = () => {
        showModal('Update pressed')
    }

    return (
        <ScrollView >
        <View style={styles.container}>
            <GeneralUpdateComponent 
            updateText='You do not have to worry about your composter for 5 weeks.' 
            onChatPress={handleChatPress}
            onUpdatePress={handleUpdatePress}
            />
            <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={hideModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.text}>{ modalContent }</Text>
                        <Button color={colours.sweetYellow} title='Close' onPress={hideModal} />
                    </View>
                </View>
            
            </Modal>
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
    container: {
            flex: 1,
            height: height,
            width: width,
            justifyContent: 'top',
            alignItems: 'center',
            borderWidth: 3,
            backgroundColor: '#0E1E38'
            
        }, 
    text: {
        color: colours.darkestBlue,
        fontFamily: 'Text-Regular'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: colours.dawnBlue,
        borderRadius: 10,
        alignItems: 'center',
      },
          // ***** Large Table ***** //
    ltWidgetRow: {
        flexDirection: 'row',
        gap: 16
      }
  
})

export default CompostSystemsScreen;