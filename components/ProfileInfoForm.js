import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { colours } from '../Utilities/colours';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('screen');
const isLargeTablet = width >= 1024;
const isSmallTablet = width >= 600 && width < 1024;
const isPhone = width < 600;

const ProfileInfoForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in information:</Text>
      <Text style={styles.subheader}>This information will be <Text style={styles.boldText}>publicly visible</Text> on your connect profile</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Sun&toast42" placeholderTextColor={colours.sweetYellow} style={styles.input} />
      </View>
      <View style={[styles.inputContainer, styles.aboutMeContainer]}>
        <Text style={styles.label}>About Me</Text>
        <TextInput
          placeholder="Tell Your Story"
          placeholderTextColor={colours.dawnBlue}
          style={[styles.input, styles.textArea]}
          multiline={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pronouns</Text>
        <TextInput placeholder="She/her" placeholderTextColor={colours.dawnBlue} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday</Text>
        <TextInput placeholder="5/6/1989" placeholderTextColor={colours.dawnBlue} style={styles.input} />
      </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.popupBlue,
    padding: isLargeTablet ? wp(4) : wp(5),
    borderRadius: 20,
    width: isLargeTablet ? wp(63) : isSmallTablet ? wp(70) : wp(85),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  header: {
    fontSize: isLargeTablet ? wp(3) : isSmallTablet ? wp(4) : wp(5),
    color: colours.sweetYellow,
    fontFamily: 'Text-Bold',
    marginBottom: hp(1),
  },
  subheader: {
    fontSize: isLargeTablet ? wp(2.2) : isSmallTablet ? wp(3) : wp(3.5),
    color: colours.dawnBlue,
    fontFamily: 'Text-Regular',
    marginBottom: hp(3),
  },
  boldText: {
    fontFamily: 'Text-Bold',
  },
  inputContainer: {
    backgroundColor: colours.popupBlue,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colours.whiteGlow,
    marginBottom: hp(1.5),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  label: {
    position: 'absolute',
    top: -hp(1),
    left: wp(3),
    backgroundColor: colours.popupBlue,
    paddingHorizontal: 5,
    color: colours.whiteGlow,
    fontSize: isLargeTablet ? wp(2.2) : isSmallTablet ? wp(2.8) : wp(3.2),
  },
  input: {
    fontSize: isLargeTablet ? wp(2.5) : isSmallTablet ? wp(3.5) : wp(4),
    fontFamily: 'Text-Regular',
    color: colours.darkBlue,
  },
  aboutMeContainer: {
    height: isLargeTablet ? hp(15) : isSmallTablet ? hp(12) : hp(10),
  },
  textArea: {
    textAlignVertical: 'top', 
    fontFamily: 'Text-Regular',
    height: '100%',
  },
});

export default ProfileInfoForm;