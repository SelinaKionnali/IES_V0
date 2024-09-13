import Animated, { useSharedValue, withTiming, useAnimatedProps, Easing } from "react-native-reanimated";
import {Button, View, StyleSheet} from 'react-native'
import {Circle, Svg} from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatedPropsExample = () => {
    const r = useSharedValue(20);

    const handlePress = () => {
        r.value += 10;
    }

    const reset = () => {
        r.value = 10
    }

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value, {
            duration: 1000,
            easing: Easing.bounce
        }),
    }))

    return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedCircle 
        cx={100} 
        cy={100} 
        r={r} 
        fill={'green'}
        animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress} title="click me"/>
      <Button onPress={reset} title="reset me"/>

    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      svg: {
        height: 250,
        width: 200,
      },
})

export default AnimatedPropsExample;