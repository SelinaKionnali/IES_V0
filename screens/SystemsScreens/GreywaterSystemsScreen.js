import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Modal, Button, Text } from 'react-native'
import GeneralUpdateComponent from '../../components/GeneralUpdateComponent.js'
import WidgetContainer from '../../components/Widgets/WidgetContainer.js'
import { useModal } from '../../Utilities/ModalContext.js'
import { colours } from '../../Utilities/colours.js'

const {width, height} = Dimensions.get('screen')

const GreywaterSystemsScreen = () => {
    const { showModal, hideModal, modalVisible, modalContent } = useModal();

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
            updateText='Your grey water tank is filling.' 
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
                        <Text>{ modalContent }</Text>
                        <Button color={colours.sweetYellow} onPress={hideModal} title='Close'/>
                    </View>
                </View>

            </Modal>
            <WidgetContainer />
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
        color: 'red'
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
})

export default GreywaterSystemsScreen;