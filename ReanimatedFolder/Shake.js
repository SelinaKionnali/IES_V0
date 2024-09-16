import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, withRepeat} from 'react-native-reanimated'

const Shake = () => {

    const offset = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value}]
    }))

    const OFFSET = 40;
    const TIME = 250;

    const handlePress = () => {
        offset.value = withSequence(
            // start from -OFFSET
            withTiming(-OFFSET, {duration: TIME / 2}),
            // shake between -OFFSET and OFFSET 5 times
            withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
            // go back to 0 at the end
            withTiming(0, {duration: TIME/2})
        );
    }

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