// This screen contains a navigational bar at the top, an update component, a widget and a chart.

import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, ScrollView, Dimensions, Platform, Modal, Text, Button  } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent'
import ProgressChartsWidget from '../../components/ProgressChartsWidget'
import SolarProgressChart from '../../components/SolarProgressChart.js'
import StatusWidget from '../../components/StatusWidget.js'
import {solarData} from '../../data/solarData.js'
import ThermalProgressChart from '../../components/ThermalProgressChart.js'
import { colours } from '../../Utilities/colours.js'
import BatteryChargeSimGraph from '../../components/BatteryChargeSimGraph.js'
import { useModal } from '../../Utilities/ModalContext.js'


const {width, height} = Dimensions.get('screen')
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;


const PowerScreen = () => {
  const { modalVisible, modalContent, showModal, hideModal } = useModal();

  const handleChatPress = () => {
    showModal('Chat Pressed');
  };

  const handleUpdatePress = () => {
    showModal('Update Pressed');
  };

  const wattInToday = solarData.daily


    return (
      <ScrollView style={styles.scroll} >
        <View style={styles.container}>
          <GeneralUpdateComponent 
          updateText="Your batteries are full and there are no significant battery drains." 
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

          <ProgressChartsWidget 
            solarChart={<SolarProgressChart number='41%' text='Solar Battery Charge'/>}
            thermalChart={<ThermalProgressChart number='92%' text='Solar Battery Health' />}
          />
          <View style={styles.widgetContainer}>
          <StatusWidget 
          title="System Status" 
          status={solarData.systemStatus.status} 
          message={solarData.systemStatus.message} 
          />
          <StatusWidget 
          title="Ghost Drain" 
          status={solarData.ghostDrainStatus.status} 
          message={solarData.ghostDrainStatus.message} 
          />
          </View>
          <BatteryChargeSimGraph title='State of Charge' subtitle='Your battery level over time' />
        </View>
        </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    scroll: {
      backgroundColor: colours.darkestBlue,
    },
      container: {
          flex: 1,
          justifyContent: 'top',
          alignItems: 'center',
          backgroundColor: colours.darkestBlue,
          height: height + 300
      },
      text: {
          color: '#FFF1CF',
          fontSize: 24,
          fontWeight: Platform.OS === 'android' ? '100' : '200',
      },
      widgetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
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

  })

export default PowerScreen;