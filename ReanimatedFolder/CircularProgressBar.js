import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg'

const BACKGROUND_COLOR = "#183564";
const BACKGROUND_STROKE_COLOR = "#303858";
const STROKE_COLOR = "rgba(255, 180, 92, 1)";

const {
    width, height
} = Dimensions.get('window');

const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2*Math.PI)

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircularProgressBar() {

    const progress = useSharedValue(0);

// Remove useCallback temporarily for testing
const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {duration: 2000});
}, [])

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value) // 1- changes direction of animation
    }))

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progress.value * 100)}%`;
    })

    return (
        <View style={styles.container}>
            <ReText style={styles.progressText} text={progressText}/>
            <Svg width={width} height={height} >
                <Circle
                cx={width/2} 
                cy={height/2} 
                r={R} 
                stroke={BACKGROUND_STROKE_COLOR} 
                strokeWidth={30}  
                />
                <AnimatedCircle
                cx={width/2} 
                cy={height/2} 
                r={R} 
                stroke={STROKE_COLOR} 
                strokeWidth={15}  
                strokeDasharray={CIRCLE_LENGTH}
                strokeDashoffset={CIRCLE_LENGTH * 0.10}
                animatedProps={animatedProps}
                strokeLinecap={'round'}
                />
            </Svg>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Run</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
    },
    progressText: {
        position: 'relative', // Position the text absolutely in the View
        zIndex: 2,
        fontSize: 80,
        fontFamily: 'Text-Light',
        color: 'rgba(255, 241, 207, 0.5)',
        textAlign: 'center',
        top: '50%',  // Vertically center the text
        width: 300
        },
        button: {
            zIndex: 5,
            bottom: 20,
            left: -100,
            width: width * 0.7,    
            height: 60,
            backgroundColor: BACKGROUND_STROKE_COLOR,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            fontSize: 25,
            color: 'rgba(255, 241, 207, 0.5)',
            fontFamily: 'Text-Regular',

        }
    
})