import React from 'react'
import { TouchableOpacity, View , StyleSheet, Image, Switch} from 'react-native'
import cog from '../assets/icons/cog.png'
import alarm from '../assets/icons/alarm.png'
import { colours } from '../Utilities/colours';

const ToggleRow = ({ onPressIcon1, onPressIcon2, toggleValue, onToggleChange }) => {
    return (
      <View style={styles.iconRowContainer}>
        <TouchableOpacity onPress={onPressIcon1}>
          <Image source={alarm} name="icon1" size={24} style={styles.alarm} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressIcon2}>
          <Image source={cog} name="icon2" size={24} style={styles.alarm}  />
        </TouchableOpacity>
        <Switch 
            trackColor={{ true: colours.whiteGlow }}
            thumbColor={toggleValue ? colours.sweetYellow : colours.whiteGlow}
            value={toggleValue} 
            onValueChange={onToggleChange} 
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    iconRowContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    alarm: {
        width: 20,
        height: 20
    }
  })

  export default ToggleRow;