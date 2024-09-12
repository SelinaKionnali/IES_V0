import React from 'react'
import Animated, {useSharedValue, withSpring, useAnimatedStyle} from 'react-native-reanimated'
import {View, Button, StyleSheet} from 'react-native'

export default function TranslateXexample() {

const translateX = useSharedValue(0);

const handlePress = () => {
    translateX.value += 50;
}

const reset = () => {
    translateX.value = withSpring(0)
}


    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{translateX: withSpring(translateX.value * 0.5)}],
    }));


return (
    <>
    <Animated.View style={[styles.box, animatedStyles]} />
    <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
        <Button onPress={reset} title="Reset me" />
    </View>
    </>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 50,
      },
})