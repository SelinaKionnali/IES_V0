import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { View, StyleSheet, Dimensions, ScrollView, Modal, Text, Button, TouchableOpacity } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'
import BatteryChargeChart from '../../components/BatteryChargeChart.js'
import StatusWidget from '../../components/StatusWidget.js'
import { solarData } from '../../data/solarData.js'
import { useModal } from '../../Utilities/ModalContext.js'
import { colours } from '../../Utilities/colours.js';

const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const FoodSystemsScreen = () => {
    const { modalVisible, modalContent, showModal, hideModal } = useModal();

    const handleChatPress = () => {
        showModal('Chat Pressed');
      };
    
      const handleUpdatePress = () => {
        showModal('Update Pressed');
      };
    
    return (
        <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <GeneralUpdateComponent 
          updateText='Your garden and fish are both in great health!'
          onChatPress={handleChatPress}
          onUpdatePress={handleUpdatePress}
          />
          <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <Text>{modalContent}</Text>
                <Button title="Close" onPress={hideModal} />
              </View>
            </View>
          </Modal>
          <BatteryChargeChart number='12' label='Days until next harvest' />
          <View style={styles.rowContainer}>
          <StatusWidget 
          title="Irrigation" 
          status={solarData.systemStatus.status} 
          message='No leaks' 
          />
          <StatusWidget 
          title="Irrigation" 
          status={solarData.systemStatus.status} 
          message='No leaks' 
          />

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
    backgroundColor: colours.darkestBlue
  },
    container: {
            flex: 1,
            height: hp(120),
            width: wp(100),
            justifyContent: 'top',
            alignItems: 'center',
            backgroundColor: '#0E1E38'
            
        }, 
    text: {
        color: 'red'
    },
    rowContainer: {
        flexDirection: 'row',
        gap: 10
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
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
          // ***** Large Table ***** //
      ltWidgetRow: {
        flexDirection: 'row',
        gap: 16
      }

})

export default FoodSystemsScreen;