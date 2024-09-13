import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'

const Shake = () => {

    const offset = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value}]
    }))

    const OFFSET = 40;

    const handlePress = () => {
        offset.value = withTiming(OFFSET, { duration: 500 }, () => {
            // Reset back after the animation ends
            offset.value = withTiming(0, { duration: 500 });
        });    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
            <Button onPress={handlePress} title="Shake" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },
      box: {
        width: 100,
        height: 100,
        margin: 50,
        borderRadius: 15,
        backgroundColor: '#b58df1',
      },
    })

      export default Shake;