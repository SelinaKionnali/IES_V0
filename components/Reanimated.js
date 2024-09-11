import React from 'react'
import {View, Button} from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated';

export default function ReanimatedComponent() {
    const width = useSharedValue(100);

    const handlePress = () => {
        if (width.value < 350) {
            width.value = width.value + 50;
        }
       
    }
    const reset = () => {
        width.value = 100;
    }

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
        <Animated.View
            style={{
                width,
                height: 100,
                backgroundColor: 'violet',
            }}
        />
        <Button onPress={handlePress} title='Click me' />
        <Button onPress={reset} title='Reset' />

        </View>
    )
}