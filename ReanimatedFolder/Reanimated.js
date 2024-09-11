import React from 'react'
import {View, Button} from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function ReanimatedComponent() {
    const width = useSharedValue(100);
    const backgroundColor = useSharedValue('violet')

    const handlePress = () => {
        if (width.value < 350) {
            width.value = withSpring(width.value + 50);
            backgroundColor.value = 'blue'
        } else if (width.value = 350) {
            backgroundColor.value = 'red'

        } 
        };

    const reset = () => {
       width.value = withSpring(100);
        backgroundColor.value = 'violet'

    }

    return (
        <View style={{flex: 1, alignItems: 'center', margin: 20}}>
        <Animated.View
            style={{
                width,
                height: 100,
                backgroundColor,
                borderRadius: 30,
            }}
        />
        <Button onPress={handlePress} title='Click me' />
        <Button onPress={reset} title='Reset' />

        </View>
    )
}