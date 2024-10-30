// This screen contains a navigational bar at the top, an update component, a widget and a chart.

import {useModal} from '../../Utilities/ModalContext.js'
import React from 'react'
import { View, StyleSheet, ScrollView, Modal, Button, Text } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import { Dimensions } from 'react-native';
import HeatConsumptionSimChart from '../../components/HeatConsumptionSimChart.js';
import HeatRecoverySimChart from '../../components/HeatRecoverySimChart.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colours } from '../../Utilities/colours.js';

const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const ThermalScreen = () => {
  const { modalVisible, modalContent, showModal, hideModal } = useModal()
  
  const handleChatPress = () => {
    showModal('Chat pressed')
  };

  const handleUpdatePress = () => {
    showModal('Update pressed')
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <GeneralUpdateComponent 
        updateText="You are recovering lots of heat from cooking today." 
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
        <HeatConsumptionSimChart title='Heat Consumption' subtitle='Energy used each hour' />
        <HeatRecoverySimChart title='Heat Recovery' subtitle='Reclaimed Heat' />
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colours.darkestBlue
},

    container: {
        height: isLargeTablet ? hp(100) : hp(120),
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: '#0E1E38'
    },
    text: {
        color: '#FFF1CF',
        fontSize: 24,
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


})
export default ThermalScreen;